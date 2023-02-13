import styled, { AnyStyledComponent } from 'styled-components';

const Container: AnyStyledComponent = styled.div`
  && {
    padding: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.48);
    left: 0;
    top: 0;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: $primary-background-color;
    }
  }
`;

export default Container;
