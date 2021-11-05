import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import themes from '../../styles/themes';

interface UIProviderProps {
  theme?: DefaultTheme;
  children?: React.ReactNode;
}

const UIProvider: React.FC<UIProviderProps> = ({ theme, children }) => (
  <ThemeProvider theme={{ ...themes, ...theme }}>{children}</ThemeProvider>
);

export default UIProvider;
