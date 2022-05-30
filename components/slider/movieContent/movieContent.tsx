import React from "react";
import {FaPlay} from "react-icons/fa";
import Link from "next/link";

import {createItem} from '../../../pages/slider1'
import {MovieContentType} from "../types";

import {SliderImgContainer, SliderDescription, SliderTitle, SliderText, SliderButton, SliderImg} from './movieContentStyles'

export const MovieContent: React.FC<MovieContentType> = ({activeIndex, onTouchStart, onTouchMove, onTouchEnd}) => {
  const item = createItem(0, activeIndex);
  return (
      <SliderImgContainer onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <SliderDescription>
          <SliderTitle>{item.movie.title}</SliderTitle>
          <SliderText>
            Streamlab is a long established fact that a reader will be distracted by the readable content of a page when
            Streamlab at its layout Streamlab.
          </SliderText>
          <Link href='/single-movie'>
            <SliderButton><FaPlay/>play now</SliderButton>
          </Link>
        </SliderDescription>
        <SliderImg><img src={item.movie.image} alt={item.movie.title}/></SliderImg>
      </SliderImgContainer>
  );
};