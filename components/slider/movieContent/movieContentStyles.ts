import styled from 'styled-components'

export const SliderImgContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;

  &::before {
    content: ' ';
    width: 4px;
    height: 100%;
    background: #e50916;
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
  }

  img {
    width: 100%;
    height: 100%;
    min-height: 600px;
    object-fit: cover;
  }
`

export const SliderDescription = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  padding-left: 5%;
`

export const SliderTitle = styled.div`
  text-transform: uppercase;
  font-family: Jost, sans-serif;
  line-height: 1;
  color: #fff;

  @media (min-width: 480px) {
    font-size: 30px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 54px;
  }
`

export const SliderText = styled.span`
  font-family: Roboto, sans-serif;
  color: #cecfd1;
  margin-top: 16px;
  line-height: 1.5;
  font-size: 14px;
  max-width: 75vw;

  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

export const SliderButton = styled.button`
  cursor: pointer;
  background-color: #e50916;
  border: none;
  color: #ffffff;
  font-family: Jost, sans-serif;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-transform: uppercase;
  width: 40%;
  z-index: 2;
  padding: 12px 30px;
  background-color: #e50916;
  margin-top: 16px;
`

export const SliderImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  transform: translateY(0);

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    left: 0;
    background: -webkit-linear-gradient(left, rgba(34, 31, 31, 1) 0%, rgba(34, 31, 31, 0.4) 100%);
  }
`