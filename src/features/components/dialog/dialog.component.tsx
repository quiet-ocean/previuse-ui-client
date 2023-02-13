/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Slide, Divider } from '@material-ui/core';
import StyledDialog, {
  StyledTitle, StyledDialogContent, StyledTitleText, StyledCloseButtonContainer
} from './dialog.styles';
import ButtonComponent from '../button/button.component';

// eslint-disable-next-line react/display-name
const Transition: any = React.forwardRef((props: any, ref) => (
  <Slide direction="up" ref={ref} {...props}>{props.children}</Slide>
));

export type MaxWidth = 'xs'
| 'sm'
| 'md'
| 'lg'
| 'xl'
| false;

export interface DialogProps {
  /** If true dialog will be rendered */
  open: boolean;
  /** A class name selector to add to the root element */
  className?: string;
  /** A call back to be called when dialog is closed */
  onClose: (e: React.SyntheticEvent, reason: 'backdropClick' | 'escapeKeyDown') => void;
  /** If true, the dialog stretches to maxWidth.
   * Notice that the dialog width grow is limited by the default margin. */
  fullWidth?: boolean;
  /** Text to be displayed at the top of the dialog */
  title?: string;
  /** Determine the max-width of the dialog. The dialog width grows
   * with the size of the screen.
   * Set to false to disable maxWidth. */
  maxWidth?: MaxWidth;
  /** Content of the dialog */
  content: string | JSX.Element;
  /** Content of sub-header */
  subHeader?: string | JSX.Element;
  /** if set to true, the dialog will take the whole screen size */
  fullScreen?: boolean;
}

export const DialogComponent: FC<DialogProps> = (props) => (
  <StyledDialog
    className={props.className}
    open={props.open}
    TransitionComponent={Transition}
    onClose={props.onClose}
    PaperProps={{ className: 'root' }}
    BackdropProps={{ className: 'backdrop' }}
    maxWidth={props.maxWidth}
    fullWidth={props.fullWidth}
    fullScreen={props.fullScreen}
  >
    <StyledTitle>
      <StyledTitleText>{props.title}</StyledTitleText>

      <StyledCloseButtonContainer>
        <ButtonComponent
          onClick={props.onClose as any}
          theme="clear"
          type="icon"
        />
      </StyledCloseButtonContainer>

    </StyledTitle>

    <Divider />
    {
      props.subHeader
      && (
        <div>
          <div>
            {props.subHeader}
          </div>
          <Divider />
        </div>
      )
    }

    <StyledDialogContent>
      {props.content}
    </StyledDialogContent>

  </StyledDialog>
);

DialogComponent.defaultProps = {
  maxWidth: 'sm',
  fullWidth: true,
  fullScreen: false
};

export default DialogComponent;
