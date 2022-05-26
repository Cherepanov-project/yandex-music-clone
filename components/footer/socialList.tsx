import Image from "next/image";
import { SocialLink, SocialLi } from "./footerStyle";
import { socialLinks } from "../../model/footer/socialLinks";

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
