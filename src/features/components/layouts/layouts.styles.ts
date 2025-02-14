import styled from 'styled-components';
import MockupImage from '../../../assets/images/post-image3.png'
const StyledContainer = styled.div`
  padding: 24px;
  height: calc(100% - 64px);
  overflow-y: scroll;
  margin: 8px 8px 8px 0px;

  > div {
    padding-bottom: 24px;
  }

  .list {
    display: flex;
  }
  
  .MuiListItem-root {
    &.selected {
      outline: ${({ theme }) => `2px solid ${theme.colors.additionalTextColor3}`}
    }

    width: 45px;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 5px;
    margin-right: 12px;
  }

  .title {
    color: #000;
    font-size: 14px;
    padding-bottom: 12px;
    text-transform: capitalize;
  }
`;

const StyledMenuItemContainer = styled.div<{ $logo: string }>`
  & > li {
    background-image: url('${props => props.$logo || MockupImage }');
    background-size: cover;
    background-repeat: no-repeat;
  }
`

export default StyledContainer;
export { StyledMenuItemContainer }
