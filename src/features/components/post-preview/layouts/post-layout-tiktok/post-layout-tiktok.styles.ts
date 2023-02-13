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
  }
`;

export const StyledWrapper = styled.div`
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledTitle = styled.div`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 12px;
  width: 100%;
`;

export const StyledAction = styled(Button)`
  background-color: #4F4F4F !important;
  width: 232px;
  height: 29px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #BDBDBD !important;
`;

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 48px);
  height: 100px;
  padding: 24px;

  .sponsered {
    width: 68px;
    height: 22px;
    background: #fff;
    color: #828282 !important;
    border-radius: 5px;
    justify-content: center;
  }

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    color: #fff;

    svg {
      padding-right: 4px;
    }
  }
`;

export default StyledContainer;