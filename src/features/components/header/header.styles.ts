import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const StyledHeader = styled(AppBar)`
  justify-content: center;
  
  && {
    z-index: 1;
    position: absolute;
    background-color: transparent;
  }

  height: 90px !important;
  box-shadow: none !important;

  button.hamburger {
    margin-right: 15px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export const StyledLogo = styled.a`
  display: flex;

  img {
    width: 108px;
  }
`;
