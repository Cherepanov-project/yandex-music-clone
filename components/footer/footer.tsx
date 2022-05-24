import Image from 'next/image';
import SocialList from './socialList';
import NavigationFooterLeft from './navigationFooterLeft';
import NavigationFooterRight from './navigationFooterRight';
import DownloadLinks from './downLoadLink';
import FooterDescription from './footerDescription';

import { FooterContainer, FooterTop, FooterColumn, FooterTitle, Copy, DownloadLink } from './footerStyle';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterTop>
          <FooterColumn>
            <div>
              <Image src={'/logo.png'} alt="logo" width={200} height={60} />
              <FooterDescription />
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
              <FooterDescription />
              <DownloadLink>
                <DownloadLinks />
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
