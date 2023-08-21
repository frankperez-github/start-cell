import DesktopHeader from "@/components/DesktopHeader";
import useSiteContext from "../Hooks/useSiteContext";
import ProductPreview from "@/components/ProductPreview";
import ProductsColumn from "@/components/ProductsColumn";

export default function Store()
{
    const {products} = useSiteContext()
    return(
        <div className="">
            <DesktopHeader />
            <div className="Store">
                <h2>Tienda Online Start Cell</h2>
                <div className="Carousel">
                    {products.map((product, index)=>{
                        return(
                            index < products.length - 1 && index%2 == 0?
                                <ProductsColumn product1={products[index]} product2={products[index+1]} />
                            :
                            <></>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}