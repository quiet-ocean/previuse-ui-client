import styled, { AnyStyledComponent } from 'styled-components';

export const StyledContainer: AnyStyledComponent = styled.div`
  width: 100%;
  height: calc(100% - 111px);
  margin: auto;
  transition: ${({ theme }) => theme.transitionRate};
  padding-top: 21px;
`;
