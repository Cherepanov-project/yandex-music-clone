import styled from "styled-components";
import * as variables from "../../utils/variables";

export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${variables.DARK_COLOR};
  padding: 30px;
  width: 500px;
  border-radius: 2px;
  margin-top: 100px;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 280px;
    margin: 50px 20px 10px;
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  border-bottom: 1px solid ${variables.BLACK_COLOR};

  margin: 0 0 10px;
  padding: 0 0 10px;
  position: relative;

  @media (max-width: 768px) {
    line-height: 30px;
    font-size: 20px;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100px;
    height: 3px;
    background-color: ${variables.PRIMARY_COLOR};
  }

  &::selection {
    background-color: ${variables.PRIMARY_COLOR};
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  padding: 12px 30px;
  margin-top: 25px;
  background-color: ${variables.PRIMARY_COLOR};
  border: 1px solid ${variables.PRIMARY_COLOR};
  border-radius: 2px;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;

  &:hover {
    background-color: ${variables.PRIMARY_DARK_COLOR};
    border: 1px solid ${variables.PRIMARY_DARK_COLOR};
  }

  &:active {
    border: 1px solid pink;
  }
`;

export const MiniLink = styled.a`
  outline: none;
  text-decoration: none;
  color: ${variables.PRIMARY_COLOR};
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
  user-select: none;

  &:hover {
    color: ${variables.PRIMARY_DARK_COLOR};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 15px;
`;

export const LeftSide = styled.div`
  margin-right: 7px;

  &:after {
    content: "|";
    color: white;
    margin-left: 7px;
  }
`;
