import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay Items en el Carrito</h1>
                <Link to="/">Productos</Link>   
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h2>Total: ${total}</h2>
            <button onClick={() => clearCart()}>Vaciar Carrito</button>
            <Link to="/checkout">Checkout</Link>
        </div>
    )    
}

export default Cart
