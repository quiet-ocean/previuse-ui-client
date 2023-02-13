import styled, { AnyStyledComponent } from 'styled-components';

const StyledContainer: AnyStyledComponent = styled.div`
  color: #000;
  display: flex;
  height: 90px;
  justify-content: space-between;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondaryBorderColor}`};
  left: ${(props: any) => props.hasDrawer ? '0' : '187px'};
  width: ${(props: any) => props.hasDrawer ? '100%' : 'calc(100% - 187px)'};
  align-items: center;
  transition: ${({ theme }) => theme.transitionRate};
  z-index: 2;
  position: relative;
`;

export default StyledContainer;