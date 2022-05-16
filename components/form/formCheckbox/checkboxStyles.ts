import styled from "styled-components";
import * as variables from "../../../utils/variables";

export const Label = styled.label`
  display: flex;
  align-items: center;
  max-width: 145px;
  font-weight: 400;
  line-height: 22px;
  font-size: 15px;
  color: white;
  letter-spacing: 0.02em;
  margin: 15px 0 0;
  cursor: pointer;

  &::selection {
    background-color: ${variables.PRIMARY_COLOR};
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-flex;
  width: 13px;
  height: 13px;
  border-radius: 3px;
  background-color: white;
  margin-right: 5px;

  ${HiddenCheckbox}:checked + & {
    background-color: ${variables.PRIMARY_COLOR};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px #ffb6c1;
  }
`;

export const Icon = styled.svg.attrs({ viewBox: "0 0 24 24" })`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
