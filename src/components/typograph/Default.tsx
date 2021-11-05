import React from 'react';
import styled from 'styled-components';

export interface DefaultStyleProps {
  size?: sizeType;
  textAlign?: textAlignType;
}

export interface DefaultProps extends DefaultStyleProps, React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

const Container = styled.p<DefaultStyleProps>`
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`;

const Default: React.FC<DefaultProps> = ({ textAlign, children, ...props }) => (
  <Container textAlign={textAlign} {...props}>
    {children}
  </Container>
);

export default Default;
