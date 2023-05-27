import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getOrderDetail } from "../../utils"

const SuccessCheckout = () => {

    const [order, setOrder] = useState(null)

    const [loading, setLoading] = useState(true)

    const params = useParams()

    useEffect(() => {
        getOrderDetail(params.id)
            .then((orderExistInDB) => {
                if (orderExistInDB) {
                    setOrder(orderExistInDB)
                }
            })
            .catch((error) => {
                console.log(error)
            })
        setLoading(false)
    }, [params, setOrder])

    return (
        <>
            {order && <h2>Gracias por su compra! su order ID es : {order.id} - {order.createdAt.toDate().toLocaleString("en-US")}</h2>}


            {!order && !loading && <h2>La orden no existe jaja salu2</h2>}

        </>
    )
}

export default SuccessCheckout