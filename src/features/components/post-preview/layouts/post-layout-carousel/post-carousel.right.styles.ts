import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;

  > div:first-child {
    height: calc(100% - 12px);
  }

  > h3 {
    margin-bottom: 12px;
  }
`;

export const StyledPostContent = styled.div`
  display: flex;
  gap: 12px;
`

export const StyledImageWrapper = styled.div`
  width: 100%;
  flex: 1;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`

export const StyledPostBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledFooter = styled.div`
  padding: 24px 0px;
  button.MuiButton-root {
    font-size: 14px !important;
    font-weight: 400 !important;
    width: auto !important;
  } 
`
export const StyledSickWrapper = styled.div`
  width: 280px !important;
`

export default StyledContainer;