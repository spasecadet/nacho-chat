/* global firebase */
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// Custom components
import Chat from './components/Chat';
import Header from './components/Header';
import Signin from './components/Signin';

/**
 * Application
 *
 * ex:  <App/>
 */
function App() {
  const notInitialized = 'not initialized'
  const [user, setUser] = useState(notInitialized);

  /**
   * Once we've communicated with firebase to get the auth state of the user setUser 
   * to either the user or null which will control the display of different components.
   * 
   * @param {Object} usr 
   */
  const authStateObserver = (usr) => {
    if (!usr) {
      setUser(null);
    } else {
      setUser(usr);
    }
  }

  // On mount subscribe to the auth state.  When the user signs in or out we can change 
  // what's shown eg: chat vs signin components.
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(authStateObserver);
    return subscriber; // unsubscribe this observer on unmount
  }, []);

  return (
    <div css={app}>
      <Header displayName={user ? user.displayName : ''}></Header>
      {user !== notInitialized && // don't show signin/chat until we've tried to retrieve user
        <div css={contentContainer}>
          {user === null ?
            <Signin></Signin>
            :
            <Chat></Chat> 
          }
        </div>
      }
    </div>
  );
}

// Styles
const app = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const contentContainer = css`
  flex: 1 0 auto;
  justify-content: center;
  display: flex;
`;

export default App;
