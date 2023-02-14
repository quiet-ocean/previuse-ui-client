import styled, { AnyStyledComponent } from 'styled-components';
import ButtonComponent from '../../components/button/button.component';

export const StyledContainer: AnyStyledComponent = styled.div`
  width: 100%;
  height: calc(100% - 84px);
  margin: auto;
  transition: ${({ theme }) => theme.transitionRate};
  padding-top: 21px;

  .MuiGrid-container, .left, .right, .MuiGrid-root {
    height: 100%;
  }

  .left {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 550px 50px 1fr;
    grid-gap: 12px;
    grid-template-areas:
      "preview layout"
      "navigation navigation"
      "summary summary"
  }

  .preview {
    grid-area: preview;
  }
  
  .layout {
    grid-area: layout;
  }
  
  .navigation {
    grid-area: navigation;
    display: flex;
    align-items: center;
  }
  
  .summary {
    grid-area: summary;
  }
  
  .right {
    height: 100%;
    grid-gap: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "panel1 chat"
      "panel2 chat"
  }

  .panel1 {
    grid-area: panel1;
  }
  
  .panel2 {
    grid-area: panel2;
  }
  
  .chat {
    grid-area: chat;
  }
`;

export const StyledPostNavigation: AnyStyledComponent = styled.div`
  button {
    margin-right: 12px;
  }
`;

export const StyledPostButton: AnyStyledComponent = styled(ButtonComponent)`
  background: ${(props: any) => props.selected ? '#5831e9' : 'inherit'} !important;
  color: ${(props: any) => props.selected ? '#fff' : 'inherit'} !important;
`;
