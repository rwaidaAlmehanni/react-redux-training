import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sendData, fetchData } from './store/cart-actions'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

let isInitialRender = true
function App() {
  const dispatch = useDispatch()
  const isCartVisible = useSelector(state => state.ui.isCartOpen)
  const cart = useSelector(state => state.cart)

  useEffect(() => { 
     dispatch(fetchData())
  },[])

  useEffect(() => { 
    if (isInitialRender) {
      isInitialRender = false
      return
    } else {
      dispatch(sendData(cart))
    }
  }, [cart])
  
  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
