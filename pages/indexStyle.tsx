import styled, {createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{ 
    @font-face {
      src: url(../fonts/Jost-Medium.ttf);
      font-family: 'Jost', sans-serif;
      font-style: normal;
      font-weight: 400;
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
  position: absolute;
  display:flex;
  align-items:center;
  width : 100%;
  color: white;
  background-color : #0000009f;
  height: 90px;
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
  top:85px;
  right: -40px;
  z-index:1;
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
  margin-right: 130px;
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
