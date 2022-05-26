import styled from 'styled-components'

export const PreviewSlideItem = styled.div`
  position: absolute;
  transition: all 0.3s;
`

export const PreviewImg = styled.div`
  width: 100%;
  transform: translateY(-80.2vh);
`

export const PreviewInfo = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
  left: 5%;
  bottom: 10%;
`

export const PreviewTitle = styled.h3`
  font-family: Jost, sans-serif;
  line-height: 1;
  color: #fff;
`

export const PreviewDuration = styled.span`
  font-family: Roboto, sans-serif;
  color: #cecfd1;
`

export const PreviewButton = styled.button`
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

  &:hover {
    background-color: #e50916;
  }
`