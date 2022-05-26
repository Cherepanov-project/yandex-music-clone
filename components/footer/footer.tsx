import Image from 'next/image';
import SocialList from './socialList';
import NavigationFooter from './navigationFooter';
import DownloadLinks from './downLoadLink';
import FooterDescription from './footerDescription';
import { navFooterLeft, navFooterRight } from '../../model/footer/navFooter';
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
            <NavigationFooter text="Explore" navArr={navFooterLeft} />
          </FooterColumn>
          <FooterColumn>
            <NavigationFooter text="Copmany" navArr={navFooterRight} />
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
