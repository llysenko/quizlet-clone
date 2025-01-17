'use client';

import { useState } from 'react';

import CarouselCard from '@/components/carousel/carousel-card';
import CarouselNavigation from '@/components/carousel/carousel-navigation';

import styles from './styles.module.scss';

const imagesPath = '/images/';
const carouselData = [
  {
    title: 'Learn',
    bgColorClass: 'bg-winter-wizard',
    textColorClass: 'text-dark-jungle-green',
    imageSrc: `${imagesPath}learn@2x.avif`
  },
  {
    title: 'Study Guides',
    bgColorClass: 'bg-rich-brilliant-lavender',
    textColorClass: 'text-dark-jungle-green',
    imageSrc: `${imagesPath}study_guides@2x.avif`
  },
  {
    title: 'Flashcards',
    bgColorClass: 'bg-palatinate-blue',
    textColorClass: 'text-white',
    imageSrc: `${imagesPath}flashcards@2x.avif`
  },
  {
    title: 'Practice Tests',
    bgColorClass: 'bg-macaroni-and-cheese',
    textColorClass: 'text-dark-jungle-green',
    imageSrc: `${imagesPath}practice_tests@2x.avif`
  },
  {
    title: 'Expert Solutions',
    bgColorClass: 'bg-magic-mint',
    textColorClass: 'text-dark-jungle-green',
    imageSrc: `${imagesPath}expert_solutions@2x.avif`
  }
];

export default function Carousel() {
  const totalPerPage = 4;
  const [carouselItems, setCarouselItems] = useState(carouselData.slice(0, totalPerPage));

  const movePrev = () => {
    const firstCarouselItemIndex = carouselData.findIndex(el => el.imageSrc === carouselItems.at(0)?.imageSrc);
    const nextCarouselItem = carouselData[firstCarouselItemIndex - 1] || carouselData.at(-1);
    const items = [nextCarouselItem, ...carouselItems.slice(0, -1)];

    setCarouselItems(items);
  };

  const moveNext = () => {
    const lastCarouselItemIndex = carouselData.findIndex(el => el.imageSrc === carouselItems.at(-1)?.imageSrc);
    const nextCarouselItem = carouselData[lastCarouselItemIndex + 1] || carouselData[0];
    const items = [...carouselItems.slice(1), nextCarouselItem];

    setCarouselItems(items);
  };

  return (
    <div className={styles.carousel}>
      <div className="m-auto flex touch-pan-x snap-x snap-mandatory gap-8 scroll-smooth">
        {carouselItems.map(carousel => (
          <CarouselCard key={carousel.imageSrc} data={carousel} />
        ))}
      </div>
      <CarouselNavigation movePrev={movePrev} moveNext={moveNext} />
    </div>
  );
}
