import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setIsLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, "productos"), where("category", "==", categoryId))
            : collection(db, "productos");

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [categoryId]); 

    return (
        <div>
            <h1>{greeting}</h1>
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="grow" className="m-5" />
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
