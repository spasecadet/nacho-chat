/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Icon from '@material-ui/core/Icon';

// Custom JS
import { colors } from '../services/colors';

/**
 * Display a single chat message, intended to be used in a list.
 *
 * ex:  <Message 
 *        displayName='King Jellybean' 
 *        message='He's a monster!'
 *        timestamp={timestamp from firestore}
 *        iconColor='#ff4444'
 *      ></Message>
 *
 * @param {Object} props
 */
function Message(props) {
  const { displayName, message, timestamp, iconColor } = props;
  
  // Format the timestamp for display
  const formattedDate = new Date(timestamp.toDate()).toLocaleDateString('us-EN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  return (
    <div css={messageContainer}>
      <div css={iconContainer}>
        <Icon css={accountIcon} style={{ color: iconColor}}>account_circle</Icon>
      </div>
      <div css={messageAndNameContainer}>
        <div>{message}</div>
        <div css={displayNameContainer}>{displayName}<span css={middot}>&middot;</span>{formattedDate}</div>
      </div>
    </div>
  );
}

// Styles
const messageContainer = css`
  border-bottom: 1px solid ${colors.divider};
  padding: 10px;
  display: flex;
`;

const iconContainer = css`
  flex: 0 0 0;
  margin-right: 10px;
`;

const accountIcon = css`
  font-size: 30px;
`;

const messageAndNameContainer = css`
  flex: 1 0 0;
  margin-top: 3px;
`;

const displayNameContainer = css`
  color: ${colors.mutedText};
  font-size: 12px;
  margin-top: 10px;
`;

const middot = css`
  padding: 0 5px;
`;

export default Message;
