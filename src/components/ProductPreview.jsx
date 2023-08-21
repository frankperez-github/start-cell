import Image from "next/image";
import Link from "next/link";

export default function ProductPreview({product})
{
    return(
        <div className="PreviewCard">
            <div className="previewImage">
                <Image src={product.image} fill className="image"/>
            </div>
            <p>{product.title}</p>
            <Link href={`Products/${product.id}`}>
                <button className="primaryButton" style={{backgroundColor: `${product.button_color}`}}>Ver más</button>
            </Link>
        </div>
    );
}