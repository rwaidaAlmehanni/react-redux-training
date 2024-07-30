import { cartActions } from './cart-slice'
export const sendData = (cart) => { 
    return (dispatch) => {
        async function sendRequest() { 
            const response = await fetch('https://test-953b1-default-rtdb.firebaseio.com/cart.json', { method: 'PUT', body: JSON.stringify(cart) })
            if (!response.ok) { 
                throw new Error('Fetching data failed.')
            }
             return await response.json()
        }
        try {
            const data = sendRequest()
            dispatch(cartActions.addItem(data))
        } catch (error) {
            console.log(error)
        }
     }

}

export const fetchData = () => { 
    return async (dispatch) => {
        async function fetchRequest() { 
            const response = await fetch('https://test-953b1-default-rtdb.firebaseio.com/cart.json')
            if (!response.ok) { 
                throw new Error('Sending cart data failed.')
            }
             return await response.json()
        }
        try {
            const data = await fetchRequest()
            dispatch(cartActions.replaceCart(data))
        } catch (error) {
            console.log(error)
        }
     }

}