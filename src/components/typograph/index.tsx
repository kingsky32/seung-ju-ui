import OriginTypograph from './Typograph';
import Link from './Link';

export type TypographProps = typeof OriginTypograph & {
  Link: typeof Link;
};

const Typograph = OriginTypograph as TypographProps;
Typograph.Link = Link;

export default Typograph;
