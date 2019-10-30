/* global firebase */
import { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// Custom JS
import { colors, calculateColorFromString } from '../services/colors';

// Custom components
import ChooseImageButton from './ChooseImageButton';
import PrimaryButton from './PrimaryButton';
import Textarea from './Textarea';

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
   * Add new message to firestore.  Message may be either text entered in text 
   * field or an image. Empty message field if a text message and not an image 
   * was added and message add was successful in firestore.
   */
  const sendMessage = async (e) => {
    if (!e.target.files && !message) {
      return;
    }
    const selectedFile = e.target.files ? e.target.files[0] : null;
    const name = firebase.auth().currentUser.displayName;
    
    try {
      const arrayBuffer = selectedFile ? await selectedFile.arrayBuffer() : null;
      const base64Text = arrayBuffer ? _arrayBufferToBase64(arrayBuffer) : null;
      await firebase.firestore().collection('messages').add({
        name: name,
        text: base64Text || message,
        hasImage: !!base64Text,
        accountColor: `#${calculateColorFromString(name)}`,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      if (!base64Text) {
        setMessage('');
      }
    } catch (err) {
      console.log(err);
      // TODO: log error...
    }
    
  };

  function _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
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
        <div css={chooseImageBtnContainer}>
          <ChooseImageButton handleChange={sendMessage}/>
        </div>
        <div>
          <PrimaryButton css={sendBtnContainer} onClick={sendMessage}>
            Send
          </PrimaryButton>
        </div>
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
  display: flex;
  align-items: center;
`;

const chooseImageBtnContainer = css`
  flex: 0 0 0;
  margin-right: 10px;
`;

const sendBtnContainer = css`
  flex: 0 0 0;
`;

export default MessageEntry;
