import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../firebase"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {

    setIsLoading(true);

    const docRef = doc(db, "productos" , id)

    getDoc(docRef)

        .then(response => {

            console.log(response.data())
        
        const data = response.data()
        
        const productAdapted = { id: response.id, data }
        
        setProduct(productAdapted)
        
        setIsLoading(false)
        
        })
        
        .catch (error => {

    console.log(error)

})
        
        }, [id])

return (
    <div>
        {isLoading ? (
            <div className="d-flex justify-content-center">
                <Spinner animation="grow" className="m-5" />
            </div>
        ) : (
            <>
                <ItemDetail {...product} />
            </>
        )}
    </div>
);
};

export default ItemDetailContainer;

