import IconButton from '@/components/icon-button';

type Props = {
  movePrev: () => void;
  moveNext: () => void;
};

export default function CarouselNavigation({ movePrev, moveNext }: Props) {
  return (
    <>
      <div className="top absolute left-4 z-10 flex items-center">
        <IconButton
          size="large"
          iconSrc="/static/images/icon__chevron.svg"
          title="Previous"
          className="bg-white hover:bg-bright-gray"
          onClick={movePrev}
        />
      </div>
      <div className="top absolute right-4 z-10 flex items-center">
        <IconButton
          size="large"
          iconSrc="/static/images/icon__chevron.svg"
          title="Next"
          className="rotate-180 bg-white hover:bg-bright-gray"
          onClick={moveNext}
        />
      </div>
    </>
  );
}
