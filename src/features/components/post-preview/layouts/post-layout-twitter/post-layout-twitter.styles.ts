import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const StyledContainer = styled.div`
  height: 100%;
  margin: 0 -24px;
  > div:first-child {
    // height: calc(100% - 12px);
    border-bottom: 1px solid #E0E0E0;
    margin-bottom: 22px;
  }
  & > div {
    padding: 0px 24px;
  }
`;

const StyledPostTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
  .title > div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    p {
      color: #BDBDBD;
    }
  }
  .title {
    width: 100%;
  }
  .description {
    p {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */


      /* Gray 3 */

      color: #828282;
    }
  }
`
const StyledPostContent = styled.div`
  padding-left: 62px

`
const StyledPostImage = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
  margin-bottom: 10px;
`
const StyledActions = styled.div`
  margin-bottom: 18px;
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  button.MuiButtonBase-root.MuiIconButton-root {
    border: none !important; 
    padding: 0px;
    width: auto !important;
    height: auto !important;
    display: block !important;
    min-width: 0px !important;
    .MuiIconButton-label {
      width: 18px;
      display: inline-block;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
export const MuiAvatar = styled(Avatar)`
  margin-right: 12px;
  height: 50px !important;
  width: 50px !important;
`
const StyledPostFooter = styled.div`
  display: flex;
  .avatar {
    margin-right: 12px;
    > div {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.light};
    }
  }
  .icons {
    display: flex;
    justify-content: space-between;
  }
  .lines {
    margin-bottom: 18px;
  }
`
const StyledBlankLine = styled.div<{$width: string}>`
  width: ${(props) => props.$width || '100%'};
  background-color: ${({ theme }) => theme.colors.light};
  height: 14px;
  border-radius: 7px;
  margin: 8px 0px;
`
const StyledBlankIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
`
export default StyledContainer;

export {
  StyledPostContent,
  StyledPostImage,
  StyledPostTitle,
  StyledActions,
  StyledPostFooter,
  StyledBlankLine,
  StyledBlankIcon,
}