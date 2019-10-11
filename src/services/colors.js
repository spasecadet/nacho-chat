const colors = {
  primary: '#02D4DA',
  primaryHover: '#02abb0',
  primaryContrastText: '#ffffff',
  secondary: '#FE9440',
  secondaryContrastText: '#ffcc00',
  tertiary: '#8AC802',
  quaternary: '#FF309E',
  quinary: '#FED035',
  background: '#413F40',
  backgroundContrastText: '#ffffff',
  divider: 'rgba(0, 0, 0, .1)',
  inputBorder: 'rgba(0, 0, 0, .3)',
  mutedText: 'rgba(0, 0, 0, .5)',
};

/**
 * Calculate a color based on a string.  Used to color icons for different users.
 * 
 * @param {String} stringToCalculate String used to calculate a color
 */ 
const calculateColorFromString = (stringToCalculate) => {
  return intToRGB(hashCode(stringToCalculate));
};

// https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
// Following two functions found on the interwebs.
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i) {
  const c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return '00000'.substring(0, 6 - c.length) + c;
}

export { colors, calculateColorFromString };
