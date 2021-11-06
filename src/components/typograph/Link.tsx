import React from 'react';
import styled from 'styled-components';

export interface LinkProps extends Omit<TypographProps, 'textAlign'>, React.HTMLAttributes<HTMLAnchorElement> {}

export default styled.a<TypographProps>`
  font-size: ${({ theme, size }) => (typeof size === 'number' ? `${size}rem` : theme.fontSize[size ?? 'normal'])};
  font-weight: ${({ theme, weight }) => (typeof weight === 'number' ? weight : theme.weight[weight ?? 'regular'])};
  color: ${({ theme }) => theme.color.link};
`;
