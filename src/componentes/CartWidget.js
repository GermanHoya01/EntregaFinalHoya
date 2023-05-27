import cart from "./Cart"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <Link to="/cart" className="material-icons" style={{ display: totalQuantity > 0 ? "block" : "none"}}>
            <p>{0}<span className="material-icons">shopping_cart</span></p>
            { totalQuantity}
        </Link>

    );
};

export default CartWidget;


