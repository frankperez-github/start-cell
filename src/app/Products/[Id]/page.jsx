'use client'
import useSiteContext from "@/app/Hooks/useSiteContext";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Product()
{
    const{Id} = useParams()
    const {products} = useSiteContext()
    const product = products.find(el=>el.id===Id)
    return(
        <div className="">
            <Header />
            <div className="Product">
                <div className="Store">
                    <h2>Tienda Online Start Cell</h2>
                </div>
                <div className="Info">
                    <div className="Picture">
                        <Image src={product.image} fill className="image"/>
                    </div>
                    <div className="Inform">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <div className="buttons">
                            <Link href="https://wa.me/+5354025911">
                                <button className="primaryButton buyButton" style={{backgroundColor:`${product.button_color}`, borderColor:`${product.button_color}`}}>Me interesa</button>
                            </Link>
                            <Link href="/Store">
                                <button className="productButt" style={{color:`${product.button_color}`, borderColor:`${product.button_color}`}}>Ver Otros</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}