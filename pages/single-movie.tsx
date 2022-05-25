import {FaEye, FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import React, {useState} from "react";

import {ListItems} from "../components/single-movie/ListItems";
import {
  Movie,
  MoviePlayer,
  MovieTitle,
  MovieMeta,
  MovieMPAA,
  MovieViews,
  MovieText,
  MovieList,
  MovieListItem,
  MovieDescription,
  MovieGenre,
  MovieSocial,
  MovieSocialItem,
  More, MoreTitle, MoreContainer, MoreButtonLoad
} from '../styles/single-movie'

const SingleMovie = () => {
  const [movieCount, setMovieCount] = useState(4);
  const loadMore = () => setMovieCount(movieCount + 4)

  return (
      <>
        <Movie>
          <MoviePlayer src="https://www.youtube.com/embed/LXb3EKWsInQ"
                       title="YouTube video player"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen>

          </MoviePlayer>
          <MovieTitle>My Generations</MovieTitle>
          <MovieMeta>
            <MovieMPAA>TV-PG</MovieMPAA>
            <MovieViews><FaEye/> 237 Views</MovieViews>
          </MovieMeta>
          <MovieText>
            Streamlab is a long established fact that a reader will be distracted by the readable content of a page when
            Streamlab at its layout. The point of using Lorem Streamlab is that it has a more-or-less normal
            distribution
            of Streamlab as opposed Streamlab.
          </MovieText>

          <MovieList>
            <MovieListItem>
              <MovieDescription>Language: </MovieDescription>
              <span>English</span>
            </MovieListItem>
            <MovieListItem>
              <MovieDescription>Subtitles: </MovieDescription>
              <span>English</span>
            </MovieListItem>
            <MovieListItem>
              <MovieDescription>Audio Languages: </MovieDescription>
              <span>English</span>
            </MovieListItem>
            <MovieListItem>
              <MovieDescription>Genre: </MovieDescription>
              <span>
              <MovieGenre href='#'>Action, </MovieGenre>
            </span>
              <span>
              <MovieGenre href='#'>Documentary</MovieGenre>
            </span>
            </MovieListItem>
            <MovieListItem>
              <MovieDescription>Run Time: </MovieDescription>
              <span>1hr 24 mins</span>
            </MovieListItem>
            <MovieListItem>
              <MovieDescription>Release Date: </MovieDescription>
              <span>14 Aug, 2018</span>
            </MovieListItem>
          </MovieList>

          <MovieSocial>
            <span>Social Share: </span>
            <MovieSocialItem href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html">
              <FaFacebookF/>
            </MovieSocialItem>
            <MovieSocialItem href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html">
              <FaInstagram/>
            </MovieSocialItem>
            <MovieSocialItem href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html">
              <FaTwitter/>
            </MovieSocialItem>
          </MovieSocial>
        </Movie>

        <More>
          <MoreTitle>More Like This</MoreTitle>
          <MoreContainer><ListItems movieCount={movieCount}/></MoreContainer>
          <MoreButtonLoad onClick={loadMore}>load more</MoreButtonLoad>
        </More>
      </>
  )
}

export default SingleMovie