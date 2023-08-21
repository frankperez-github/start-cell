'use client'

import Header from '@/components/Header'
import ProductPreview from '@/components/ProductPreview'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation, Pagination }from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Router } from 'next/router'
import useSiteContext from './Hooks/useSiteContext'

export default function Home() {
  const {products} = useSiteContext()
  const handleID=()=>
  {
    const Id = document.getElementById("inputID").value
    var result = products.filter(product=>product.id === Id)
    if(result.length == 0)
    {
      window.alert("Id no encontrado")
    }
    else
    {
      window.location = `Status/${Id}`
    }
  }

  return (
    <main>
      <Header />
      <div className="mainSection">
        <div className="MobileView mobileMain">
          <div className="logoBackgr">
            <Image src="/Logo.svg" fill className='image'/>
          </div>
        </div>
        <div className="infoCard">
          <div className="backgrImg">
            <Image src="/backgr.svg" fill className='image'/>
          </div>
          <p>En nuestro taller de reparaciones ofrecemos <b>soluciones rápidas</b> y efectivas para cualquier problema que presente su dispositivo, ya sea Apple, Samsung u otras marcas.</p>
          <br />
          <br />
          <p>Garantizamos un servicio honesto y de <b>calidad</b>, equipados con la última tecnología en micro soldadura.</p>
          <br />
          <br />
          <p>También podemos ayudarte con productos adicionales para complementar tu dispositivo.Confía en nuestra <b>experiencia</b> para recuperar elfuncionamiento óptimo de tu dispositivo</p>
        </div>
        <div className="workStatus">
          <div className="header">
            <div className="logo">
              <Image src="/whiteLogo.svg" fill className='image'/>
            </div>
          </div>
          <div className="corpus">
            <h2>Ingresa tu ID</h2>
            <p>Para conocer el estado de reparación de tu dispositivo</p>
            <input type="text" id="inputID"/><br />
            <button onClick={handleID}>Aceptar</button>
          </div>
        </div>
        <div className="storePreview">
          <div className="title">
            <div className="line">
              <h2>Tienda Online</h2>
              <h2><span>Start Cell</span></h2>
            </div>
            <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={2}
            navigation={true}
          >
            {products.map(product=>(
              <SwiperSlide className='slide'><ProductPreview product={product}/></SwiperSlide>
            ))}
          </Swiper>
            <button onClick={()=>window.location = "Store"} className='secondaryButton goToStore'>Ir a la tienda</button>
          </div>
        </div>
      </div>
    </main>
  )
}
