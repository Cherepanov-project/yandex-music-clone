import Link from "next/link";
import { MenuItem, FooterTitle, Menu } from "./footerStyle";

const navFooterLeft = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Movies", path: "/" },
  { id: 3, title: "Tv Shows", path: "/" },
  { id: 4, title: "Videos", path: "/" },
  { id: 5, title: "Actors", path: "/" },
  { id: 6, title: "Basketball", path: "/" },
  { id: 7, title: "Celebrity", path: "/" },
  { id: 8, title: "Cross", path: "/" },
];

const NavigationFooterLeft = () => {
  return (
    <>
      <FooterTitle>Explore</FooterTitle>
      <div>
        <Menu>
          {navFooterLeft.map(({ id, title, path }) => (
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
export default NavigationFooterLeft;
