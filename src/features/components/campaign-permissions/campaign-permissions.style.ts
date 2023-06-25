import styled from "styled-components";

const StyledContainer = styled.div`
  // display: flex;
  .MuiAutocomplete-popper {
    top: 42px !important;
  }
`

const StyledContent = styled.div`
    padding-bottom: 16px;
`

const StyledInputWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  margin: 16px 0px;

  & > div {
    display: flex;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    padding: 2px 8px;
  }
  select {
    width: 120px;
    padding: 2px 8px;
    border-radius: 2px;
  }

  .MuiInput-underline:before {
    border: none;
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    // border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    border: none;
  }

  .MuiInput-underline:after {
    border: none !important;
  }

  .MuiOutlinedInput-root {
    input {
      padding: 12px;
      font-size: 14px;
    }
  }
  & > button.MuiButtonBase-root {
    border: none !important;
    color: white !important;
    background-color: ${({ theme }) => theme.colors.tertiaryBackgroundColor} !important;
  }
`

const StyledFooter = styled.div`
  padding: 24px 0px;
`

const StyledMemberContainer = styled.div`
  
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;

  > div {
    display: flex;
    gap: 12px;

    p {

    }

    // button.MuiButtonBase-root.MuiButton-root {
    //   min-width: 36px !important;
    //   height: 36px !important;
    //   width: 36px !important;
    // }
    button.MuiButtonBase-root:not(.MuiIconButton-root) {
      border: none !important;
      color: white !important;
      background-color: ${({ theme }) => theme.colors.tertiaryBackgroundColor} !important;
    }
  }
`
const StyledMembers = styled.div`
  height: 200px;
  overflow-y: scroll;
`


const StyledDividerWrapper = styled.div`
  margin: 0px -24px;
`
export {
  StyledContent,
  StyledInputWrapper,
  StyledFooter,
  StyledMemberContainer,
  StyledMembers,
  StyledDividerWrapper,
}

export default StyledContainer;
