import React from 'react';
import styled from 'styled-components';

export interface DefaultProps extends InputProps, React.HTMLAttributes<HTMLInputElement> {}

const ExtendInput = styled.input``;

const Container = styled.div<InputProps>`
  ${ExtendInput} {
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.borderColor.default};
    color: ${({ theme }) => theme.color.default};
    font-size: 1.4rem;
    padding: 20px;
    &::placeholder {
      color: ${({ theme }) => theme.color.placeholder};
    }
  }
`;

const Input: React.ForwardRefRenderFunction<HTMLDivElement, DefaultProps> = ({ size, ...props }, ref) => (
  <Container ref={ref} size={size}>
    <ExtendInput {...props} />
  </Container>
);

export default React.forwardRef(Input);
