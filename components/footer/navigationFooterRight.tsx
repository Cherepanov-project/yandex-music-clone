import Link from "next/link";
import { MenuItem, Menu, FooterTitle } from "./footerStyle";

const navFooterRight = [
  { id: 9, title: "Company", path: "/" },
  { id: 10, title: "Privacy Policy", path: "/" },
  { id: 11, title: "Terms Of Use", path: "/" },
  { id: 12, title: "Help Center", path: "/" },
  { id: 13, title: "contact us", path: "/contactUs" },
  { id: 14, title: "Subscribe", path: "/pricingTable" },
  { id: 15, title: "Our Team", path: "/" },
  { id: 16, title: "Faq", path: "/" },
];

const NavigationFooterRight = () => {
  return (
    <>
      <FooterTitle>Company</FooterTitle>
      <div>
        <Menu>
          {navFooterRight.map(({ id, title, path }) => (
            <MenuItem key={id}>
              <Link key={id} href={path}>
                <a>
                  <span>{title}</span>
                </a>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
};
export default NavigationFooterRight;
