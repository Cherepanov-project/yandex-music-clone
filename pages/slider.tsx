import React, {useState, useEffect} from 'react';
import {FaChevronUp, FaChevronDown} from 'react-icons/fa';

import {movieData} from '../components/slider/movieData'
import {MovieContent} from "../components/slider/movieContent/movieContent";
import {MoviesPreview} from "../components/slider/moviesPreview/moviesPreview";
import {UIEvent} from '../components/slider/types'

import {SliderContainer, Preview, PreviewButton, PreviewImg, SliderDots, SliderDot, SliderDotActive} from './sliderStyles'

const slideWidth = 15;
const length = movieData.length;
movieData.push(...movieData);

export const createItem = (position: number, index: number) => {
  return ({
    styles: {transform: `translateY(${position * slideWidth}em)`},
    movie: movieData[index].movie,
  });
};

const keys = Array.from(Array(movieData.length).keys());

export const Slider: React.FC = () => {
  const [items, setItems] = useState(keys);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const prevClick = (step = 1) => {
    setItems(prev => prev.map((el, i) => prev[(i + step + items.length) % items.length]));
  };

  const nextClick = (step = 1) => {
    setItems((prev) => prev.map((el, i) => prev[(i - step + items.length) % items.length]));
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: UIEvent) => {
    if (window.innerWidth < 1024) {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const onTouchMove = (e: UIEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? nextClick() : prevClick();
  };

  useEffect(() => {
    setActiveIndex((length - (items[0] % length)) % length);
  }, [items]);

  return (
      <SliderContainer>
        <MovieContent
            activeIndex={activeIndex}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        />
        <SliderDots>
          {items.slice(0, length).map((pos, i) =>
              i === activeIndex ? <SliderDotActive key={i}/> : <SliderDot key={i}/>
          )}
        </SliderDots>

        <Preview>
          <PreviewButton onClick={() => prevClick()}><FaChevronUp/></PreviewButton>
          <PreviewImg>
            {items.map((pos, i) => <MoviesPreview key={i} idx={i} pos={pos}/>)}
          </PreviewImg>
          <PreviewButton onClick={() => nextClick()}><FaChevronDown/></PreviewButton>
        </Preview>
      </SliderContainer>
  );
};