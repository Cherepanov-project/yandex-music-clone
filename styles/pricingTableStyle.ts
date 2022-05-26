import styled from "styled-components";

export const TbContainer = styled.div`
  width: 100%;
  background-color: black;
  padding: 100px;
  @media (max-width: 992px) {
    padding: 10px;
  }
  @media (max-width: 576px) {
    padding: 5px;
  }
`;
export const Table = styled.table`
  background-color: #221f1f;
  color: white;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;

  & tr:first-child {
    background-color: #e50916;
  }

  & td {
    border: 1px solid #222d42;
    padding: 20px;
  }
  & tr:nth-child(1) {
    font-size: 26px;
    font-weight: 600;
  }
  & tr:nth-child(2) {
    font-size: 30px;
  }
  @media (max-width: 992px) {
    & td {
      padding: 10px;
    }
    & tr:nth-child(1) {
      font-size: 16px;
      font-weight: 600;
    }
    & tr:nth-child(2) {
      font-size: 20px;
    }
  }
  @media (max-width: 576px) {
    font-size: 10px;
    & td {
      padding: 5px;
    }
  }
`;
export const BtnTable = styled.button`
  background-color: #e50916;
  color: #fff;
  cursor: pointer;
  border: none;
  width: 138px;
  height: 56px;
  font-size: 16px;
  &:hover {
    transition: background-color 0.5s;
    background-color: #b81d24;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 56px;
    font-size: 12px;
  }
`;
