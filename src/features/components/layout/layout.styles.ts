import styled, { AnyStyledComponent } from 'styled-components';

export const StyledContainer: AnyStyledComponent = styled.div`
  width: ${(props: any) => props.hasDrawer ? `calc(100% - ${props.theme.sizes.drawerWidth})` : '100%'};
  padding-left: ${(props: any) => props.hasDrawer ? props.theme.sizes.drawerWidth as string : '0'};
  transition: ${({ theme }) => theme.transitionRate};
  height: 100%;
`;
