import { CartProvider } from '../../contexts';
import {Box} from '../../common/components'; 
import { LeftPanel, RightPanel } from '../../components';

export const ProductsPage = () => {
  return (
    <CartProvider>
      <Box display="flex" gap={4} justifyContent={'space-between'}
       paddingLeft={12} paddingRight={12}>
        
        <LeftPanel />
        <RightPanel />
      </Box>
    </CartProvider>
  );
};
