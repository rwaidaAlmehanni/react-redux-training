import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { id, title, quantity, total, price } = props.item;
  const handleAddItem = () => { 
    dispatch(cartActions.addItem(props.item))
  } 
  const handleRemoveItem = () => {
    dispatch(cartActions.removeItem(props.item))
  }

  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total?.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price?.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={ handleAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
