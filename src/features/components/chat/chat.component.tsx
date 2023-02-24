import React, { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { Avatar, TextField, TextFieldProps } from '@material-ui/core';

import { WebSocketMessage } from '../../../common/models';
import { UserCreation } from '../../../swagger2Ts/interfaces';

import StyledContainer, {
  StyledWrapper,
  StyledInput,
  StyledMessages,
  StyledMessage,
  StyledSendButton
} from './chat.styles';

import { ReactComponent as SendIcon } from '../../../assets/images/send.svg';
import { Person } from '@material-ui/icons';

export interface ChatComponentProps {
  websocket: WebSocket;
  messages: WebSocketMessage[];
  user: UserCreation;
}

const ChatComponent: React.FC<ChatComponentProps> = (props) => {
  const [message, setMessage] = useState<string>('');
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.scrollTo(0, container.current.scrollHeight);
    }
  }, [props.messages])

  const onMessage: TextFieldProps['onChange'] = (e) => {
    setMessage(e.target.value)
  }

  const onSend = () => {
    if (message) {
      props.websocket.send(JSON.stringify({ message }));
      setMessage('');
    }
  }

  const onKeyDown: KeyboardEventHandler = (e) => {
    if (e.code === 'Enter') {
      onSend();
    }
  }

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledMessages ref={container}>
          {props.messages.map((msg, i) => {
            const user = msg.user || msg.user_message_sender;
            const email = user.email;
            const avatar = user.avatar;

            return (
              <StyledMessage
                isLoggedInUser={email === props.user.email}
                key={i}
              >
                {user.avatar ? (
                  <Avatar title={email} src={avatar} />
                ) : (
                  <Avatar title={email}><Person /></Avatar>
                )}
                <span>{msg.message}</span>
              </StyledMessage>
            )
          })}
        </StyledMessages>

        <StyledInput>
          <TextField
            placeholder='Write here ...'
            onChange={onMessage}
            onKeyDown={onKeyDown}
            value={message}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <StyledSendButton onClick={onSend}><SendIcon /></StyledSendButton>
              )
            }}
          />
        </StyledInput>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default ChatComponent;