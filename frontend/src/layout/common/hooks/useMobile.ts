import { useMediaQuery } from 'beautiful-react-hooks';
import { Breakpoint } from '../Breakpoints';

export function useMobile() {
  return !useMediaQuery(`(min-width: ${Breakpoint.Sm})`);
}
