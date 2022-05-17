import styles from '../styles/single-movie.module.scss'
import {FaEye} from 'react-icons/fa'
import React from "react";

const SingleMovie = () => {
  return (
      <div className={styles['movie']}>
        <iframe className={styles['movie__player']} src="https://www.youtube.com/embed/LXb3EKWsInQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>

        </iframe>
        <h2 className={styles['movie__title']}>My Generations</h2>
        <div className={styles['movie__meta']}>
          <button className={styles['movie__mpaa']}>TV-PG</button>
          <div className={styles['movie__views']}><FaEye />237 Views</div>
        </div>
        <span className={styles["movie__text"]}>
            Streamlab is a long established fact that a reader will be distracted by the readable content of a page when
            Streamlab at its layout. The point of using Lorem Streamlab is that it has a more-or-less normal distribution
            of Streamlab as opposed Streamlab
        </span>
      </div>
  )

}

export default SingleMovie