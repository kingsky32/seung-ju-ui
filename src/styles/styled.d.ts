import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      default: '#333333';
      link: '#1E70CD';
      placeholder: '#CCCCCC';
      white: '#FFFFFF';
    };
  }
}
