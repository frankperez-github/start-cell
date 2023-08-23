import { useState } from "react"
import clients from "../../../public/clients.json"
import {db} from "@/app/firebase.config"
import {getDocs, collection, snapshotEqual, } from "firebase/firestore"

export default function useSiteContext()
{
    const [products, setProducts]=useState([])

    const productsRef = collection(db, 'products')
    getDocs(productsRef)
        .then((snapshot)=>
        {
            setProducts(snapshot.docs)
        })
    return {clients, products}
}