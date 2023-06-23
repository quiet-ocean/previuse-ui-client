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
    grid-gap: 24px;
    grid-template-areas:
      "preview layout"
      "navigation navigation"
      "summary summary"
  }

  .preview {
    grid-area: preview;
    min-width: 300px;
    max-width: 400px;
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

    .MuiPaper-root {
      padding: 24px;
    }
  }
  
  .right {
    height: 100%;
    grid-gap: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "panel1 chat"
      "panel2 chat"
  }

  .panel1 {
    grid-area: panel1;

    > div.MuiCard-root:first-child {
      
      height: auto;
      padding: 12px;
      margin: 0px 0px 24px 0px;

      .post-title {
        color: #828282;
        font-weight: 400;
        text-transform: capitalize;
      }
    }
  }
  
  .panel2 {
    grid-area: panel2;
    margin-top: 72px;
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
  font-weight: ${(props: any) => props.selected ? '500' : 'normal'} !important;
`;

export const StyledButtonContainer = styled.div<{ $show: boolean }>`
  padding: 0px 0px 12px 0px;
  display: flex;
  visibility: ${(props) => props.$show ? 'visible' : 'hidden'};
  gap: 24px;

  button.MuiButtonBase-root  {
    padding: 7px 16px;
    > .MuiButton-label {
      text-transform: capitalize;
      font-family: Rubik;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
  button.active {
    border: 1px solid transparent !important;
    background-color: #E0E0E0 !important;
  }
`