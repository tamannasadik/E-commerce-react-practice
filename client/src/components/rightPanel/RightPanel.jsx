import { useContext } from 'react';
import {Box, Button, Stack, Typography} from '../../common/components';
import { Cart } from '../cart';
import { CartContext } from '../../contexts';

export function RightPanel() {
const {cart} = useContext(CartContext);

  return (
    <Stack>
      <Typography variant='h5'>Cart</Typography>
      <Box>
      <Button variant="contained" disabled={!cart.length}>CheckOut</Button>
      </Box>
      <Box>
        <Cart />
      </Box>
    </Stack>
  );
}
