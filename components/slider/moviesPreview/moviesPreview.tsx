import React from "react";

import {createItem} from '../../../pages/slider'
import {IMoviesPreview} from "../types";

import styles from '../../../styles/slider.module.scss'

export const MoviesPreview = ({pos, idx}: IMoviesPreview) => {
  const item = createItem(pos, idx);
  return (
      <div className={styles["preview__slide-item"]} style={item.styles}>
        <div className={styles['preview__img']}>
          <div className={styles['preview__info']}>
            <h3 className={styles['title'] + ' ' + styles['preview__title']}>{item.movie.title}</h3>
            <span className={styles["preview__duration"]}>{item.movie.duration}</span>
            <button className={styles["gen-button"] + ' ' + styles['preview__button-genre']}>Action</button>
          </div>
          <img src={item.movie.image} alt={item.movie.title}/>
        </div>
      </div>
  );
};