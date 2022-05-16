import styled from 'styled-components';
import { FormContainer } from '../sign-in/loginStyles';

export const Container = styled(FormContainer)`
  width: 750px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  width: 48%;
  list-style-type: none;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;