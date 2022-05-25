import Image from 'next/image';

import { TbContainer, Table, BtnTable } from '../styles/pricingTableStyle';
import { trText } from '../model/pricingTable/trText';
import { trCheck } from '../model/pricingTable/trCheck';

const PricingTable = () => {
  return (
    <>
      <TbContainer>
        <Table>
          <tbody>
            {trText.map(({ id, title, td1, td2, td3 }) => (
              <tr key={id}>
                <td>{title}</td>
                <td>{td1}</td>
                <td>{td2}</td>
                <td>{td3}</td>
              </tr>
            ))}
            {trCheck.map(({ id, title, src }) => (
              <tr key={id}>
                <td>{title}</td>
                {[...Array(3)].map((_, i) => (
                  <td key={i}>
                    <Image src={src} alt="check" width={20} height={20} />
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td></td>
              {[...Array(3)].map((_, i) => (
                <td key={i}>
                  <BtnTable type="button">SUBSCRIBE</BtnTable>
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </TbContainer>
    </>
  );
};
export default PricingTable;
