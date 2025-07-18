import { useContext } from 'react';
import { 
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { CartContext } from '../../contexts';

export function ProductCard({ product }) {
  const { addProductToCart } = useContext(CartContext);

  const handleAddProductToCart = () => {
    addProductToCart(product);
  };

  return (
    <Card sx={{maxWidth: 300}}>
      <CardMedia
       sx={{ height:140, width: 300}}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dyT8FEm-Khi_NBX4-sYdtIUo8EOmxe62eQ&s"
        title={product.name}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
           <Typography variant="h5">${product.price}</Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button 
      variant="contained"
      startIcon ={<AddBoxIcon/>}
      onClick={handleAddProductToCart}>
        Add to Cart
      </Button>
      </CardActions>
      </Card>
  );
}
