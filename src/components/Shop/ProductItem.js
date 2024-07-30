import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { id, title, price, description, quantity } = props;

  const handleAddCard = () => { 
    dispatch(cartActions.addItem(props))
  }

  return (
    <li className={classes.item} key={id}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddCard}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
