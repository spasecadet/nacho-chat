/* global firebase */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// Custom JS
import { colors } from '../services/colors';

// Custom components
import LinkButton from './LinkButton';

/**
 * Page header with logo, user's name and sign out.
 *
 * ex: <Header displayName='Floopy Noopers'></Header>
 *
 * @param {Object} props
 */
function Header(props) {
  const { displayName = '' } = props;

  /**
   * Sign out of google account
   */
  const signout = () => {
    firebase.auth().signOut();
  }

  return (
    <header css={header}>
      <div css={logo}>
        <span css={nO}>N</span>
        <span css={a}>a</span>
        <span css={c}>c</span>
        <span css={h}>h</span>
        <span css={nO}>o</span>
        <span css={chat}> Chat</span>
      </div>
      {displayName &&
        <div css={user}>
          {displayName}
          <span css={middot}>&middot;</span>
          <LinkButton textColor={colors.backgroundContrastText} onClick={signout}>Sign out</LinkButton>
        </div>
      }
    </header>
  );
}

// Styles
const header = css`
  display: flex;
  height: 100px;
  background-color: ${colors.background};
  color: ${colors.backgroundContrastText};
  align-items: center;
  padding: 0 10px;
`;

const logo = css`
  flex: 1;
  font-size: 60px;
  font-family: 'Times New Roman', Times, serif;
`;

const nO = css`
  color: ${colors.primary};
`;

const a = css`
  color: ${colors.secondary};
`;

const c = css`
  color: ${colors.tertiary};
`;

const h = css`
  color: ${colors.quaternary};
`;

const chat = css`
  color: ${colors.quinary};
`;

const user = css`
  flex: 1;
  text-align: right;
`;

const middot = css`
  padding: 0 15px;
`;

export default Header;
