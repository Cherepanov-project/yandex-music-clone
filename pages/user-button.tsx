import { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import{ Img, Box, Avatar,  SubMenuUser, Link_User, UserLink, UserImg} from "./indexStyle"
import login from '../src/login.png'
import register from '../src/register.png'
import library from '../src/library.png'
import playlist from '../src/playlist.png'
import upload from '../src/upload.png'

export const UserMenu = () => {

    let [flagAvatar, setflagAvatar] = useState(false);
    
    const UserButton = () =>{
        if(flagAvatar) {
          return (
          <SubMenuUser>
            <UserLink>
                <UserImg> <Image src={login} alt="login" width={35} height={35}/> </UserImg>
                <Link href={"ссылочка"} passHref>
                    <Link_User>Login</Link_User>
                </Link>
            </UserLink>

            <UserLink>
                <UserImg><Image src={register} alt="register" width={35} height={35}/> </UserImg>
                <Link href={"ссылочка"} passHref>
                    <Link_User>Register</Link_User>
                </Link>
            </UserLink> 

            <UserLink>
                <UserImg><Image src={library} alt="library" width={35} height={35}/> </UserImg>
                <Link href={"ссылочка"} passHref>
                    <Link_User>Library</Link_User>
                </Link>
            </UserLink>

            <UserLink>
                <UserImg><Image src={playlist} alt="Playlist" width={35} height={35}/> </UserImg>
                <Link href={"ссылочка"} passHref>
                    <Link_User>Movie Playlist</Link_User>
                </Link>
            </UserLink>

            <UserLink>
                <UserImg><Image src={playlist} alt="Playlist" width={35} height={35}/> </UserImg>
                <Link href={"ссылочка"} passHref>
                    <Link_User>TV Shovs Playlist</Link_User>
                </Link>
            </UserLink>

            <UserLink>
                <UserImg><Image src={playlist} alt="Playlist" width={35} height={35}/> </UserImg>
                <Link href={"ссылочка"} passHref>
                    <Link_User>Video Playlist</Link_User>
                </Link>
            </UserLink>
            
            <UserLink>
                <UserImg><Image src={upload} alt="upload" width={35} height={35}/> </UserImg>
                <Link href={"ссылочка"} passHref>
                    <Link_User>Upload Video</Link_User>
                </Link>
            </UserLink>
          </SubMenuUser> 
          )
        }
      }

    return (
        <Box
        onClick={()=> setflagAvatar (flagAvatar =  !flagAvatar ) }
          
        >
          <Avatar src = 'https://www.radu.nl/sites/images/Rood.png' alt="avatar" width={45} height={45} style={{border:500}} />
          {UserButton()}

        </Box>
    )
}


