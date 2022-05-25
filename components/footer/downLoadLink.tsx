import Image from 'next/image';
import Link from 'next/link';
import {links} from '../../model/footer/links'
const DownloadLinks = () => {
  return (
    <>
      {links.map(({ id, href, src, alt }) => (
        <Link key={id} href={href}>
          <a target="_blank">
            <Image src={src} alt={alt} width={130} height={40} title="download" />
          </a>
        </Link>
      ))}
    </>
  );
};
export default DownloadLinks;
