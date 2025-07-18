import React, { useContext } from 'react';
import { List, ListItem, ListItemAvatar,Avatar} from '../../common/components';
import { ImageIcon} from '../../common/icons';
import { CartContext } from '../../contexts';
import { CartItem } from './CartItem';

export const Cart = () => {
  const { cart, removeProductFromCart } = useContext(CartContext);

  return (
    <List sx={{minWidth: 360}}>
      {cart.map((cartItem) => (
        <ListItem key={cartItem.id}>
          <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
          <CartItem
            cartItem={cartItem}
            removeProductFromCart={removeProductFromCart}
          />
        </ListItem>
      ))}
    </List>
  );
};
