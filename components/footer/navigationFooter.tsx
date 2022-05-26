import Link from 'next/link';
import { FC } from 'react';
import { MenuItem, FooterTitle, Menu } from './footerStyle';
import {navArrs} from "../../model/footer/navFooter"
interface navProps {
  text: string;
  navArr: navArrs[];
}
const NavigationFooter:FC<navProps> = ({ text, navArr }) => {
  return (
    <>
      <FooterTitle>{text}</FooterTitle>
      <div>
        <Menu>
          {navArr.map(({ id, title, path }) => (
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
export default NavigationFooter;
