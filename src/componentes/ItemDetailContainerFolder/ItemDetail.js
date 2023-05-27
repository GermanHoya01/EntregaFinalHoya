import { Container, Row, Col, Image } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, name, price
        };

        addItem(item, quantity);
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12} lg={6}>
                    <Image src={img} alt={name} thumbnail />
                </Col>
                <Col xs={12} lg={6}>
                    <h4 className="fs-4" style={{ color: "#212529" }}>
                        {name}
                    </h4>
                    <h5 className="fs-5" style={{ color: "#212529" }}>
                        ${price} - {stock} unidades disponibles
                    </h5>
                    <p style={{ color: "#51585e" }}>{description}</p>
                    <div className="d-flex justify-content-center mt-4">
                        {quantityAdded > 0 ? (
                            <Link to="../Cart.js">Terminar Compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemDetail;