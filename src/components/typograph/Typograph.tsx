import React from 'react';
import styled from 'styled-components';

export interface DefaultProps extends TypographProps, React.HTMLAttributes<HTMLParagraphElement> {}

export default styled.p<TypographProps>`
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  font-size: ${({ theme, size }) => (typeof size === 'number' ? `${size}rem` : theme.fontSize[size ?? 'normal'])};
  font-weight: ${({ theme, weight }) => (typeof weight === 'number' ? weight : theme.weight[weight ?? 'regular'])};
  line-height: 1.4;
`;
