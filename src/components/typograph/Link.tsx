import React from 'react';
import styled from 'styled-components';

export interface LinkProps extends Omit<TypographProps, 'textAlign'>, React.HTMLAttributes<HTMLAnchorElement> {}

const Container = styled.a<TypographProps>`
  font-size: ${({ theme, size }) => (typeof size === 'number' ? `${size}rem` : theme.size[size ?? 'normal'])};
  font-weight: ${({ theme, weight }) => (typeof weight === 'number' ? weight : theme.weight[weight ?? 'regular'])};
  color: ${({ theme }) => theme.color.link};
`;

const Link: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = ({ children, ...props }, ref) => (
  <Container ref={ref} {...props}>
    {children}
  </Container>
);

export default React.forwardRef(Link);
