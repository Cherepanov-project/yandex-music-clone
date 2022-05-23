import Image from "next/image";
import { FacebookShareButton } from "next-share";
import { VKShareButton } from "next-share";
import { TwitterShareButton } from "next-share";
import { TelegramShareButton } from "next-share";

import { SocialLink, SocialLi } from "./footerStyle";
const socialLinks = [
  {
    id: 1,
    TagLink: FacebookShareButton,
    alt: "fbook",
    src: "/fb.svg",
    title: "share in facebook",
  },
  {
    id: 2,
    TagLink: VKShareButton,
    alt: "vk",
    src: "/vkontakte.svg",
    title: "share in vkontakte",
  },
  {
    id: 3,
    TagLink: TelegramShareButton,
    alt: "telegram",
    src: "/telegram.svg",
    title: "share in telegram",
  },
  {
    id: 4,
    TagLink: TwitterShareButton,
    alt: "twitter",
    src: "/twitter.svg",
    title: "share in twitter",
  },
];

const SocialList = () => {
  return (
    <>
      <SocialLink>
        {socialLinks.map(({ id, TagLink, alt, src, title }) => (
          <SocialLi key={id}>
            <TagLink
              url={
                "http://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
              }
            >
              <Image src={src} alt={alt} width={25} height={25} title={title} />
            </TagLink>
          </SocialLi>
        ))}
      </SocialLink>
    </>
  );
};
export default SocialList;
