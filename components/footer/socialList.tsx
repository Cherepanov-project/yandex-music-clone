import Image from "next/image";
import { FacebookShareButton } from "next-share";
import { VKShareButton } from "next-share";
import { TwitterShareButton } from "next-share";
import { TelegramShareButton } from "next-share";
import fb from "../../img/fb.svg";
import telegram from "../../img/telegram.svg";
import twitter from "../../img/twitter.svg";
import vkontakte from "../../img/vkontakte.svg";

import { SocialLink, SocialLi } from "./footerStyle";

const SocialList = () => {
  return (
    <SocialLink>
      <SocialLi>
        <FacebookShareButton
          url={
            "http://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
          }
        >
          <Image
            src={fb}
            alt="fbook"
            width={25}
            height={25}
            title="share in facebook"
          />
        </FacebookShareButton>
      </SocialLi>
      <SocialLi>
        <VKShareButton
          url={
            "http://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
          }
        >
          <Image
            src={vkontakte}
            alt="vk"
            width={25}
            height={25}
            title="share in vkontakte"
          />
        </VKShareButton>
      </SocialLi>
      <SocialLi>
        <TelegramShareButton
          url={
            "http://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
          }
        >
          <Image
            src={telegram}
            alt="telegram"
            width={25}
            height={25}
            title="share in telegram"
          />
        </TelegramShareButton>
      </SocialLi>
      <SocialLi>
        <TwitterShareButton
          url={
            "http://template.gentechtreedesign.com/html/streamlab/red-html/index.html"
          }
        >
          <Image
            src={twitter}
            alt="twitter"
            width={25}
            height={25}
            title="share in twitter"
          />
        </TwitterShareButton>
      </SocialLi>
    </SocialLink>
  );
};
export default SocialList;
