type textAlignType = 'left' | 'center' | 'right';
type sizeType = 'extra-large' | 'large' | 'big' | 'normal' | 'small';
type weightType = 'thin' | 'extra-light' | 'light' | 'regular' | 'medium' | 'bold' | 'extra-bold' | 'heavy' | 'black';

interface TypographProps {
  size?: sizeType | number;
  weight?: weightType | number;
  textAlign?: textAlignType;
  children?: React.ReactNode;
}
