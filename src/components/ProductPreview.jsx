import useSiteContext from "@/app/Hooks/useSiteContext";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductPreview({product, id})
{
    return(
        <div className="PreviewCard">
            <div className="previewImage">
                <Image alt="" src={product.image} fill className="image"/>
            </div>
            <p>{product.title}</p>
            <Link href={`Products/${product.id}`}>
                <button className="primaryButton" style={{backgroundColor: `${product.button_color}`}}>Ver más</button>
            </Link>
        </div>
    );
}