import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string,
    boxShadow: string,
    transitionRate: string,

    colors: {
      primaryWhite: string,
      primaryBackgroundColor: string,
      secondaryBackgroundColor: string,
      lighterBackgroundColor: string,
      tertiaryBackgroundColor: string,
      lightBackgroundColor: string,
      updatedValue: string,
      backdropBackgroundColor: string,
      primaryTextColor: string,
      secondaryTextColor: string,
      additionalTextColor: string,
      additionalTextColor2: string,
      additionalTextColor3: string,
      additionalTextColor4: string,
      additionalTextColor5: string,
      additionalTextColor6: string,
      errorColor: string,
      successColor: string,
      activeColor: string,
      naturalBackgroundColor: string,
      negativeColor: string,
      tertiaryTextColor: string,
      svgColor: string,
      additionalSvgColor: string,
      additionalSvgColor2: string,
      additionalSvgColor3: string,
      primaryIconColor: string,
      secondaryIconColor: string,
      primaryDark: string,
      markerBoxShadow: string,
      primaryBorder: string,
      secondaryBorderColor: string,
      tertiaryBorderColor: string,
      selectedMarkerBoxShadow: string,
      outlineColor: string,
      light: string,
      additionalLight: string,
      dark: string,
      gray: string,
      splitSquaresColor: string,
      tableLegendMainColor: string,
      legendBorder: string,
      primarySelectedBackgroundColor: string,
      secondaryTreeTextColor: string,
      navigationBorder: string,
      triangleColor: string,
      green: string,
      pending: string,
      commentBackgroundColor: string
    },

    spacing: {
      framePadding: string,
      smallPadding: string,
      mediumPadding: string
    },

    sizes: {
      fontSizeRegular: string,
      fontSizeSmall: string,
      fontSizeMedium: string,
      fontSizeExtraMedium: string,
      fontSizeLarge: string,
      iconSize: string,
      fullHeight: string,
      fullWidth: string,
      textBoxHeight: string,
      drawerWidth: string,
    },

    mixins: {
      positive: string,
      negative: string,
      natural: string,
      buttons: string,
      status: string
    }
  }
}
