import React from "react";
import {FaPlay} from "react-icons/fa";
import Link from "next/link";

import {createItem} from '../../../pages/slider'
import {IMovieContent} from "../types";

import styles from '../../../styles/slider.module.scss'

export const MovieContent = ({activeIndex, onTouchStart, onTouchMove, onTouchEnd}: IMovieContent) => {
  const item = createItem(0, activeIndex);
  return (
      <div
          className={styles["slider__img-container"]}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
      >
        <div className={styles["slider__description"]}>
          <div className={styles["title"] + ' ' + styles['slider__title']}>{item.movie.title}</div>
          <span className={styles["slider__text"]}>
            Streamlab is a long established fact that a reader will be distracted by the readable content of a page when
            Streamlab at its layout Streamlab.
          </span>
          <Link href='/single-movie'>
            <button className={styles["gen-button"] + ' ' + styles['slider__button']}>
              <FaPlay/>
              play now
            </button>
          </Link>

        </div>
        <div className={styles["slider__img"]}>
          <img src={item.movie.image} alt={item.movie.title}/>
        </div>
      </div>
  );
};