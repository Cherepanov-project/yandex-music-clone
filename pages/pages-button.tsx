import { useState } from 'react'
import Link from "next/link"
import{ Img,Arrov2_Movies,Arrov2_Movies2, Box, PagesList,PagesList1,PagesBlogList, Pages, SubMenuPages ,Link_A} from "./indexStyle"
import Image from 'next/image'
import arrow from '../src/arrow.png'
import arrow2 from '../src/arrow2.png'

export const PagesMenu = () => {

    let [flagPages, setflagPages] = useState(
        {button:false,
         menu: false,
         PagesBlogButton: false,
         PagesBlog: false,
         PagesBlogMenuButton: false,
         PagesBlogMenu: false,
         PagesPriceButton: false,
         PagesPrice: false, 
        });
    
    const PagesButton = () =>{
            if(flagPages.button && flagPages.menu) {
                return (
                        <SubMenuPages
                            onMouseEnter={()=> setflagPages (flagPages = {...flagPages, menu: true , button : true}) }
                        >
                            <Link href={"ссылочка"} passHref>
                                <Link_A
                                    onMouseEnter={()=> setflagPages (flagPages = { ...flagPages, menu: true , button : true, PagesBlog:true, PagesBlogButton: true, PagesBlogMenuButton: false, PagesBlogMenu:false }) }
                                    onMouseLeave={()=> setflagPages (flagPages = { ...flagPages, menu: true , button : true, PagesBlog:true, PagesBlogButton:false, PagesBlogMenuButton: false, PagesBlogMenu:false}) }
                                >
                                    Blog
                                </Link_A>
                            </Link>
                            <Arrov2_Movies><Image src={arrow2} alt="" width={15} height={15}/> </Arrov2_Movies>
    
                            <Link href={"ссылочка"} passHref>
                                <Link_A
                                    onMouseEnter={()=> setflagPages (flagPages = { ...flagPages, menu: true , button : true, PagesPrice:true, PagesPriceButton: true }) }
                                    onMouseLeave={()=> setflagPages (flagPages = { ...flagPages, menu: true , button : true, PagesPrice:true, PagesPriceButton:false}) }
                                >
                                    Pricing
                                </Link_A>
                            </Link>

                            <Arrov2_Movies2><Image src={arrow2} alt="" width={15} height={15}/></Arrov2_Movies2>
    
                            <Link href={"ссылочка"} passHref>
                                <Link_A>Contact Us</Link_A>
                            </Link>
                            {PagesPanel()}
                            {PagesPanelBlog()}
                        </SubMenuPages> 
                        )
        }
      }
      
      const PagesPanel = ()=> {

        if(flagPages.button && flagPages.menu && flagPages.PagesBlogButton && flagPages.PagesBlog){
            return(
                <PagesList1
                    onMouseEnter={()=> setflagPages (flagPages  = { ...flagPages, menu: true , button : true, PagesBlog:true,PagesBlogButton:true, PagesBlogMenu: true, PagesBlogMenuButton:true }) }
                    onMouseLeave={()=> setflagPages (flagPages = { ...flagPages, menu: true , button : true, PagesBlog:false,PagesBlogButton:true, PagesBlogMenu: false, PagesBlogMenuButton:false }) }
                >
                    <Link href={"ссылочка"} passHref>
                        <Link_A>Blog With Sidebar</Link_A>
                    </Link>
                    <Arrov2_Movies><Image src={arrow2} alt="" width={15} height={15}/></Arrov2_Movies>
                </PagesList1>
                )
        }

        if(flagPages.button && flagPages.menu && flagPages.PagesPriceButton && flagPages.PagesPrice){
            return(
                <PagesList
                    onMouseEnter={()=> setflagPages (flagPages = { ...flagPages, menu: true , button : true, PagesPrice:true,PagesPriceButton:true }) }
                    onMouseLeave={()=> setflagPages (flagPages = { ...flagPages, menu: true , button : true, PagesPrice:false,PagesPriceButton:true }) }
                >
                    <Link href={"ссылочка"} passHref>
                        <Link_A>Style 1</Link_A>
                    </Link>
              
                    <Link href={"ссылочка"} passHref>
                        <Link_A>Style 2</Link_A>
                    </Link>
                </PagesList>
                )
        }
      }
      const PagesPanelBlog = ()=> {
      
        if(flagPages.button && flagPages.menu && flagPages.PagesBlogButton && flagPages.PagesBlog && flagPages.PagesBlogMenuButton, flagPages.PagesBlogMenu){
            return(
                    <PagesBlogList
                        onMouseEnter={()=> setflagPages (flagPages  = { ...flagPages, menu: true , button : true, PagesBlog:true,PagesBlogButton:true, PagesBlogMenuButton: true, PagesBlogMenu:true }) }
                        onMouseLeave={()=> setflagPages (flagPages = { ...flagPages, menu: true , button : true, PagesBlog:true,PagesBlogButton:true, PagesBlogMenuButton: true, PagesBlogMenu:false }) }
                    >
                        <Link href={"ссылочка"} passHref>
                            <Link_A>Blog Left Sidebar</Link_A>
                        </Link>
                        <Link href={"ссылочка"} passHref>
                            <Link_A>Blog Right Sidebar</Link_A>
                        </Link>
                    </PagesBlogList>
                    )
        }
      }

    return (
            <Box
                onMouseEnter={()=> setflagPages (flagPages = {...flagPages , menu: true , button : true}) }
                onMouseLeave={()=> setflagPages (flagPages = {...flagPages , menu: true, button : false}) }
            >
                <Pages>Pages</Pages>
                <Img><Image src={arrow} alt="" width={16} height={16}/> </Img>
                {PagesButton()}
            </Box>
            )
}


