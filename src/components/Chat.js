/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// Custom components
import MessageList from './MessageList';
import MessageEntry from './MessageEntry';

/**
 * Displays chat components - list of messages and the message entry component.
 *
 * ex:  <Chat></Chat>
 */
function Chat() {
  return (
    <div css={chatContainer}>
      <MessageList css={messagesList}></MessageList>
      <MessageEntry css={messageEntry}></MessageEntry>
    </div>
  );
}

// Styles
const chatContainer = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 1 0 0;
`;

const messagesList = css`
  flex: 1 0 auto;
`;

const messageEntry = css`
  flex: 0 0 auto;
`;

export default Chat;
