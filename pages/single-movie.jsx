import {FaEye, FaFacebookF, FaInstagram, FaTwitter, FaPlay, FaPlus, FaShareAlt, FaRegHeart} from 'react-icons/fa'
import React, {useState} from "react";

import {movieData} from "../components/movieData/movieData";

import styles from '../styles/single-movie.module.scss'


const ListItems = ({movieCount}) => {
  const slice = movieData.slice(0, movieCount)

  return (slice.map((item) =>
          <div key={item.movie.id} className={styles['more__item']}>
            <div className={styles['more__item-container']}>
              <img src={item.movie.image} alt={item.movie.title} className={styles['more__item-img']}/>
              <button className={styles['more__item-button']}><FaPlay/></button>
            </div>
            <div className={styles['more__buttons']}>
              <button className={styles['more__buttons-like']}><FaRegHeart/></button>
              <button className={styles['more__buttons-menu']}>
                <FaShareAlt/>
                <div className={styles['like-content'] + ' ' + ['triangle-right']}>
                  <a href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
                     className={styles['more__social-item']}><FaFacebookF/></a>
                  <a href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
                     className={styles['more__social-item']}><FaInstagram/></a>
                  <a href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
                     className={styles['more__social-item']}><FaTwitter/></a>
                </div>
              </button>
              <button className={styles['more__buttons-add']}><FaPlus/></button>
            </div>
            <div className={styles['more__item-description']}>
              <a href='#' className={styles['more__item-title']}>{item.movie.title}</a>
              <span className={styles['more__item-duration']}>{item.movie.duration}</span>
              <a href='#' className={styles['more__item-genre']}>Action</a>
            </div>
          </div>)
  );
}

const SingleMovie = () => {

  const [movieCount, setMovieCount] = useState(6);
  const loadMore = () => setMovieCount(movieCount + 6)

  return (
      <>
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
            <div className={styles['movie__views']}><FaEye className={styles['movie__views-eye']}/> 237 Views</div>
          </div>
          <p className={styles["movie__text"]}>
            Streamlab is a long established fact that a reader will be distracted by the readable content of a page when
            Streamlab at its layout. The point of using Lorem Streamlab is that it has a more-or-less normal
            distribution
            of Streamlab as opposed Streamlab.
          </p>
          <ul className={styles['movie__list']}>
            <li className={styles['movie__list-item']}>
              <span className={styles['movie__description']}>Language: </span>
              <span className={styles['movie__meaning']}>English</span>
            </li>
            <li className={styles['movie__list-item']}>
              <span className={styles['movie__description']}>Subtitles: </span>
              <span className={styles['movie__meaning']}>English</span>
            </li>
            <li className={styles['movie__list-item']}>
              <span className={styles['movie__description']}>Audio Languages: </span>
              <span className={styles['movie__meaning']}>English</span>
            </li>
            <li className={styles['movie__list-item']}>
              <span className={styles['movie__description']}>Genre: </span>
              <span>
              <a href='#' className={styles['movie__genre']}>Action, </a>
            </span>
              <span>
              <a href='#' className={styles['movie__genre']}>Documentary</a>
            </span>
            </li>
            <li className={styles['movie__list-item']}>
              <span className={styles['movie__description']}>Run Time: </span>
              <span className={styles['movie__meaning']}>1hr 24 mins</span>
            </li>
            <li className={styles['movie__list-item']}>
              <span className={styles['movie__description']}>Release Date: </span>
              <span className={styles['movie__meaning']}>14 Aug, 2018</span>
            </li>
          </ul>
          <div className={styles['movie__social']}>
            <span>Social Share: </span>
            <a href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
               className={styles['movie__social-item']}><FaFacebookF/></a>
            <a href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
               className={styles['movie__social-item']}><FaInstagram/></a>
            <a href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
               className={styles['movie__social-item']}><FaTwitter/></a>
          </div>
        </div>

        <div className={styles['more']}>
          <h2 className={styles['more__title']}>More Like This</h2>
          <div className={styles['more__container']}>
            <ListItems movieCount={movieCount}/>
          </div>
          <button className={styles['more__button-load']} onClick={loadMore}>
            Load more
          </button>
        </div>

      </>
  )
}

export default SingleMovie