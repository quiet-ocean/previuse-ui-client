import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 24px;
  height: calc(100% - 48px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > div:first-child {
    min-height: 483px;
  }
`;

export default StyledContainer;