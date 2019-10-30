/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// Custom JS
import { colors } from '../services/colors';

/**
 * Textarea styled for the app.  All props are passed through except label, which if it 
 * exists is used to create a label element.
 * 
 * TODO: If no label is passed in use the placeholder to create a hidden label for a11y.
 *
 * ex: <TextArea onChange={doSomething} />
 *
 * @param {Object} props
 */
function Textarea(props) {
  const { label = '', ...others } = props;

  return (
    <div css={textareaInputContainer}>
      {label && 
        <label>{label}</label>
      }
      <textarea
        css={textArea }
        {...others}
      ></textarea>
    </div>
  );
}

// Styles
const textareaInputContainer = css`
  flex: 1 0 auto;
`;

const textArea = css`
  resize: none;
  height: 80px;
  border: 0;
  border-bottom: 2px solid ${colors.inputBorder};
  font-size: 16px;
  width: 100%;
  &: hover, &: focus {
    border-bottom-color: ${colors.quaternary};
    outline: none;
  }
`;

export default Textarea;
