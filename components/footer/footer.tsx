import Link from "next/link";
import Image from "next/image";
import logo from "../../img/logo.png";
import google from "../../img/google.png";
import appStore from "../../img/appStore.png";
import SocialList from "./socialList";
import NavigationFooterLeft from "./navigationFooterLeft";
import NavigationFooterRight from "./navigationFooterRight";

import {
  FooterContainer,
  FooterTop,
  FooterColumn,
  Text,
  FooterTitle,
  Copy,
  DownloadLink,
} from "./footerStyle";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterTop>
          <FooterColumn>
            <div>
              <Image src={logo} alt="logo" width={200} height={60} />
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <SocialList />
            </div>
          </FooterColumn>
          <FooterColumn>
            <NavigationFooterLeft />
          </FooterColumn>
          <FooterColumn>
            <NavigationFooterRight />
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Downlaod App</FooterTitle>
            <div>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <DownloadLink>
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=ru.more.play"
                  }
                >
                  <a target="_blank">
                    <Image
                      src={google}
                      alt="Google play"
                      width={130}
                      height={40}
                      title="download"
                    />
                  </a>
                </Link>
                <Link
                  href={
                    "https://apps.apple.com/ru/app/okko-%D0%BA%D0%B8%D0%BD%D0%BE-%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B-%D1%81%D0%BF%D0%BE%D1%80%D1%82-%D1%82%D0%B2/id448868000"
                  }
                >
                  <a target="_blank">
                    <Image
                      src={appStore}
                      alt="App Store"
                      width={130}
                      height={40}
                      title="download"
                    />
                  </a>
                </Link>
              </DownloadLink>
            </div>
          </FooterColumn>
        </FooterTop>
        <Copy>Copyright 2021 stremlab All Rights Reserved</Copy>
      </FooterContainer>
    </>
  );
};
export default Footer;
