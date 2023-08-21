'use client'
import Header from "@/components/Header";
import useSiteContext from "../Hooks/useSiteContext";
import ProductsColumn from "@/components/ProductsColumn";
import { Navigation, Pagination }from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Router } from 'next/router'
import ProductPreview from "@/components/ProductPreview";

export default function Store()
{
    const {products} = useSiteContext()
    return(
        <div className="">
            <Header />
            <div className="Store">
                <div className="line no-flex">
                    <h2>Tienda Online</h2>
                    <h2><span>Start Cell</span></h2>
                </div>
                <div className="Carousel">
                <div className="DesktopView">
                    <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={7}
                    navigation={true}
                    pagination={true}
                    >
                        {products.map((product, index)=>{
                            return(
                                index < products.length && index%2 == 0 &&
                                <SwiperSlide>
                                    <ProductsColumn 
                                        product1={
                                                products[index]} 
                                        product2={
                                            products.length%2 == 1 && index == products.length-1 ?
                                                undefined
                                            :
                                                products[index+1]
                                        } />
                                </SwiperSlide>
                            )
                        })}
                        {}
                    </Swiper>
                </div>
                <div className="MobileView mobileStore">
                    {products.map((product)=>(
                        <div className="smallCard">
                            <ProductPreview product={product}/>
                        </div>
                    ))}
                </div>
                
                </div>
            </div>
        </div>
    );
}