import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;

  > div:first-child {
    height: calc(100% - 12px);
  }
`;

export const StyledSickWrapper = styled.div`
  width: 280px !important;
`

export default StyledContainer;