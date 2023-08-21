import clients from "../../../public/clients.json"
import products from "../../../public/products.json"

export default function useSiteContext()
{
    return {clients, products}
}