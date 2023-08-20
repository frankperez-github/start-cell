import Image from "next/image";

export default function ProductPreview({product})
{
    return(
        <div className="PreviewCard">
            <div className="previewImage">
                <Image src={product.image} fill className="image"/>
            </div>
            <p>{product.title}</p>
            <button className="primaryButton">Ver más</button>
        </div>
    );
}