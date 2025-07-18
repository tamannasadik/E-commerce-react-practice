import {Stack} from '../../common/components';
import { Filter } from './Filter';
import { Products } from '../product';

export function LeftPanel() {
  return (
    <Stack spacing={2}>
      <Filter />
      <Products />
    </Stack>
  );
}
