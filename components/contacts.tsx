import { ContactsColumn, IconBox, ImgLoc, IconTitle, IconDescription, Row } from '../styles/contactUsStyle';
import Image from 'next/image';
import Link from 'next/link';

const contacts = [
  {
    id: 1,
    src: '/location.png',
    alt: 'location',
    title: 'Our Location',
    descr: "The Queen's Walk, Bishop's,",
    descr2: 'London SE1 7PB, UnitedKingdom',
    href: '',
  },
  {
    id: 2,
    src: '/phone.png',
    alt: 'phone',
    title: 'Call Us At',
    descr: '+ (567) 1234-567-8900',
    descr2: '+ (567) 1234-567-8901',
    href: 'tel:+ (567) 1234-567-8900',
  },
  {
    id: 3,
    src: '/mail.png',
    alt: 'email',
    title: 'Mail Us',
    descr: 'info@gentechtree.com',
    descr2: 'info2@gentechtree.com',
    href: 'mailto:infogentechtree2@gmail.com',
  },
];

const Contacts = () => {
  return (
    <Row>
      {contacts.map(({ id, src, alt, title, descr, descr2, href }) => (
        <ContactsColumn key={id}>
          <IconBox>
            <div>
              <ImgLoc>
                <Image src={src} alt={alt} width={100} height={100} />
              </ImgLoc>
            </div>
            <div>
              <IconTitle>
                <span>{title}</span>
              </IconTitle>
              <IconDescription>
                <Link href={href}>
                  <a>{descr}</a>
                </Link>
              </IconDescription>

              <IconDescription>
                <Link href={href}>
                  <a>{descr2}</a>
                </Link>
              </IconDescription>
            </div>
          </IconBox>
        </ContactsColumn>
      ))}
    </Row>
  );
};
export default Contacts;

