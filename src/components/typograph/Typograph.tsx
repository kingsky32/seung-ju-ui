import React from 'react';
import styled from 'styled-components';

export interface DefaultProps extends TypographProps, React.HTMLAttributes<HTMLParagraphElement> {}

const Container = styled.p<TypographProps>`
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  font-size: ${({ theme, size }) => (typeof size === 'number' ? `${size}rem` : theme.size[size ?? 'normal'])};
  font-weight: ${({ theme, weight }) => (typeof weight === 'number' ? weight : theme.weight[weight ?? 'regular'])};
  line-height: 1.4;
`;

const Typograph: React.ForwardRefRenderFunction<HTMLParagraphElement, DefaultProps> = ({ children, ...props }, ref) => (
  <Container ref={ref} {...props}>
    {children}
  </Container>
);

export default React.forwardRef(Typograph);
