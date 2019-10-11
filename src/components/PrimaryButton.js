/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// Custom JS
import { colors } from '../services/colors';

/**
 * Button styled to be the primary button for the app.  All props are passed through.
 * Component just isolates the button styles.
 *
 * ex: <PrimaryButton onClick={doSomething}>Click Me</PrimaryButton>
 *
 * @param {Object} props
 */
function PrimaryButton(props) {

  return (
    <button 
      css={button}
      {...props}
    >
      {props.children}
    </button>
  );
}

// Styles
const button = css`
  padding: 10px 20px;
  background: ${colors.primary};
  border: 0;
  border-radius: 4px;
  color: ${colors.primaryContrastText};
  font-size: 16px;
`;

export default PrimaryButton;
