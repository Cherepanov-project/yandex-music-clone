import { ContactsColumn, IconBox, ImgLoc, IconTitle, IconDescription, Row } from '../styles/contactUsStyle';
import Image from 'next/image';
import Link from 'next/link';
import { contacts } from '../model/contactUs/contacts';

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

