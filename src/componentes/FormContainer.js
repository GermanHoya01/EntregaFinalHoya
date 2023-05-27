import { useEffect, useState, useContext } from "react";
import { addOrderToDB } from "../utils";
import CartContext from "../contexts/CartContext";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const FormContainer = () => {

    const { cart, clearCartItems } = useContext(CartContext)

    const navigate = useNavigate()

    const [disableState, setDisableState] = useState(true)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: ''
    });

    const handleStateChange = () => {
        if (cart.length < 1 || !formData.firstName || !formData.lastName || !formData.phone || !formData.email || formData.email != formData.confirmEmail) {
            setDisableState(true)
            return
        }
        setDisableState(false)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisableState(true)
        const orderId = await addOrderToDB({ ...formData, productsPurchased: cart })
        if (orderId) {
            toast.success("Your order has been placed succesfully.")
            clearCartItems()
            navigate(`/successCheckout/${orderId}`)
        }
    };

    useEffect(() => {
        handleStateChange()
    }, [formData])

    return (
        <form onSubmit={handleSubmit} className="form-input mt-4 mb-4 ml-4 mr-4 px-10 py-3 rounded">
            <h2 className="text-3xl font-bold mb-4">User details Form</h2>
            <div className="mt-4">
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div className="mt-4">
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="mt-4">
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="mt-4">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mt-4">
                <label htmlFor="confirmEmail">Confirm Email:</label>
                <input
                    type="email"
                    id="confirmEmail"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                />
            </div>
            <button className="mt-4 mb-4 rounded border-4 hover:bg-green-500" type="submit" disabled={disableState}>Realizar Compra</button>
            <Toaster />
        </form>
    )
}

export default FormContainer