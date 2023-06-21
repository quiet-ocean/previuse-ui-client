import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.div`
  margin: 0 -32px;
  padding-top: 24px;
  height: 100%;
  // height: 250px;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const StyledHeader = styled.div`
  border-bottom: 1px solid #E0E0E0;
  height: 50px;
  margin: -24px 0 24px -24px;;
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
  // height: 50px;

  button.MuiButtonBase-root.MuiButton-root {
    text-transform: capitalize !important;
    margin-right: 8px;
    .MuiButton-label > div {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

export const StyledDescription = styled.div`
  // height: 150px;
  color: black;
`;

export const StyledPostContent = styled.div`
  margin-top: 15px;
  margin-bottom: 5px;
  height: 100%;

  display: flex;
  flex-direction: column;
  > p {
    color: black;
  }
`
export const StyledPostBody = styled.div`
  padding: 16px 24px;
  background: #EEF3F8;

  margin: 0px -24px;
  flex: 1;
`
export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;

  button.MuiButtonBase-root.MuiButton-root {
    border: 1px solid #5831E9;
    border-radius: 50px;
    text-transform: capitalize !important;
    height: auto;
    padding: 4px 12px;
    p {
      color: #5831E9;
    }
  }
`

export const StyledIconWrapper = styled.div`
  width: 18px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export default StyledContainer;