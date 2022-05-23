import Image from "next/image";
import Link from "next/link";

const links = [
  {
    id: 1,
    href: "https://play.google.com/store/apps/details?id=ru.more.play",
    src: "/google.png",
    alt: "Google play",
  },
  {
    id: 2,
    href: "https://apps.apple.com/ru/app/okko-%D0%BA%D0%B8%D0%BD%D0%BE-%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B-%D1%81%D0%BF%D0%BE%D1%80%D1%82-%D1%82%D0%B2/id448868000",
    src: "/appStore.png",
    alt: "App Store",
  },
];
const DownloadLinks = () => {
  return (
    <>
      {links.map(({ id, href, src, alt }) => (
        <Link key={id} href={href}>
          <a target="_blank">
            <Image
              src={src}
              alt={alt}
              width={130}
              height={40}
              title="download"
            />
          </a>
        </Link>
      ))}
    </>
  );
};
export default DownloadLinks;
