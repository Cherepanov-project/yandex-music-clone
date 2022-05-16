//import type { NextPage } from 'next'
//import styles from '../styles/Header.module.css'
import { useState } from 'react'
import { useTrail, animated as a } from "react-spring";
import Image from 'next/image'
import{ Global, HeaderPanel, Streamlab,Search,SearchIcon, SearchPanel,SearchPanelClose,SearchInput, Searchblock, Avatar,Subscribe} from "./indexStyle"

import {HomeMenu} from './home-button'
import {MovieMenu} from './movies-button'
import {TvShowsMenu} from './tvShows-button'
import {VideoMenu} from './video-button'
import {PagesMenu}from './pages-button'
import {UserMenu} from './user-button'
import logo from '../src/logo.png'
import find from '../src/find.png'
import close from '../src/close.png'

export default function Header () {
  let [flagFind, setflagFind] = useState(false);
  let id = 0

  const items = [ <Searchblock key={id}> 
                    <SearchInput type="text" placeholder="   Search ..."/> 
                    <SearchIcon> <Image src={find} alt="Find" width={25} height={25}/> </SearchIcon>
                  </Searchblock>];
  const config = { mass: 5, tension: 2000, friction: 200 };

  const trail = useTrail(items.length, {
    config,
    opacity: flagFind ? 1 : 0,
    x: flagFind ? 0 : -200,
    height: flagFind ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  const FindPanel = () => {
  
  if (!flagFind){
    return(
          <SearchPanel>
            <Image src={find} alt="Find" width={25} height={25}
              onClick = {()=> {setflagFind (flagFind = true )}}
            />
          </SearchPanel>
          ) 
  }
  if (flagFind){
        return(
              <SearchPanelClose>
                <Image src={close} alt="Close" width={12} height={12}
                  onClick = {()=> {setflagFind (flagFind = false )}}/>
              </SearchPanelClose>   
              )
  }
}



  return (
    <>
    <Global/>
    <HeaderPanel>

      <Streamlab>
          <Image src={logo} alt="logo" width={167} height={50}/>
      </Streamlab>

      <HomeMenu/>
      <MovieMenu/>
      <TvShowsMenu/>
      <VideoMenu/>
      <PagesMenu/>

      <Search>
       {FindPanel()}
       {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={id++}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </Search>

      <UserMenu/>
      <Subscribe>SUBSCRIBE</Subscribe>
      
    </HeaderPanel>
    </>
  )
}

