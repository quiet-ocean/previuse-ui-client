import styled, { AnyStyledComponent } from 'styled-components';

const StyledContainer = styled.div`  
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    margin-top: -184px;
  }
`;

export const StyledTitle = styled.div`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.tertiaryBackgroundColor};
  font-weight: bold;
`;

export const StyledInstructions: AnyStyledComponent = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.additionalTextColor6};

  span {
    cursor: ${(props: any) => props.Action ? 'pointer' : 'auto'};
  }
`;

export const StyledIcon = styled.div`
  width: 250px;
  margin: auto;
`;

export const StyledBox = styled.div`
  line-height: 45px;
  text-align: center;
`;

export default StyledContainer;