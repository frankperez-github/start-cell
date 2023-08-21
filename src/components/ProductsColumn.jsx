import ProductPreview from "./ProductPreview";

export default function ProductsColumn({product1, product2})
{
    return(
        <div className="ProductsColumn">
            <ProductPreview product={product1}/>

            {product2 &&
                <ProductPreview product={product2}/>
            }
        </div>
    );
}