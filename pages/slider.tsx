import { useState,useEffect, useRef } from 'react'
import Image from 'next/image'
import{ SliderWrapper,SliderElement,SliderWindow,ArrowLeft, ArrowRight,VideoLink,VideoPreview,VideoElem, CircleAnimation,ImageLink,VideoClose,  ImgSlide,DescriptionBoxSlide,TextLink, TitleSlide,ButtonSlide,ButtonSlideIMG,VideoSlide, NameSlide,RatingSlide,RatingPointSlide,CastTextSlide, TextSlide,RatingIMDBtSlide, CastSlide, RatingTextSlide} from "./indexStyle"
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { useSpring, animated as a } from "react-spring";

import img1 from '../src/asset1.jpeg'
import img2 from '../src/asset2.jpeg'
import img3 from '../src/asset3.jpeg'
import asset from '../src/asset.png'
import play1 from '../src/play1.png'
import play2 from '../src/play2.png'
import close from '../src/close.png'
export const Slider = () => {

    let [widthWindow, setwidthWindow] = useState(0);
    let [number, setnumber] = useState(0);
    let [nowNumberElement, setnowNumberElement] = useState(1);
    let [cursorX, setcursorX] = useState(0);
    const [videoPreview,setvideoPreview ] = useState(false) 
    let [cursorXStart, setcursorXStart] = useState(0);
    const [startShowTitle, setstartShowTitle] = useState(true);
    const [startShowName, setstartShowName] = useState(true);
    const [startShowRating, setstartShowRating] = useState(true);
    const [startShowCast, setstartShowCast] = useState(true);
    const [startShowPlay, setstartShowPlay] = useState(true);
    const [startShowVideo, setstartShowVideo] = useState(true);
    let sliders = [ //Просто инфа для слайдов, в дольнейшем должна грузится с сервера
        {img:img1,
         title: "MOST VIEWED",
         name: 'KING OF SKULL',
         text : "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
         cast : 'Jennifer Lonez,Mars Shelley',
         genere : 'Action , Adventure , Biography' ,
         tag : "4K ULTRA , Brother , Dubbing , Premieres",  
    },
        {img:img2,
            title: "BEST OF 2021",
            name: 'THE EXPRESS',
            text : "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
            cast : 'Jennifer Lonez,Mars Shelley',
            genere : 'Action , Adventure , Biography' ,
            tag : "4K ULTRA , Brother , Dubbing , Premieres", }, 
        {img:img3,
            title: "HIGH RATED",
            name: 'THIEVE THE BANK',
            text : "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
            cast : 'Jennifer Lonez,Mars Shelley',
            genere : 'Action , Adventure , Biography' ,
            tag : "4K ULTRA , Brother , Dubbing , Premieres", }]

    let newarr = [sliders[sliders.length - 1],...sliders,sliders[0]] 
    let id = 0
    let [speed, setspeed] = useState(300);
    const shovFunc =()=> {
        setstartShowTitle (false)
        setstartShowName (false)
        setstartShowRating (false)
        setstartShowCast (false)
        setstartShowPlay (false)
        setstartShowVideo (false)
        setTimeout(()=> setspeed (speed = 0),400)
        setTimeout(()=>{setstartShowTitle (true)}, 300)
        setTimeout(()=>{setstartShowName (true)}, 350)   
        setTimeout(()=>{setstartShowRating (true)}, 400)   
        setTimeout(()=>{setstartShowCast (true)}, 450)   
        setTimeout(()=>{setstartShowPlay (true)}, 500)
        setTimeout(()=>{setstartShowVideo (true)}, 1000)
      }
    const windowRef : any  = useRef<HTMLInputElement>(null)
    
      useEffect(() => {
          const resizehandler = () =>{
              const width = windowRef.current.offsetWidth
              setwidthWindow(width)  
          }
          resizehandler()
          setnumber(number = widthWindow * nowNumberElement)
          window.addEventListener('resize', resizehandler)
          return ()=> window.removeEventListener('resize', resizehandler)   
      }, [widthWindow]);
      
    

    const left = ()=> {
        setnumber(number = number - widthWindow)
        setnowNumberElement(nowNumberElement = nowNumberElement - 1)
        setspeed (speed = 300)
        shovFunc() 
    }

    const right = ()=> {
        setnumber(number = number + widthWindow)
        setnowNumberElement(nowNumberElement = nowNumberElement + 1)
        setspeed (speed = 300)
        shovFunc() 
    }

    if (nowNumberElement === newarr.length - 1 ){ 
        setTimeout(()=>{   
            setspeed (speed = 0)
            setnowNumberElement(nowNumberElement = 1)
            setnumber(number = widthWindow)
        }, 350)   
    }

    if (nowNumberElement === 0){
        setTimeout(()=>{
            setspeed (speed = 0)
            setnowNumberElement(nowNumberElement = sliders.length)
            setnumber(number = widthWindow * (sliders.length) )
        }, 350)
    }
    

    

  const contentPropsTitle = useSpring({
    opacity: startShowTitle ? 1 : 0,
    marginLeft: startShowTitle ? 0 : 65
  });
  const contentPropsName = useSpring({
    opacity: startShowName ? 1 : 0,
    marginLeft: startShowName ? 0 : 65
  });
  const contentPropsRating = useSpring({
    opacity: startShowRating ? 1 : 0,
    marginLeft: startShowRating ? 0 : 65
  });
  const contentPropsCast = useSpring({
    opacity: startShowCast ? 1 : 0,
    marginLeft: startShowCast ? 0 : 65
  });
  const contentPropsPlay = useSpring({
    opacity: startShowPlay ? 1 : 0,
    marginLeft: startShowPlay ? 0 : 65
  });
  const contentPropsVideo = useSpring({
    opacity: startShowVideo ? 1 : 0,
    marginRight: startShowVideo ? 0 : 65
  });


    return (

        <SliderWrapper>
            
            {videoPreview ? "" : (<ArrowLeft><FaChevronLeft size={'1.5vw'} onClick={()=> left()}/></ArrowLeft>)}

                <SliderWindow 
                    ref={windowRef}>
                    {newarr.map( (i)=>{
                        return (
                            <>
                            {!startShowVideo ? "" : 
                                <VideoLink>
                                <CircleAnimation onClick={()=> { setvideoPreview (true)}}>
                                    <svg viewBox="0 0 80 80">
                                        <rect x="5" y="5" rx="55" ry="55" />
                                    </svg>
                                </CircleAnimation>
                                </VideoLink>
                            }

                            {!videoPreview ? "" : (
                                                <VideoPreview onClick={()=> { setvideoPreview (false)}}>
                                                    
                                                    <VideoElem>
                                                    
                                                    <iframe 
                                                    width={960} height={506}
                                                    
                                                    title='Youtube player'
                                                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                                    src={`https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1`}>
                                                    </iframe>
                                                    </VideoElem>
                                                    <VideoClose><Image  src={close} alt="Find" width={15} height={15} onClick={()=> { setvideoPreview (false)}}/></VideoClose>
                                                </VideoPreview> )}
                                                
                            <SliderElement 
                                key={id++} number= {number + cursorX} speed = {speed} style={{ }}> 
                                <Image  src={i.img} alt="Find" width={widthWindow} height={9*widthWindow/16} draggable={false}/>
                                {!startShowVideo  ? "" : (
                                                <a.div className="box" style={contentPropsVideo}>
                                                    <VideoSlide>
                                                        <Image  src={i.img} alt="Find"  draggable={false}/>
                                                        <ImageLink><Image  src={play2} width={50} height={50} alt="PLAY" /></ImageLink>
                                                        <TextLink>Watch Trailer</TextLink>
                                                    </VideoSlide>
                                                </a.div> )}
                                <DescriptionBoxSlide>  
                                    {!startShowTitle ? "" : (
                                                <a.div style={contentPropsTitle}>
                                                    <TitleSlide>{i.title} </TitleSlide>
                                                </a.div> )}

                                    {!startShowName ? "" : (
                                                <a.div style={contentPropsName}>
                                                    <NameSlide>{i.name}</NameSlide>
                                                </a.div> )}               
                                
                                    {!startShowRating ? "" : (
                                                <a.div style={contentPropsRating}>
                                                    <RatingSlide> 
                                                        <RatingTextSlide>12A</RatingTextSlide> 
                                                        <RatingPointSlide>• </RatingPointSlide>
                                                        <Image  src={asset} width={50} height={25}  alt="IMDB" />
                                                        <RatingIMDBtSlide>0</RatingIMDBtSlide>
                                                    </RatingSlide>
                                                </a.div> )}  
                                
                                    {!startShowCast ? "" : (
                                                <a.div style={contentPropsCast}>
                                                    <TextSlide>{i.text}</TextSlide>
                                                    <CastSlide> Cast : <CastTextSlide>{i.cast}</CastTextSlide></CastSlide>
                                                    <CastSlide> Genre : <CastTextSlide>{i.genere}</CastTextSlide></CastSlide>
                                                    <CastSlide> Tag : <CastTextSlide>{i.tag}</CastTextSlide></CastSlide>
                                                </a.div> )}

                                    {!startShowPlay ? "" : (
                                                <a.div style={contentPropsPlay}>
                                                    <ButtonSlide><ButtonSlideIMG> <Image  src={play1} width={13} height={16} alt="PLAY" /></ButtonSlideIMG>  <span>PLAY NOW</span></ButtonSlide>
                                                </a.div> )}                     
                                </DescriptionBoxSlide>
                            </SliderElement >   
                        </> 
                        )
                    } )}
                    {<ImgSlide 
                        draggable={true}
                        onDragStart ={(e) => {
                            setcursorXStart(cursorXStart = e.screenX)
                            setspeed (speed = 0)                      
                    }}

                        onDragOver={(e) => {
                            setcursorX(cursorX = cursorXStart - e.screenX)
                            e.preventDefault()
                        }}

                        onDrop={(e) => setcursorX(cursorX = cursorXStart - e.screenX)}
                        onDragEnd = {(e)=>{
                        if(cursorX < -100){
                            setnumber(number = number - widthWindow)
                            setnowNumberElement(nowNumberElement = nowNumberElement - 1)
                            shovFunc() 
                        }

                        if(cursorX > 100){
                            setnumber(number = number + widthWindow)
                            setnowNumberElement(nowNumberElement = nowNumberElement + 1)
                            shovFunc() 
                        }

                        setcursorX(cursorX = 0)
                        setspeed (speed = 300)
                        }} 
                    width = {widthWindow} height = {9*widthWindow/16}
                    />}
                </SliderWindow>
            {videoPreview ? "" : (<ArrowRight><FaChevronRight size={'1.5vw'} onClick={()=> right()}/></ArrowRight>)}
        </SliderWrapper>
    )
}