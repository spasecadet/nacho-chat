/* global firebase */
import { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// Custom JS
import { colors, calculateColorFromString } from '../services/colors';

// Custom components
import Textarea from './Textarea';
import PrimaryButton from './PrimaryButton';

/**
 * Add a new message to the chat.
 *
 * ex:  <MessageEntry></MessageEntry>
 */
function MessageEntry() {
  const [message, setMessage] = useState('');

  /**
   * Set message content on change on the message field.
   * 
   * @param {Event} e Event from entering text into the message field.
   */
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  /**
   * On pressing enter key send the message the user has entered.
   * 
   * @param {Event} e Event from hitting a key while focused on input/textarea
   */
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      sendMessage();
    }
  };

  /**
   * Add new message to firestore and empty message field if message add was successful.
   */
  const sendMessage = async () => {
    const name = firebase.auth().currentUser.displayName;

    try {
      await firebase.firestore().collection('messages').add({
        name: name,
        text: message,
        accountColor: `#${calculateColorFromString(name)}`,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      setMessage('');
    } catch(err) {
      // TODO: Log this error?  Depending on error show something to user?
      // Not seeing any errors during development unless you're disconnected from the internet.
    };
  }

  return (
    <div css={messageEntryContainer}>
      <div css={messageInputContainer}>
        <Textarea 
          id="message"
          placeholder='Message'
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleEnter}
        />
      </div>
      <div css={sendMessageBtnContainer}>
        <PrimaryButton onClick={sendMessage}>
          Send
        </PrimaryButton>
      </div>
    </div>
  );
}

// Styles
const messageEntryContainer = css`
  display: flex;
  box-shadow: 0px 0px 3px ${colors.inputBorder};
  padding: 10px;
  align-items: flex-end;
`;

const messageInputContainer = css`
  flex: 1 0 auto;
  padding-right: 20px;
`;

const sendMessageBtnContainer = css`
  flex: 0 0 0;
`;

export default MessageEntry;
