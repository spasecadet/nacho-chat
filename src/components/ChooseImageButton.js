/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon from '@material-ui/core/Icon';

// Custom JS
import { colors } from '../services/colors';

/**
 * Button styled to be the primary button for the app.  All props are passed through.
 * Component just isolates the button styles.
 *
 * ex: <ChooseImageButton handleChange={doSomething} />
 *
 * @param {Object} props
 */
function ChooseImageButton({handleChange}) {

  return (
    <span>
      <label htmlFor='selectImage'><Icon css={imageIcon} style={{ color: colors.tertiary }}>add_photo_alternate</Icon></label>
      <input id='selectImage' css={selectImageBtn} type='file' accept="image/*" onChange={handleChange} />
    </span>
  );
}

// Styles
const selectImageBtn = css`
  position: absolute;
  left: -5000px;
  top: -5000px;
`;

const imageIcon = css`
  font-size: 30px;
`;

export default ChooseImageButton;
