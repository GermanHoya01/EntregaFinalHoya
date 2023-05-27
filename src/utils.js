import { db } from "./firebase"
import { addDoc, collection, getDocs, getDoc, query, where, doc } from "firebase/firestore"

export const getProducts = async (categoryId) => {
    try {
        if (categoryId) {
            const productsCollection = collection(db, "products")
            const filter = query(productsCollection, where("category", "==", categoryId))
            const consult = await getDocs(filter)
            const parsedResponse = consult.docs.map((document) => {
                const product = {
                    id: document.id,
                    ...document.data()
                }
                return product
            })
            return parsedResponse
        } else {
            const productsCollection = collection(db, "products")
            const consult = await getDocs(productsCollection)
            const parsedResponse = consult.docs.map((document) => {
                const product = {
                    id: document.id,
                    ...document.data()
                }
                return product
            })
            return parsedResponse
        }

    } catch (error) {
        console.log(error)
    }

}

export const getProductDetail = async (productId) => {
    try {
        const docRef = doc(db, "products", productId);
        const document = await getDoc(docRef);
        return {
            id: document.id,
            ...document.data()
        }
    } catch (error) {
        console.log(error)
    }
}

export const getOrderDetail = async (orderId) => {
    try {
        const docRef = doc(db, "orders", orderId);
        const document = await getDoc(docRef);
        if (document.exists()) {
            return {
                id: document.id,
                ...document.data()
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const addOrderToDB = async (orderDetails) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), {
            createdAt: new Date(),
            status: "generada",
            ...orderDetails
        });
        return docRef.id
    } catch (error) {
        console.log(error)
    }
}