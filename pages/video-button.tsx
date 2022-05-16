import { useState } from 'react'
import Link from "next/link"
import{Img,Arrov2_Movies,Arrov2_Movies2, Box, MoviesList,MoviesList2,Video, SubMenuVideo, Link_A} from "./indexStyle"
import Image from 'next/image'
import arrow from '../src/arrow.png'
import arrow2 from '../src/arrow2.png'

export const VideoMenu = () => {

    let [flagVideo, setflagVideo] = useState(
        {button:false,
         menu: false,
         VideoMenuButton:false,
         VideoMenu:false,
         VideoStyleButton: false,
         VideoStyleMenu: false,
        });
    
    const VideoButton = () =>{
        if(flagVideo.button && flagVideo.menu) {
            return (
                    <SubMenuVideo
                        onMouseEnter={()=> setflagVideo (flagVideo = { ...flagVideo, menu: true , button : true}) }
                    >
                        <Link href={"ссылочка"} passHref>
                            <Link_A
                                onMouseEnter={()=> setflagVideo (flagVideo = { ...flagVideo, menu: true , button : true, VideoMenu:true, VideoMenuButton: true }) }
                                onMouseLeave={()=> setflagVideo (flagVideo = { ...flagVideo, menu: true , button : true, VideoMenu:true, VideoMenuButton:false}) }
                        >
                                Video
                            </Link_A>
                        </Link>

                        <Arrov2_Movies><Image src={arrow2} alt="" width={15} height={15}/> </Arrov2_Movies>
      
                        <Link href={"ссылочка"} passHref>
                            <Link_A
                                onMouseEnter={()=> setflagVideo (flagVideo = { ...flagVideo, menu: true , button : true, VideoStyleMenu:true, VideoStyleButton: true }) }
                                onMouseLeave={()=> setflagVideo (flagVideo = { ...flagVideo, menu: true , button : true, VideoStyleMenu:true, VideoStyleButton:false}) }
                            >   
                                Videos Style
                            </Link_A>
                        </Link>

                        <Arrov2_Movies2><Image src={arrow2} alt="" width={15} height={15}/></Arrov2_Movies2>

                        <Link href={"ссылочка"} passHref>
                            <Link_A>Single Videos</Link_A>
                        </Link>
                        {VideoPanel()}

                    </SubMenuVideo> 
                    )
        }
      }
      
    const VideoPanel = ()=> {
        if(flagVideo.button && flagVideo.menu && flagVideo.VideoMenuButton && flagVideo.VideoMenu){
            return(
                    <MoviesList
                        onMouseEnter={()=> setflagVideo (flagVideo  = { ...flagVideo, menu: true , button : true, VideoMenu:true,VideoMenuButton:true }) }
                        onMouseLeave={()=> setflagVideo (flagVideo = { ...flagVideo, menu: true , button : true, VideoMenu:false,VideoMenuButton:true }) }
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

        if(flagVideo.button && flagVideo.menu && flagVideo.VideoStyleButton && flagVideo.VideoStyleMenu){
            return(
                <MoviesList2
                    onMouseEnter={()=> setflagVideo (flagVideo = { ...flagVideo, menu: true , button : true, VideoStyleMenu:true,VideoStyleButton:true }) }
                    onMouseLeave={()=> setflagVideo (flagVideo = { ...flagVideo, menu: true , button : true, VideoStyleMenu:false,VideoStyleButton:true }) }
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
                onMouseEnter={()=> setflagVideo (flagVideo = {...flagVideo, menu: true , button : true}) }
                onMouseLeave={()=> setflagVideo (flagVideo = {...flagVideo, menu: true, button : false}) }
            >
                <Video>Video</Video>
                <Img><Image src={arrow} alt="" width={16} height={16}/> </Img>
                {VideoButton()}
            </Box>
            )
}


