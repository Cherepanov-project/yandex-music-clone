import Image from "next/image";

import { TbContainer, Table, BtnTable } from "../styles/pricingTableStyle";
const trText = [
  { id: 1, title: "", td1: "BASIC", td2: "STANDART", td3: "PREMIUM" },
  { id: 2, title: "", td1: "0$", td2: "0$", td3: "0$" },
  { id: 3, title: "Number Of Screen", td1: "1", td2: "2", td3: "4" },
  {
    id: 4,
    title: "On how many device you can Download",
    td1: "1",
    td2: "2",
    td3: "4",
  },
];
const trCheck = [
  { id: 5, title: "Unlimited TV shows and movies", src: "/check.png" },
  { id: 6, title: "watch on mobile and tablet", src: "/check.png" },
  { id: 7, title: "watch on laptop and tv", src: "/check.png" },
  { id: 8, title: "HD available", src: "/check.png" },
  { id: 9, title: "ultra HD available", src: "/check.png" },
];

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
