import { FacebookShareButton } from "next-share";
import { VKShareButton } from "next-share";
import { TwitterShareButton } from "next-share";
import { TelegramShareButton } from "next-share";
export const socialLinks = [
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