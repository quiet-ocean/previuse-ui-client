import { DefaultTheme } from 'styled-components';

const primaryBackgroundColor = '#ff3232';
const additionalTextColor = '#3e3e3e';
const primaryBorder = '#ccc';
const negativeColor = 'rgb(255, 255, 255)';
const naturalBackgroundColor = '#F9F9FB';
const additionalTextColor2 = '#bdbdbd';
const pending = '#F3B001';
const successColor = '#3dd88c';
const errorColor = '#f64f59';

const theme: DefaultTheme = {
  borderRadius: '5px',
  boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.16)',
  transitionRate: '225ms',

  colors: {
    primaryWhite: '#fff',
    primaryBackgroundColor,
    secondaryBackgroundColor: '#ce1026',
    lighterBackgroundColor: 'rgb(248, 249, 253)',
    tertiaryBackgroundColor: '#4723cd',
    lightBackgroundColor: '#f9f9f9',
    updatedValue: '#00bf0a',
    backdropBackgroundColor: 'rgba(187, 204, 221, 0.6)',
    primaryTextColor: '#333333',
    secondaryTextColor: '#4f4f4f',
    additionalTextColor,
    additionalTextColor2,
    additionalTextColor3: '#5831e9',
    additionalTextColor4: '#828282',
    additionalTextColor5: '#535767',
    additionalTextColor6: '#0d0000',
    errorColor,
    successColor,
    activeColor: '#f7a35c',
    naturalBackgroundColor,
    negativeColor,
    tertiaryTextColor: '#001446',
    svgColor: '#a7b2cf',
    additionalSvgColor: '#666666',
    additionalSvgColor2: 'rgba(0, 0, 0, 0.54)',
    additionalSvgColor3: '#797979',
    primaryIconColor: '#999999',
    secondaryIconColor: '#b7b7b7',
    primaryDark: '#1e1e1e',
    markerBoxShadow: '#d7d8db',
    primaryBorder,
    secondaryBorderColor: '#e0e0e0',
    tertiaryBorderColor: '#dfe1e9',
    selectedMarkerBoxShadow: '#5c9df5',
    outlineColor: '#d4d4d4',
    light: '#f2f2f2',
    additionalLight: 'rgba(255, 255, 255, 0.9)',
    dark: '#160A40',
    gray: '#949aaa',
    pending,
    splitSquaresColor: '#a6a6a6',
    tableLegendMainColor: '#898989',
    legendBorder: '#d8d8d8',
    primarySelectedBackgroundColor: '#e8f5ff',
    secondaryTreeTextColor: '#9b9b9b',
    navigationBorder: '#e3e3e3',
    triangleColor: '#5577dd',
    green: '#6FCF97',
    commentBackgroundColor: '#f8f8f8'
  },

  spacing: {
    framePadding: '32px',
    smallPadding: '8px',
    mediumPadding: '16px'
  },

  sizes: {
    fontSizeRegular: '12px',
    fontSizeSmall: '13px',
    fontSizeMedium: '14px',
    fontSizeExtraMedium: '16px',
    fontSizeLarge: '18px',
    iconSize: '28px',
    fullHeight: '100%',
    fullWidth: '100%',
    textBoxHeight: '38px',
    drawerWidth: '291px'
  },

  mixins: {
    positive: `
      &&:hover, && {
        color: #fff !important;
        background-color: ${primaryBackgroundColor};
      }
    `,
    negative: `
      && {
        color: ${additionalTextColor};
        text-transform: capitalize;
        border: 1px solid ${primaryBorder};
        background-color:  ${negativeColor}
      }
    `,
    natural: `
      && {
        color: ${additionalTextColor2};
        border: 1px solid ${additionalTextColor2};
        background-color: inherit;
        height: 40px;
        width: 40px;
        min-width: 40px;
        border-radius: 10px;
      }
    `,
    buttons: `
      button {
        border: 1px solid ${additionalTextColor2};
        min-width: 41px;
        height: 41px;
        border-radius: 13px;
        color: ${additionalTextColor2} !important;

        &.Mui-disabled {
          opacity: 0.5;
        }
    
        &:not(:last-child) {
          margin-right: 12px;
        }
    
        &.empty {
          border: none;
        }
      }
    `,
    status: `
      height: 41px;
      width: 191px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 12px;
      border-radius: 13px;
      color: #fff;
      font-size: 16px;
      width: 72px;
    `
  }
};

export const statusChips = (props: any) => {
  switch (props.status) {
    case 'Pending':
      return props.theme.colors.pending as string;

    case 'Approve':
      return props.theme.colors.successColor as string;

    case 'Decline':
      return props.theme.colors.errorColor as string;
  }
};

export default theme;