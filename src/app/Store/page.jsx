'use client'
import DesktopHeader from "@/components/DesktopHeader";
import useSiteContext from "../Hooks/useSiteContext";
import ProductsColumn from "@/components/ProductsColumn";
import { Navigation, Pagination }from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Router } from 'next/router'

export default function Store()
{
    const {products} = useSiteContext()
    return(
        <div className="">
            <DesktopHeader />
            <div className="Store">
                <h2>Tienda Online Start Cell</h2>
                <div className="Carousel">
                <Swiper
                modules={{Navigation, Pagination}}
                slidesPerView={7}
                navigation={{clickable: true}}
                pagination={{clickable: true}}
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
            </div>
        </div>
    );
}