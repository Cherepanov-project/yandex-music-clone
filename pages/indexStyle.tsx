import styled, {createGlobalStyle } from "styled-components";
import play2 from '../src/play2.png'
export const Global = createGlobalStyle`
*{ 
    @font-face {
      src: url(../fonts/Jost-Medium.ttf);
      font-family: 'Jost' , sans-serif;
      font-style: normal;
      font-weight: 400;
    } 
    @font-face {
      src: url(../fonts/Roboto-Medium.ttf);
      font-family: 'Roboto-Medium' , sans-serif;
      font-style: normal;
      font-weight: 500;
    } 
    font-family: 'Jost';
    font-size: 16px;
    padding: 0;
    margin: 0;
    box-sizing:border-box;
  } 

`
export const Box = styled.div`
  display: flex;
  margin-right: 27px;
`
export const ButtonStyle = styled.div`
  height: 90px;
  line-height: 90px;
  transition-duration: 0.5s;
  cursor: pointer;
    &:hover {
      color: red;
    }
`
export const Box_Home = styled(Box)`
  margin-left: auto;
`
export const Img = styled.span`
  margin-right: auto;
  margin-top: 36px;
  margin-left: 10px;
`
export const HeaderPanel = styled.div`
  display:flex;
  position:absolute;
  align-items:center;
  width : 100%;
  color: white;
  background-color : #0000006f;
  height: 90px;
  z-index: 250;
`
export const Streamlab = styled.div`
  margin-top:10px;
  margin-left:110px;
  cursor: pointer;
`
export const Home = styled(ButtonStyle)`
`
export const Movies = styled(ButtonStyle)`
`
export const TvShows = styled(ButtonStyle)`
`
export const Video = styled(ButtonStyle)`
`
export const Pages = styled(ButtonStyle)`
`
export const Search = styled.div`
  margin-right: 30px;
  padding-left: 20px;
  cursor: pointer;
  transition-duration: 0.5s;

`
export const SearchPanel = styled.div`
  position:absolute;
  top:33px;
  right: 340px;
`
export const SearchPanelClose = styled(SearchPanel)`
  right: 350px;
`

export const SearchInput = styled.input`
  background-color: #2e2e2e;
  font-size: 17px;
  width: 255px;
  border: 0px;
  color:white;
`

export const Searchblock = styled.div`
  padding: 15px;
  height: 85px;
  display: flex;
  background-color: #414141;
  position:absolute;
  top:33px;
  right: -40px;
`

export const SearchIcon = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  background-color:red;
  width: 54px;
`

export const Avatar = styled.img`
  cursor: pointer;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: red;
`

export const Subscribe = styled.div`
  cursor: pointer;
  margin-right: 120px;
  height: 42px;
  width: 118px;
  background-color : red;
  text-align: center;
  line-height: 40px;
`

export const SubMenu = styled.div`
  display:flex ;
  flex-direction:column ;
  position: absolute;
  top:90px;
  width: 200px;
  background-color : #3a3a3a;
`
export const SubMenuHome = styled(SubMenu)`
  right: 675px;
  height: 200px;
`
export const SubMenuMovies = styled(SubMenu)`
  right: 580px;
  height: 150px;
`
export const SubMenuTv_Shows = styled(SubMenu)`
  right: 480px;
  height: 200px;
`
export const SubMenuVideo = styled(SubMenu)`
  right: 365px;
  height: 150px;
`
export const SubMenuPages = styled(SubMenu)`
  right: 270px;
  height: 150px;
`
export const SubMenuUser = styled (SubMenu)`
  right: 250px;
  height: 315px;
`

export const Link_A = styled.a`
  padding: 15px;
  font-size: 15px;
  text-decoration:none;
  color: white;
  :hover {
    background-color: red;
  }
`
export const Link_User = styled.a`
  padding: 10px;
  font-size: 14px;
  text-decoration:none;
  color: white;
  :hover{
    transition-duration: 0.7s;
  }
`
export const Arrov2_Movies = styled.span`
  position:absolute;
  right: 10px;
  top:15px;
  width: 15px;
  height: 15px;
`
export const Arrov2_Movies2 = styled(Arrov2_Movies)`
  top:65px;
`
export const UserLink = styled.div`
  display: flex;
  align-items:center;
  font-size: 14px;
  text-decoration:none;
  color: white;
  :hover {
    background-color: red;
    transition-duration: 0.7s;
  }
`
export const UserImg = styled.div`
margin-top: 5px;
margin-left: 5px;
width: 40px;
height: 40px;
cursor: pointer;
`
export const LinkBox = styled.div`
  margin-top: 10px;
`
export const MoviesList = styled(SubMenu)`
  top:0px;
  right: 200px;
  height: 150px;  
`
export const MoviesList2 = styled(SubMenu)`
  top:50px;
  right: 200px;
  height: 150px;  
`
export const PagesList1 = styled(SubMenu)`
  top:0px;
  right: 200px;
  height: 50px;  
`
export const PagesList = styled(SubMenu)`
  top:50px;
  right: 200px;
  height: 100px;  
`
export const PagesBlogList = styled(SubMenu)`
  top:0px;
  right: 400px;
  height: 100px;  
`



export const SliderWrapper = styled.div`
position: relative;
display: flex;
justify-content:center;
align-items:center;
z-index:200;
`
export const SliderWindow = styled.div`
position: relative;
z-index: 200;
width: 100%;
height: 1000px;
display: flex;
overflow:hidden;

`

export const SliderElement = styled.div<{ number: number, speed:number }>`
position: relative;
z-index: 200;
min-width: 100%;
max-width: 100%;

transition: translate;
transition-property: transform ;
transition-duration: ${props => props.speed}ms;
transform: translateX(${props => -props.number}px);

pointer-events: none;
`

export const ImgSlide = styled.div<{ width: number, height:number}>`
position: absolute;
z-index: 210;
top: 0px;
cursor: grab;
background-color: #28252517;
height: ${props => props.height}px;
width: ${props => props.width}px;

`

export const ArrowLeft = styled.div`
position: absolute;
left:10px;
color: white;
z-index: 210;
cursor: pointer;
`
export const ArrowRight = styled.div`
position: absolute;
right: 10px;
color: white;
z-index: 210;
cursor: pointer;
`



export const DescriptionBoxSlide = styled.div`
font-family: 'Roboto-Medium' , sans-serif;
position: absolute;
z-index: 220;
color: white;
left: 110px;
top: 200px;
`
export const TitleSlide = styled.div`
position: relative;
z-index: 220;
font-family: 'Roboto-Medium' , sans-serif;
font-size: 20px;
font-weight: 600;
border-left: 3px solid red;
padding-left: 10px;
letter-spacing: 3px;
`
export const NameSlide = styled.div`
position: relative;
z-index: 220;
font-weight: 600;
font-size: 62px;
`
export const RatingSlide = styled.div`
position: relative;
z-index: 220;
display: flex;
align-items:center;
height: 30px;
`
export const RatingTextSlide = styled.span`
position: relative;
z-index: 220;
border: 1px solid white;
margin-right: 17px;
padding: 2px 8px 2px 8px;
`
export const RatingPointSlide = styled.div`
position: relative;
z-index: 220;
font-size: 30px;
line-height:35px;
margin-right: 20px;
`
export const RatingIMDBtSlide = styled.span`
position: relative;
z-index: 220;
margin-left: 10px;
font-size: 16px;
padding: 3px 10px 3px 10px;
line-height:25px;
`
export const TextSlide = styled.div`
position: relative;
z-index: 220;
margin-top: 20px;
max-width: 800px;
font-size: 18px;
`
export const CastSlide = styled.div`
position: relative;
z-index: 220;
margin-top: 20px;
color: red;
`
export const CastTextSlide = styled.span`
position: relative;
z-index: 220;
color: white;

`
export const ButtonSlide = styled.div`
position: relative;
z-index: 220;
display: flex;
margin-top:40px;
width :170px ;
height: 56px;
line-height: 55px;
background-color: red;
color : white;
text-align: center;
`

export const ButtonSlideIMG = styled.div`
position: relative;
z-index: 220;
margin-left: 30px;
margin-right: 15px;
margin-top: 2px;
`

export const VideoSlide = styled.div`
position: absolute;
z-index: 390;
top:230px;
right: 110px;
width: 825px;
height: 465px;
`
export const CircleAnimation = styled.div`

  svg {
    
    height: 110px;
    width: 110px;
    position: absolute; 
    z-index: 400;
  }
  
  rect {
    height: 70px;
    width: 70px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-dasharray: 0, 422 ;
    transition: all 0.6s linear;
    
  }

:hover {
  rect {
    height: 70px;
    width: 70px;
    stroke-dasharray: 422,0;
    transition: all 3s cubic-bezier(0.19, 1, 0.22, 1);
  }
}

`
export const VideoLink = styled.div`
position: absolute;
top:400px;
right:570px;
z-index: 390;
cursor: pointer;
`
export const PlayAnimation = styled.div`

`
export const ImageLink = styled.div`
position: absolute;
top:200px;
right: 377px;
z-index: 399;
`
export const TextLink = styled(ImageLink)`
position: absolute;
color: white;
font-size: 24px;
top:285px;
right: 340px;
z-index: 399;
`

export const VideoPreview = styled.div`
position: absolute;
display: flex;
justify-content:center;
align-items:center;
z-index: 999;
background-color: #00000052;
width: 100%;
height: 100%;
`
export const VideoElem = styled.div`
`
export const VideoClose = styled.div`
position: relative;
top:-270px;
right:15px;
cursor: pointer;
`

