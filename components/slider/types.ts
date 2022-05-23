import {TouchEventHandler} from "react";

export interface MovieContentType {
  activeIndex: number,
  onTouchStart: TouchEventHandler<HTMLElement>,
  onTouchMove: TouchEventHandler<HTMLElement>,
  onTouchEnd: TouchEventHandler<HTMLElement>,
}

export interface MoviesPreviewType {
  pos: number,
  idx: number
}

export interface UIEvent {
  targetTouches: {
    pageX: number;
    pageY: number;
    clientX: any;
  }[],
}