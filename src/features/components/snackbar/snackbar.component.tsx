import React, { FC, ReactNode } from 'react';
import SuccessIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/ReportProblem';
import { Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import StyledContainer, { StyledText, StyledIcon, StyledContent } from './snackbar.styles';
import { SnackBarType } from '../../../common/models';
import ButtonComponent from '../button/button.component';

const TYPE_TO_ICON = {
  success: <SuccessIcon />,
  error: <ErrorIcon />
};

export interface SnackBarProps {
  /** Show snack bar */
  open: boolean;
  /** A function to be called on close event. If bar closed on backdrop a second
   * argument will be injected to the call back - string 'clickaway'
   */
  onClose: () => void;
  /** The message to be displayed */
  message: string | Element;
  /** Determines the icon and color */
  type?: SnackBarType;
  /** Hide the snack bar after Milliseconds */
  autoHideDuration?: number;
  /** Snack bar position. */
  anchorOrigin?: {
    vertical: 'top' | 'bottom',
    horizontal: 'right' | 'center' | 'left'
  };
}

export const SnackBarComponent: FC<SnackBarProps> = (props) => (
  <StyledContainer>
    <div>
      <Snackbar
        autoHideDuration={props.autoHideDuration}
        anchorOrigin={props.anchorOrigin}
        open={props.open}
        onClose={props.onClose}
        message={(
          <StyledContent>
            <StyledIcon className={props.type as unknown as string}>
              <div>{TYPE_TO_ICON[props.type as SnackBarType]}</div>
            </StyledIcon>
            <StyledText>{props.message as ReactNode}</StyledText>
          </StyledContent>
        )}
        action={(
          <ButtonComponent
            className="close-snackbar"
            type="icon"
            iconElement={<CloseIcon />}
            onClick={props.onClose}
          />
        )}
      />
    </div>
  </StyledContainer>
);

SnackBarComponent.defaultProps = {
  type: 'success',
  anchorOrigin: { vertical: 'top', horizontal: 'center' }
};

export default SnackBarComponent;
