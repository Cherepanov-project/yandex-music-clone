export interface IMovieContent {
  activeIndex: number,
  onTouchStart: any,
  onTouchMove: any,
  onTouchEnd: any
}

export interface IMoviesPreview {
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