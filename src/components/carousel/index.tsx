'use client';

import { useState } from 'react';

import CarouselCard from '@/components/carousel-card';
import CarouselNavigation from '@/components/carousel-navigation';
import styles from './styles.module.scss';

export default function Carousel() {
  const imagesPath = '/static/images/';
  const carouselData = [
    {
      title: 'Learn',
      bgColor: '#98E3FF',
      textColor: '#000',
      imageSrc: `${imagesPath}learn@2x.avif`
    },
    {
      title: 'Study Guides',
      bgColor: '#EEAAFF',
      textColor: '#000',
      imageSrc: `${imagesPath}study_guides@2x.avif`
    },
    {
      title: 'Flashcards',
      bgColor: '#423ed8',
      textColor: '#fff',
      imageSrc: `${imagesPath}flashcards@2x.avif`
    },
    {
      title: 'Practice Tests',
      bgColor: '#FFC38C',
      textColor: '#000',
      imageSrc: `${imagesPath}practice_tests@2x.avif`
    },
    {
      title: 'Expert Solutions',
      bgColor: '#98F1D1',
      textColor: '#000',
      imageSrc: `${imagesPath}expert_solutions@2x.avif`
    }
  ];
  const totalPerPage = 4;
  const [carouselItems, setCarouselItems] = useState(carouselData.slice(0, totalPerPage));
  const [currentPage, setCurrentPage] = useState(0);

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
