import { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import{ Img,Arrov2_Movies,Arrov2_Movies2, Box,MoviesList,MoviesList2,TvShows, SubMenuTv_Shows, Link_A} from "./indexStyle"
import arrow from '../src/arrow.png'
import arrow2 from '../src/arrow2.png'

export const TvShowsMenu = () => {

    let [flagTv_Shows, setflagTv_Shows] = useState(
        {button:false,
         menu: false,
         Tv_ShowsMenuButton:false,
         Tv_ShowsMenu:false,
         Tv_ShowsStyleButton: false,
         Tv_ShowsStyleMenu: false,
        });
    
      const Tv_ShowsButton = () =>{
        if(flagTv_Shows.button && flagTv_Shows.menu) {
          return (
                <SubMenuTv_Shows 
                    onMouseEnter={()=> setflagTv_Shows (flagTv_Shows = {...flagTv_Shows, menu: true , button : true}) }
                >
                    <Link href={"ссылочка"} passHref>
                        <Link_A
                            onMouseEnter={()=> setflagTv_Shows (flagTv_Shows = { ...flagTv_Shows, menu: true , button : true, Tv_ShowsMenu:true, Tv_ShowsMenuButton: true }) }
                            onMouseLeave={()=> setflagTv_Shows (flagTv_Shows = { ...flagTv_Shows, menu: true , button : true, Tv_ShowsMenu:true, Tv_ShowsMenuButton:false}) }
                        >
                            Tv Shows List
                        </Link_A>
                    </Link>

                    <Arrov2_Movies><Image src={arrow2} alt="" width={15} height={15}/> </Arrov2_Movies>

                    <Link href={"ссылочка"} passHref>
                        <Link_A
                            onMouseEnter={()=> setflagTv_Shows (flagTv_Shows = { ...flagTv_Shows, menu: true , button : true, Tv_ShowsStyleMenu:true, Tv_ShowsStyleButton: true }) }
                            onMouseLeave={()=> setflagTv_Shows (flagTv_Shows = { ...flagTv_Shows, menu: true , button : true, Tv_ShowsStyleMenu:true, Tv_ShowsStyleButton:false}) }
                        >
                            Tv Shows Style
                        </Link_A>
                    </Link>

                    <Arrov2_Movies2><Image src={arrow2} alt="" width={15} height={15}/></Arrov2_Movies2>

                    <Link href={"ссылочка"} passHref>
                        <Link_A>Single Tv Shows</Link_A>
                    </Link>

                    <Link href={"ссылочка"} passHref>
                        <Link_A>Single Episode</Link_A>
                    </Link>
                    {Tv_ShowsPanel()}
                </SubMenuTv_Shows>
                )
        }
      }
      
      const Tv_ShowsPanel = ()=> {
        if(flagTv_Shows.button && flagTv_Shows.menu && flagTv_Shows.Tv_ShowsMenuButton && flagTv_Shows.Tv_ShowsMenu){
          return(
                <MoviesList
                    onMouseEnter={()=> setflagTv_Shows (flagTv_Shows  = { ...flagTv_Shows, menu: true , button : true, Tv_ShowsMenu:true,Tv_ShowsMenuButton:true }) }
                    onMouseLeave={()=> setflagTv_Shows (flagTv_Shows = { ...flagTv_Shows, menu: true , button : true, Tv_ShowsMenu:false,Tv_ShowsMenuButton:true }) }
                >
                    <Link href={"ссылочка"} passHref>
                        <Link_A>Load More</Link_A>
                    </Link>
              
                    <Link href={"ссылочка"} passHref>
                        <Link_A>Infinitie Scroll</Link_A>
                    </Link>
        
                    <Link href={"ссылочка"} passHref>
                        <Link_A>Pagination</Link_A>
                    </Link>
                </MoviesList>
                ) 
        }

        if(flagTv_Shows.button && flagTv_Shows.menu && flagTv_Shows.Tv_ShowsStyleButton && flagTv_Shows.Tv_ShowsStyleMenu){
          return(
                <MoviesList2
                    onMouseEnter={()=> setflagTv_Shows (flagTv_Shows = { ...flagTv_Shows, menu: true , button : true, Tv_ShowsStyleMenu:true,Tv_ShowsStyleButton:true }) }
                    onMouseLeave={()=> setflagTv_Shows (flagTv_Shows = { ...flagTv_Shows, menu: true , button : true, Tv_ShowsStyleMenu:false,Tv_ShowsStyleButton:true }) }
                >
                    <Link href={"ссылочка"} passHref>
                        <Link_A>Style 1</Link_A>
                    </Link>
              
                    <Link href={"ссылочка"} passHref>
                        <Link_A>Style 2</Link_A>
                    </Link>
        
                    <Link href={"ссылочка"} passHref>
                        <Link_A>Style 3</Link_A>
                    </Link>
                </MoviesList2>
                )
        }
      }

    return (
            <Box
                onMouseEnter={()=> setflagTv_Shows (flagTv_Shows = {...flagTv_Shows, menu: true , button : true}) }
                onMouseLeave={()=> setflagTv_Shows (flagTv_Shows = {...flagTv_Shows, menu: true, button : false}) }
            >
                <TvShows>Tv Shows</TvShows>
                <Img><Image src={arrow} alt="" width={16} height={16}/> </Img>
                {Tv_ShowsButton()}
            </Box>
            )
}


