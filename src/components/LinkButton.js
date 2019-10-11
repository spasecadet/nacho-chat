/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/**
 * Button styled to look like a link, has a textColor prop to set link color.  
 * All other props are passed through.
 * 
 * ex: <LinkButton textColor='#ffffff' onClick={doSomething}>Click Me</LinkButton>
 * 
 * @param {Object} props 
 */
function LinkButton(props) {
  const { textColor, ...others } = props;

  return (
    <button 
      css={css`
        ${button};
        color: ${textColor};
      `}
      {...others}
    >
      {props.children}
    </button>
  );
}

// Styles
const button = css`
  border: 0;
  font-size: 16px;
  background: none;
  padding: 0;
  text-decoration: underline;
  cursor: arrow;
`;

export default LinkButton;
