/* eslint-disable @typescript-eslint/no-var-requires */
const { override } = require('customize-cra');

const rewireStyledComponents = require('react-app-rewire-styled-components');

// eslint-disable-next-line no-undef
module.exports = override(
  rewireStyledComponents
);
