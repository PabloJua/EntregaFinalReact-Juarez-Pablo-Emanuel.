import { createContext, useState } from 'react'
export const CartContext = createContext();


const CartContextProvider = ({ children }) => {
    /*Envuelve toda la app de react, incluir en la app y meter adentro todos los componentes que van a usar ese contexto. Debe envolver a los componentes que van a usar sus servicios*/
    const [cart, setCart] = useState([])


    const addItem = (item, quantity) => {
        if (isInCart (item.index)) {
            let pos = cart.findIndex (x => x.index === item.index)
            cart[pos].quantity += quantity;
            setCart ([...cart]);
        } else {
            setCart ([...cart, {...item, quantity:quantity}]) /*... sirve para desparrarmar todos los elementos de un objeto o un array.*/
        }
     }

    const removeItem = (itemId) => {
        const items = cart.filter(item => item.index !== itemId); /*Filtro todos los prdouctos excepto por el Id indicado */
        setCart([...items]);

    }


    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.index === itemId); /* Some te devuelve te devuelve un true o false, te indica si esta el producto o no*/
                                                      /*Valida si existe un Producto con ese Id */                      
    }


    const cartTotalProductos = () => {
        return cart.reduce((accum, item) => accum += item.quantity, 0);
    }

    const cartTotalPagar = () => {
        return cart.reduce((accum, item) => accum += item.quantity * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotalProductos, cartTotalPagar}}>{/*Formas global de acceder a las funciones */}
            {children} {/*Todos los componentes hijos*/}
        </CartContext.Provider>
    )

}

export default CartContextProvider;

