import { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import{ Img,Arrov2_Movies,Arrov2_Movies2,Box, MoviesList,MoviesList2, Movies, SubMenuMovies, Link_A} from "./indexStyle"
import arrow from '../src/arrow.png'
import arrow2 from '../src/arrow2.png'

export const MovieMenu = () => {

    let [flagMovies, setflagMovies] = useState(
        {button:false,
         menu: false,
         moviesMenuButton:false,
         moviesMenu:false,
         moviesStyleButton: false,
         moviesStyleMenu: false,
        });
    
    const MoviesButton = () =>{
        if(flagMovies.button && flagMovies.menu) {
          return (
           <SubMenuMovies onMouseEnter={()=> setflagMovies (flagMovies = { ...flagMovies, menu: true , button : true})}>
            
            <Link href={"ссылочка"} passHref>
                <Link_A
                    onMouseEnter={()=> setflagMovies (flagMovies = { ...flagMovies, menu: true , button : true, moviesMenu:true, moviesMenuButton: true }) }
                    onMouseLeave={()=> setflagMovies (flagMovies = { ...flagMovies, menu: true , button : true, moviesMenu:true, moviesMenuButton:false}) }
                >
                  Movies list
                </Link_A> 

            </Link>
            <Arrov2_Movies><Image src={arrow2} alt="" width={15} height={15}/> </Arrov2_Movies>
    
            <>
            <Link href={"ссылочка"} passHref>
                <Link_A
                    onMouseEnter={()=> setflagMovies (flagMovies = { ...flagMovies, menu: true , button : true, moviesStyleMenu:true, moviesStyleButton: true }) }
                    onMouseLeave={()=> setflagMovies (flagMovies = { ...flagMovies, menu: true , button : true, moviesStyleMenu:true, moviesStyleButton:false}) }
                >
                  Movies style
                </Link_A>

            </Link>
            <Arrov2_Movies2><Image src={arrow2} alt="" width={15} height={15}/></Arrov2_Movies2>
            </>

            <Link href={"ссылочка"} passHref>
              <Link_A>Single movie</Link_A>
            </Link>
            {MoviesPanel()}
           </SubMenuMovies> )
        }
      }
      
    const MoviesPanel = ()=> {
        if(flagMovies.button && flagMovies.menu && flagMovies.moviesMenu && flagMovies.moviesMenuButton){

          return(
                <MoviesList
                    onMouseEnter={()=> setflagMovies (flagMovies = { ...flagMovies, menu: true , button : true, moviesMenu:true,moviesMenuButton:true }) }
                    onMouseLeave={()=> setflagMovies (flagMovies = { ...flagMovies, menu: true , button : true, moviesMenu:false,moviesMenuButton:true }) }
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

        if(flagMovies.button && flagMovies.menu && flagMovies.moviesStyleButton && flagMovies.moviesStyleMenu){
          
          return(
                <MoviesList2
                    onMouseEnter={()=> setflagMovies (flagMovies = { ...flagMovies, menu: true , button : true, moviesStyleMenu:true,moviesStyleButton:true }) }
                    onMouseLeave={()=> setflagMovies (flagMovies = { ...flagMovies, menu: true , button : true, moviesStyleMenu:false,moviesStyleButton:true }) }
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
                onMouseEnter={()=> setflagMovies (flagMovies = {...flagMovies, menu: true , button : true}) }
                onMouseLeave={()=> setflagMovies (flagMovies = {...flagMovies, menu: true, button : false}) }
            >
                <Movies>Movies</Movies>
                <Img><Image src={arrow} alt="" width={16} height={16}/> </Img>
                {MoviesButton()}
            </Box>
    )
}


