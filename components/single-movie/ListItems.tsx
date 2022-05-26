import React from "react";
import {FaFacebookF, FaInstagram, FaPlay, FaPlus, FaRegHeart, FaShareAlt, FaTwitter} from "react-icons/fa";

import {movieData} from "../movieData/movieData";
import {
  MoreButton,
  MoreItem,
  MoreItemImg,
  MoreDescription,
  MoreTitle,
  MoreDuration,
  MoreGenre,
  MoreButtons, MoreButtonsMenu, MoreLikeContent, MoreButtonsLike, MoreButtonsAdd, AlertMessage
} from './ListItemsStyle'

interface MovieCountInterface {
  movieCount: number,
}

export const ListItems = ({movieCount}: MovieCountInterface) => {
  const slice = movieData.slice(0, movieCount)
  const messages = <AlertMessage>Something happened, please reload the page </AlertMessage>

  const items = slice.length !== 0 ? (slice.map((item) =>
      <MoreItem key={item.movie.id}>
        <div>
          <MoreItemImg src={item.movie.image} alt={item.movie.title}/>
          <MoreButton><FaPlay/></MoreButton>
        </div>
        <MoreButtons>
          <MoreButtonsLike><FaRegHeart/></MoreButtonsLike>
          <MoreButtonsMenu>
            <FaShareAlt/>
            <MoreLikeContent>
              <a href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html"><FaFacebookF/></a>
              <a href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html"><FaInstagram/></a>
              <a href="https://template.gentechtreedesign.com/html/streamlab/red-html/index.html"><FaTwitter/></a>
            </MoreLikeContent>
          </MoreButtonsMenu>
          <MoreButtonsAdd><FaPlus/></MoreButtonsAdd>
        </MoreButtons>
        <MoreDescription>
          <MoreTitle href='#'>{item.movie.title}</MoreTitle>
          <MoreDuration>{item.movie.duration}</MoreDuration>
          <MoreGenre href='#'>Action</MoreGenre>
        </MoreDescription>
      </MoreItem>
  )) : messages


  return <>

    {items}
  </>
}