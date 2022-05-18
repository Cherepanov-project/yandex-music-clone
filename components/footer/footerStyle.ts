import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #221f1f;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  flex: auto;
  flex-wrap: wrap;
  padding: 60px 52px 0px 52px;
  @media (max-width: 992px) {
    padding: 30px 25px 0px 25px;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const FooterColumn = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 45px;
  @media (max-width: 1200px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
export const Text = styled.p`
  margin-bottom: 30px;
`;
export const SocialLink = styled.ul`
  display: flex;
  list-style: none;
`;
export const SocialLi = styled.li`
  margin-right: 30px;
  &:hover {
    transition: opacity 0.5s;
    opacity: 0.5;
  }
`;
export const FooterTitle = styled.h4`
  font-size: 26px;
  margin-bottom: 15px;
`;
export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const MenuItem = styled.li`
  width: 50%;
  color: #e50916;
  margin-bottom: 13px;
  & span {
    color: #fff;
    font-size: 17px;
  }
  & span:hover {
    transition: color 0.5s;
    color: #e50916;
  }
`;
export const DownloadLink = styled.div`
  display: flex;
  gap: 10px;
`;
export const Copy = styled.div`
  background-color: #e50916;
  height: 62px;
  color: #fff;
  text-align: center;
  padding-top: 15px;
`;
