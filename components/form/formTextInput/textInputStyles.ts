import styled from 'styled-components';
import * as variables from '../../../utils/variables';

export const Input = styled.input<{ error: boolean }>`
  width: 100%;
  color: white;
  font-size: 16px;
  height: 54px;
  line-height: 54px;

  background-color: ${variables.BLACK_COLOR};
  border-radius: 4px;
  border: ${(props) => (props.error ? `1px solid ${variables.ERROR_COLOR}` : `1px solid ${variables.BLACK_COLOR}`)};
  transition: border-color 0.8s;
  
  padding: 0 15px;
  margin-top: 5px;
  
  &::placeholder {
    color: ${variables.SECONDARY_COLOR};
    opacity: 0.4;
  }
  
  &::selection {
    background-color: ${variables.PRIMARY_COLOR};
  }
  
  &:hover, &:focus {
    border: ${(props) => (props.error ? `1px solid ${variables.ERROR_COLOR}` : `1px solid ${variables.PRIMARY_COLOR}`)}
  }
`;

export const ErrorMsg = styled.div`
  color: ${variables.ERROR_COLOR};    
  margin-top: 5px;
  font-size: 14px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: 400;
  line-height: 26px;
  font-size: 17px;
  color: white;
  letter-spacing: 0.02em;
  
  margin: 15px 0 0;
  
  &::selection {
    background-color: ${variables.PRIMARY_COLOR};
  }
`;