import styled from "styled-components";

export const SectionContacts = styled.section`
  padding: 90px 0px 90px 0px;
  background-color: #161616;
  color: white;
  @media (max-width: 1140px) {
    padding: 45px 0px 45px 0px;
  }
`;
export const ContactsContainer = styled.div`
  max-width: 1300px;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
`;
export const Row = styled.div`
  display: flex;
  @media (max-width: 1140px) {
    flex-wrap: wrap;
  }
`;
export const ContactsColumn = styled.div` 
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 1140px) {

      flex: 0 0 50%;
      max-width: 50%;
     }
     @media (max-width: 768px) {
      margin-bottom:24px;
      flex: 0 0 100%;
      max-width: 100%;
     }
   
  }
    `;
export const ContactColumn = styled.div` 
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 1140px) {

      flex: 0 0 100%;
      max-width: 100%;
      margin-top: 24px;
     }
     @media (max-width: 768px) {
      margin-top:0px;
     }
  }
    `;

export const IconBox = styled.div`
  background-color: #221f1f;
  padding: 45px;
  text-align: center;
  border-bottom: 3px solid #e50916;
`;
export const ImgLoc = styled.div`
  border: 3px solid white;
  border-radius: 100%;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 25px;
  background-color: #e50916;
  width: 100px;
  height: 100px;
  text-align: center;
`;
export const IconTitle = styled.h3`
  font-size: 32px;
  font-style: normal;
  line-height: 40px;
  margin-bottom: 8px;
`;
export const IconDescription = styled.p`
  line-height: 2;
`;
export const MapColumn = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  @media (max-width: 1140px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
export const TitleForm = styled.h2`
  font-size: 36px;
  font-style: normal;
  line-height: 44px;
  margin-bottom: 48px;
`;
export const FormRow = styled.div`
  display: flex;
  line-height: 2;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const InputColumn = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: 24px;
  padding-right: 15px;
  padding-left: 15px;
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
export const Inp = styled.input`
  background-color: #221f1f;
  color: white;
  border: none;
  padding-left: 15px;
  padding-right: 15px;
  height: 54px;
  width: 100%;
  font-size: 16px;
  border: 1px solid transparent;
  &:hover {
    transition: border 0.5s;
    border: 1px solid #e50916;
  }
  &:focus {
    border: 1px solid #e50916;
  }
`;
export const TxtArea = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 24px;
  padding-right: 15px;
  padding-left: 15px;
`;
export const Map = styled.div`
  width: 100%;
`;
export const TextAr = styled.textarea`
  background-color: #221f1f;
  color: white;
  border: none;
  width: 100%;
  padding: 10px 15px;
  line-height: 2;
  border: 1px solid transparent;
  font-size: 16px;
  &:hover {
    transition: border 0.5s;
    border: 1px solid #e50916;
  }
  &:focus {
    border: 1px solid #e50916;
  }
`;
export const BtnForm = styled.button`
  background-color: #e50916;
  color: #fff;
  cursor: pointer;
  border: none;
  width: 100px;
  height: 56px;
  font-size: 16px;
  margin-top: 24px;
`;
export const Err = styled.div`
  color: #e50916;
  margin-top: 5px;
  font-size: 14px;
`;
