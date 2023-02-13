import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledIcons = styled.div`

`;

export const StyledMetrics = styled.div`
  color: ${({ theme }) => theme.colors.additionalTextColor4};
  display: flex;
  justify-content: space-between;
  min-width: 176px;
`;

export default StyledContainer;