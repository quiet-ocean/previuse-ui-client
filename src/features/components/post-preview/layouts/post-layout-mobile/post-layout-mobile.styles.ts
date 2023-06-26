import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: calc(100% + 48px);
  margin: -24px;
  position: relative;
`;

export const StyledIcons = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  color #fff;
  line-height: 35px;

  > div {
    line-height: 20px;
    padding-bottom: 21px;

    > div:first-child {
      width: 32px;
      height: 32px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const StyledWrapper = styled.div`
  
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;

  div.header {
    padding: 24px;
    // text-align: center;
    text-transform: capitalize;
    display: flex;
    gap: 12px;
    backdrop-filter: blur(16px);
    p {
      color: white;

      span {
        font-weight: 600;
      }
    }
  }
  div.side-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 100%;
  }
`;

export const StyledTitle = styled.div`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 12px;
  width: 100%;
`;

export const StyledAction = styled(Button)`
  background-color: #E0E0E0 !important;
  // width: 232px;
  // height: 29px;
  border-radius: 18px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #BDBDBD !important;
  text-transform: capitalize !important;

  p {
    margin: 8px !important;
  }
`;

export const StyledFooter = styled.div`
  backdrop-filter: blur(16px);
  position: absolute;
  bottom: 0;
  width: calc(100% - 48px);
  // height: 100px;
  padding: 24px;

  .sponsored {
    width: 68px;
    height: 22px;
    background: #fff;
    color: #828282 !important;
    border-radius: 5px;
    justify-content: center;
  }

  p {
    color: white;
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    color: #fff;
    justify-content: center;
    svg {
      padding-right: 4px;
    }
  }
`;

export const StyledAvatar = styled.div`
  
  display: flex;
  justify-content: center;

  > div {
    width: 40px;
    height: 40px;

    img {
      width: 100%;
      height: 100%;

      border-radius: 100%;
    }
  }
`

export default StyledContainer;