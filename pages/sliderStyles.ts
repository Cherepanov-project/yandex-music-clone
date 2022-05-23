import styled from 'styled-components'


export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 2% auto; //temp
  max-height: 84vh;
`

export const SliderDots = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  display: flex;
  width: 250px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`

export const SliderDot = styled.div`
  background: #ccc;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  height: 2rem;
  margin: 0 0.3rem;
  outline: none;
  transform: scale(0.3);
  width: 2rem;
`

export const SliderDotActive = styled.div`
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  height: 2rem;
  margin: 0 0.3rem;
  outline: none;
  transform: scale(0.3);
  width: 2rem;
  background: #e50916;
`

export const Preview = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
`

export const PreviewButton = styled.button`
  color: white;
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: rgba(34, 31, 31, 0.9);
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #e50916;
  }
`

export const PreviewImg = styled.div`
  width: 100%;
  transform: translateY(-80.2vh);
`