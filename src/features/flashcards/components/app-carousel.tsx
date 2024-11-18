import { useRef, useState } from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

import { Button } from '@nextui-org/react';
import Image from 'next/image';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 }
};

export default function AppCarousel({ items }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNextSlideDisabled, setIsNextSlideDisabled] = useState(false);
  const [isPrevSlideDisabled, setIsPrevSlideDisabled] = useState(false);
  const carousel = useRef<AliceCarousel>(null);

  const syncActiveIndexForSwipeGestures = (e: EventObject) => setActiveIndex(e.item);

  const onSlideChanged = (e: EventObject) => {
    syncActiveIndexForSwipeGestures(e);
  };

  const onUpdated = (e: EventObject) => {
    setIsNextSlideDisabled(e.isNextSlideDisabled);
    setIsPrevSlideDisabled(e.isPrevSlideDisabled);
  };

  return (
    <div className="relative">
      <AliceCarousel
        mouseTracking
        disableDotsControls
        disableButtonsControls
        items={items}
        activeIndex={activeIndex}
        responsive={responsive}
        onSlideChanged={onSlideChanged}
        onUpdated={onUpdated}
        ref={carousel}
      />
      <nav key="nav" className="b-refs-navs">
        {items.map((item: any, i: number) => {
          return <span key={i} onClick={() => carousel?.current?.slideTo(i)} />;
        })}
      </nav>
      <div
        key="btns"
        className="pointer-events-none absolute top-1/2 flex items-center justify-between w-full translate-y-[-50%]">
        <Button
          isIconOnly
          isDisabled={isPrevSlideDisabled}
          size="sm"
          radius="full"
          aria-label="Prev"
          className="bg-blue">
          <Image
            src="/static/images/icon__chevron_down.svg"
            alt="Prev"
            width={16}
            height={16}
            className="rotate-90"
            onClick={(e: any) => carousel?.current?.slidePrev(e)}
          />
        </Button>
        <Button
          isIconOnly
          isDisabled={isNextSlideDisabled}
          variant="flat"
          size="sm"
          radius="full"
          aria-label="Next"
          className="bg-blue">
          <Image
            src="/static/images/icon__chevron_down.svg"
            alt="Next"
            width={16}
            height={16}
            className="rotate-[-90deg]"
            onClick={(e: any) => carousel?.current?.slideNext(e)}
          />
        </Button>
      </div>
    </div>
  );
}
