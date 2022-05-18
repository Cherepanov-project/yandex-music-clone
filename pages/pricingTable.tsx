import Image from "next/image";
import check from "../img/check.png";

import { TbContainer, Table, BtnTable } from "../styles/pricingTableStyle";
const PricingTable = () => {
  return (
    <>
      <TbContainer>
        <Table>
          <tbody>
            <tr>
              <td></td>
              <td>BASIC</td>
              <td>STANDART</td>
              <td>PREMIUM</td>
            </tr>
            <tr>
              <td></td>
              <td>0$</td>
              <td>0$</td>
              <td>0$</td>
            </tr>
            <tr>
              <td>Number Of Screen</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>On how many device you can Download</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Unlimited TV shows and movies</td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>watch on mobile and tablet</td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>watch on laptop and tv</td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>HD available</td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>ultra HD available</td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
              <td>
                <Image src={check} alt="check" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <BtnTable type="button">SUBSCRIBE</BtnTable>
              </td>
              <td>
                <BtnTable type="button">SUBSCRIBE</BtnTable>
              </td>
              <td>
                <BtnTable type="button">SUBSCRIBE</BtnTable>
              </td>
            </tr>
          </tbody>
        </Table>
      </TbContainer>
    </>
  );
};
export default PricingTable;
