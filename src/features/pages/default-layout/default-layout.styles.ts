import styled, { AnyStyledComponent } from 'styled-components';

export const StyledContainer: AnyStyledComponent = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.lightBackgroundColor};
  display: flex;
  width: 100%;
  background-size: cover;
  min-width: 1000px;
  overflow: auto;

  && {
    margin: 0;
  }
`;

export const StyledContent: AnyStyledComponent = styled.div`
  padding: ${({ theme }) => theme.spacing.framePadding};
  padding-top: 0;
  width: calc(100% - 64px);
  height: calc(100% - 32px);
`;