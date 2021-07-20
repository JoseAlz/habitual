import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 48px;
  height: 145px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff9cc;
`;

export const CopyrigthContainer = styled.div`
  display: inline-block;

  p,
  a {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
  a {
    text-decoration: underline;
  }
`;
