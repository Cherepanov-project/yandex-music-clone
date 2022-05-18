import {
  Row,
  ContactsColumn,
  IconBox,
  ImgLoc,
  IconTitle,
  IconDescription,
  ContactColumn,
} from "../styles/contactUsStyle";
import Image from "next/image";
import Link from "next/link";
import location from "../img/location.png";
import phone from "../img/phone.png";
import mail from "../img/mail.png";

const Contacts = () => {
  return (
    <Row>
      <ContactsColumn>
        <IconBox>
          <div>
            <ImgLoc>
              <Image src={location} alt="location" />
            </ImgLoc>
          </div>
          <div>
            <IconTitle>
              <span>Our Location</span>
            </IconTitle>
            <IconDescription>
              The Queen&apos;s Walk, Bishop&apos;s, London SE1 7PB, United
              Kingdom
            </IconDescription>
          </div>
        </IconBox>
      </ContactsColumn>
      <ContactsColumn>
        <IconBox>
          <div>
            <ImgLoc>
              <Image src={phone} alt="location" />
            </ImgLoc>
          </div>
          <div>
            <IconTitle>
              <span>call us at</span>
            </IconTitle>
            <IconDescription>
              <Link href="tel:+ (567) 1234-567-8900">
                <a>+ (567) 1234-567-8900</a>
              </Link>
            </IconDescription>
            <IconDescription>
              <Link href="tel:+ (567) 1234-567-8901">
                <a>+ (567) 1234-567-8901</a>
              </Link>
            </IconDescription>
          </div>
        </IconBox>
      </ContactsColumn>
      <ContactColumn>
        <IconBox>
          <div>
            <ImgLoc>
              <Image src={mail} alt="location" />
            </ImgLoc>
          </div>
          <div>
            <IconTitle>
              <span>Mail us</span>
            </IconTitle>
            <IconDescription>
              <Link href="mailto:infogentechtree2@gmail.com">
                <a>info@gentechtree.com</a>
              </Link>
            </IconDescription>
            <IconDescription>
              <Link href="mailto:infogentechtree2@gmail.com">
                <a>info2@gentechtree.com</a>
              </Link>
            </IconDescription>
          </div>
        </IconBox>
      </ContactColumn>
    </Row>
  );
};
export default Contacts;
