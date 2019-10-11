/* global firebase */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// Custom JS
import { colors } from '../services/colors';

// Custom components
import PrimaryButton from './PrimaryButton';

/**
 * Displays message and button to sign in.
 *
 * ex: <Signin></Signin>
 */
function Signin() {

  /**
   * Signs user in using their google account and a popup provided by firebase.  
   * I used google auth just for speed of getting something up and running.
   */
  const signin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <div css={signinContainer}>
      <div css={signinMessage}>Sign in with your Google account to begin chatting!</div>
      <div css={btnContainer}>
        <PrimaryButton onClick={signin}>Sign In</PrimaryButton>
      </div>
    </div>
  );
}

// Styles
const signinContainer = css`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const signinMessage = css`
  margin-bottom: 20px;
  font-size: 18px;
  color: ${colors.quaternary};
`;

const btnContainer = css`
  align-self: center;
  flex: 0 0 0;
`;

export default Signin;
