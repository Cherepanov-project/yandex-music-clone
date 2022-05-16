import { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import{ Img, Box_Home, Home,  SubMenuHome, Link_A} from "./indexStyle"
import arrow from '../src/arrow.png'

export const HomeMenu = () => {

    let [flagHome, setflagHome] = useState(
        {button:false,
         menu: false,
        });
    
    const homeButton = () =>{
        if(flagHome.button && flagHome.menu) {
          return (
          <SubMenuHome
            onMouseEnter={()=> setflagHome (flagHome = { menu: true , button : true}) }
          >
            <Link href={"ссылочка"} passHref>
              <Link_A>Main Home</Link_A>
            </Link>

            <Link href={"ссылочка"} passHref>
              <Link_A>Movies Home</Link_A>
            </Link>

            <Link href={"ссылочка"} passHref>
              <Link_A>Tv Shows Home</Link_A>
            </Link>

            <Link href={"ссылочка"} passHref>
              <Link_A>Video Home</Link_A>
            </Link>

          </SubMenuHome> 
          )
        }
      }

    return (
        <Box_Home 
          onMouseEnter={()=> setflagHome (flagHome = {menu: true , button : true}) }
          onMouseLeave={()=> setflagHome (flagHome = {menu: true, button : false}) }
        >
          <Home> Home </Home>
          <Img><Image src={arrow} alt="" width={15} height={15}/> </Img>
          {homeButton()}

        </Box_Home>
    )
}


