import styled from 'styled-components'

export const MoreItem = styled.div`
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    max-width: 48.8%;
  }

  @media (min-width: 992px) {
    max-width: 31.8%;
  }

  @media (min-width: 1200px) {
    max-width: 23.3%;
  }

  &:hover img {
    transform: scale(1.3);
  }

  & button {
    opacity: 0;
  }

  &:hover button {
    opacity: 1;
  }
`

export const MoreItemImg = styled.img`
  max-width: 100%;
  height: auto;
  transition: .5s linear;
  overflow: hidden;
`

export const MoreButton = styled.button`
  width: 62px;
  height: 62px;
  margin: auto;
  position: absolute;
  top: 22%;
  left: 0;
  right: 0;
  font-size: 18px;
  padding-top: 1.5%;
  padding-left: 3%;
  border: none;
  border-radius: 50%;
  background-color: #e50916;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #b81d24;
  }
`

export const MoreDescription = styled.div`
  position: relative;
  z-index: 2;
  background-color: #221f1f;
  margin-top: -4px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`

export const MoreTitle = styled.a`
  font-family: Jost, sans-serif;
  font-size: 20px;
  min-width: 100%;
  transition: .7s linear;

  &:hover {
    color: #e50916;
  }
`

export const MoreDuration = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;

  &::after {
    content: '•';
    margin: 0 12px;
    font-size: 18px;
  }
`

export const MoreGenre = styled.a`
  font-weight: 600;
  color: #e50916;
  padding: 16px 0 16px 0;
`

export const MoreButtons = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 12vh;
  right: 0;
`

export const MoreLikeContent = styled.div`
  display: none;
  position: absolute;
  bottom: 100%;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 70%;
  z-index: 1;
  padding: 16px 10px;
  background-color: #ffffff;
  transition: 5s linear;

  & a {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    transition: 0.5s linear;
  }

  & a:not(:first-child) {
    padding-top: 16px;
  }

  & a:hover {
    color: #e50916;
  }
`

export const MoreButtonsMenu = styled.button`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  transition: 0.5s linear;
  cursor: pointer;
  position: relative;

  :hover div {
    display: block;
  }
`

export const MoreButtonsLike = styled.button`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  transition: 0.5s linear;
  cursor: pointer;
  position: relative;

  :hover {
    color: #e50916;
  }
`

export const MoreButtonsAdd = styled.button`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  transition: 0.5s linear;
  cursor: pointer;
  position: relative;
`