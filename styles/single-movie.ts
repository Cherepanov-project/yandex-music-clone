import styled from 'styled-components'

export const Movie = styled.div`
  margin: 2% auto;
  width: 90%;
  color: #fff;
`

export const MoviePlayer = styled.iframe`
  width: 100%;
  height: 29vh;

  @media (min-width: 768px) {
    height: 48vh;
  }

  @media (min-width: 979px) {
    height: 60vh;
  }

  @media (min-width: 1024px) {
    height: 75vh;
  }
`

export const MovieTitle = styled.h2`
  font-family: Jost, sans-serif;
  font-size: 36px;
`

export const MovieMeta = styled.div`
  display: flex;
  font-family: Jost, sans-serif;
  font-size: 16px;
  align-items: center;
  gap: 16px
`

export const MovieMPAA = styled.button`
  border: 0;
  padding: 2px 5px;
  background-color: #e50916;
  list-style: none;
  color: #fff;
  font-size: 16px;
  font-family: Jost, sans-serif;
  border-right: 2px solid #ffffff;
`

export const MovieViews = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
`

export const MovieText = styled.p`
  font-size: 18px;
  color: #cecfd1;
`

export const MovieList = styled.ul``

export const MovieListItem = styled.li`
  font-size: 18px;
  font-family: Roboto, sans-serif;
  margin-top: 18px;
`

export const MovieDescription = styled.span`
  width: 175px;
  display: inline-block;
  color: #cecfd1;
`
export const MovieGenre = styled.a`
  color: #e50916;
`

export const MovieSocial = styled.div`
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  position: relative;

  &::after {
    content: ' ';
    width: 100%;
    height: 4px;
    background-color: #e50916;
    position: absolute;
    bottom: -60px;
`

export const MovieSocialItem = styled.a`
  width: 50px;
  height: 50px;
  background-color: #221f1f;
  margin-left: 8px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  transition: .7s ease-in-out;

  &:hover {
    background-color: #e50916;
  }
`

export const More = styled.div`
  margin: 7% auto;
  width: 90%;
  color: #fff;
`

export const MoreTitle = styled.h2`
  font-family: Jost, sans-serif;
  font-size: 36px;
  border-bottom: 1px solid #221f1f;
  box-sizing: border-box;
  padding-bottom: 0.83em;
  position: relative;
  margin-top: 64px;

  &::after {
    content: '';
    width: 100px;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #e50916;
  }
`

export const MoreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  width: 100%;
  margin-top: 32px;
`

export const MoreButtonLoad = styled.button`
  text-transform: uppercase;
  width: 150px;
  height: 50px;
  background: #e50916;
  color: #fff;
  font-family: Jost, sans-serif;
  font-size: 16px;
  padding: 12px 30px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  margin-top: 32px;
  display: flex;
  justify-content: center;
`

export const MoreButtonLoadText = styled.span`
transform: translateY(4px);
`
