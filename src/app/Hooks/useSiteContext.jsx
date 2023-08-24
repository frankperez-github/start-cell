import { useEffect, useState } from "react"
import {db} from "@/app/firebase.config"
import {getDocs, collection } from "firebase/firestore"

export default function useSiteContext()
{
    const [products, setProducts] = useState([])
    const [clients, setClients] = useState([])
    async function fetch(){

        console.log("fetching")
        const productsRef = collection(db, 'products')
        const clientsRef = collection(db, 'clients')
        const productsSnapshots = await getDocs(productsRef)
        const clientsSnapshots = await getDocs(clientsRef)
    
        const productsDocs = productsSnapshots.docs.map((doc)=>{
            const data = doc.data()
            data.id = doc.id
            return data
        })
        const clientsDocs = clientsSnapshots.docs.map((doc)=>{
            const data = doc.data()
            data.id = doc.id
            return data
        })
        setProducts(productsDocs)
        setClients(clientsDocs)

    }

    useEffect(()=>{
        ()=>fetch()
    })
    
    return {clients, products}
}