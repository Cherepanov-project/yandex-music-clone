import styled from "styled-components";
import * as variables from "../../../utils/variables";
import { Label } from "../formCheckbox/checkboxStyles";

export const LabelRadio = styled(Label)`
  max-width: 215px;
  margin-top: 20px;
`;

export const HiddenRadio = styled.input.attrs({ type: "radio" })`
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

export const StyledRadio = styled.div`
  display: inline-flex;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: white;
  border: 4px solid white;
  margin-right: 10px;

  ${HiddenRadio}:checked + & {
    border: 4px solid ${variables.PRIMARY_COLOR};
  }

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 2px ${variables.ERROR_COLOR};
  }
`;
