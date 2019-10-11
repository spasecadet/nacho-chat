/* global firebase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// Custom components
import Message from './Message';

/**
 * Display a list of messages received from firestore and new messages
 *
 * ex:  <MessageList></MessageList>
 *
 */
function MessageList() {
  const [uiMessages, setUiMessages] = useState([]);
  let messagesEnd;

  /**
   * Create the jsx messages and update uiMessages.
   * 
   * @param {[Object]} newMessages List of new message objects
   */
  const createMessagesForUi = (newMessages) => {
    if (newMessages.length > 0) {
      const messages = newMessages.map((message) => {
        return (
          <li key={message.id}>
            <Message
              displayName={message.name}
              message={message.text}
              iconColor={message.accountColor}
              timestamp={message.timestamp}>
            </Message>
          </li>
        );
      });
      setUiMessages((existingMessages) => [...existingMessages, ...messages]);
    }
  };
  
  // On mount create a subscriber to the last x number of messages.
  useEffect(() => {
    // Only show last 100 messages.  If this were for a real company I'd want to implement 
    // lazy loading or something to shouw more messages as a user scrolls.
    const messagesToShow = 100;

    const query = firebase.firestore()
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .limit(messagesToShow);

    // The last 100 messages are being watched. As users add more messages the last 100 messages 
    // will change.  If lazy loading were implemented I'd have to see at what point it became a 
    // performance burden to watch x number of messages and maybe implement a rolling 100 messages 
    // that were being watched if users scrolled or think about other solutions.
    const messagesMap = {};
    const subscriber = query.onSnapshot((snapshot) => {
      const newMessagesList = []
      
      // Process all changes to watched messages
      snapshot.docChanges().forEach((change) => {
        const msgId = change.doc.id;
        if (!messagesMap[msgId]) {
          const message = change.doc.data();
          if (message.timestamp === null) {
            // timestamp is null because it was just created by _this_ user and has come from cache so 
            // there is no server timestamp yet - timestamp will always exist when coming from the db.
            message.timestamp = firebase.firestore.Timestamp.now();
          }
          message.id = msgId;
          messagesMap[msgId] = true;
          newMessagesList.unshift(message);
        }
      });
      
      createMessagesForUi(newMessagesList);
    });

    return subscriber; // unsubscribe from changes to messages.
  }, []);

  // Scroll to the bottom of the messages list when there's a new message.
  useEffect(() => {
    if (uiMessages.length > 0) {
      messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  }, [uiMessages, messagesEnd]);

  return (
    <div css={listContainer}>
      <ul css={list}>
        {uiMessages}
      </ul>
      <div ref={(el) => { messagesEnd = el }}></div>
    </div>
  );
}

// Styles
const listContainer = css`
  flex: 1 0 0;
  overflow-y: scroll;
`;

const list = css`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1 0 0;
`;

export default MessageList;
