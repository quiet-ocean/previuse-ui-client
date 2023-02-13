import styled from 'styled-components';

const StyledContainer = styled.div`
  font-size: ${({ theme }) => theme.sizes.fontSizeRegular};  

  .MuiSnackbarContent-root {
    background-color: ${({ theme }) => theme.colors.additionalLight};
    color: ${({ theme }) => theme.colors.additionalTextColor5};
    font-size: ${({ theme }) => theme.sizes.fontSizeSmall};
  }
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.div`
  padding: 0 16px;
`;

export const StyledIcon = styled.div`  
  margin: -16px 0 -16px -16px;
  width: 57px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  &.error {
    background-color: ${({ theme }) => theme.colors.errorColor};
  }
  
  &.success {
    background-color: ${({ theme }) => theme.colors.successColor};
  }
`;

export default StyledContainer;
