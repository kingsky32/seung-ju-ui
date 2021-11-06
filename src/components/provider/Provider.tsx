import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import themes from '../../styles/themes';
import GlobalStyles from '../../styles/GlobalStyles';

interface UIProviderProps {
  theme?: DefaultTheme;
  children?: React.ReactNode;
}

const UIProvider: React.FC<UIProviderProps> = ({ theme, children }) => (
  <ThemeProvider theme={{ ...themes, ...theme }}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default UIProvider;
