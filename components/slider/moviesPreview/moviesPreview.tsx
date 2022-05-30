import React from "react";

import {createItem} from '../../../pages/slider1'
import {MoviesPreviewType} from "../types";

import {PreviewSlideItem, PreviewImg, PreviewInfo, PreviewTitle, PreviewDuration, PreviewButton} from './moviePreview'

export const MoviesPreview = ({pos, idx}: MoviesPreviewType) => {
  const item = createItem(pos, idx);
  return (
      <PreviewSlideItem style={item.styles}>
        <PreviewImg>
          <PreviewInfo>
            <PreviewTitle>{item.movie.title}</PreviewTitle>
            <PreviewDuration>{item.movie.duration}</PreviewDuration>
            <PreviewButton>Action</PreviewButton>
          </PreviewInfo>
          <img src={item.movie.image} alt={item.movie.title}/>
        </PreviewImg>
      </PreviewSlideItem>
  );
};