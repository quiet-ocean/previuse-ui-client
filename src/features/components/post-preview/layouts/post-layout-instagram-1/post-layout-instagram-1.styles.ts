import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;
`;

export const StyledImage = styled.div`
  margin: 0 -32px;
  padding-top: 24px;
  // height: 58%;
  height: 250px;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const StyledHeader = styled.div`
  border-bottom: 1px solid #E0E0E0;
  height: 50px;
  margin: -24px 0 24px -24px;
  padding: 0 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAction = styled.div`
  border-bottom: 1px solid #E0E0E0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  button {
    text-transform: capitalize;
    font-size: 18px;
    font-weight: normal !important;
    padding: 0px !important;

    span.MuiButton-label {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;

      /* RICH BLACK */

      color: #0D0000;

    }
  }
`;

export const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  > div:first-child svg {
    margin-right: 8px;
  }

  svg path {
    fill: #828282;
  }
`;

export const StyledDescription = styled.div`
  // height: 150px;
  color: black;
`;

export default StyledContainer;