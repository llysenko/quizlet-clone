'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

import Container from '@/components/container';

export default function SetHeader({ children }: { children: ReactNode }) {
  const headerRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const handleScroll = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsAtTop(entry.isIntersecting && entry.boundingClientRect.top <= 0);
        },
        {
          root: null,
          threshold: 0.1
        }
      );

      if (headerRef.current) {
        observer.observe(headerRef.current);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (observer && headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div ref={headerRef} className="sticky top-0 z-50" style={{ background: isAtTop ? 'white' : 'transparent' }}>
      <Container className="flex items-center justify-between">{children}</Container>
    </div>
  );
}
