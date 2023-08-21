'use client'
import useSiteContext from "@/app/Hooks/useSiteContext";
import DesktopHeader from "@/components/DesktopHeader";
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
            <DesktopHeader />
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
                            <button className="primaryButton" style={{backgroundColor:`${product.button_color}`}}>Me interesa</button>
                            <button className="productButt" style={{color:`${product.button_color}`, borderColor:`${product.button_color}`}}>Ver Otros</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}