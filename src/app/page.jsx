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
  const {clients, products} = useSiteContext()
  const handleID=()=>
  {
    const Id = document.getElementById("inputID").value
    var result = clients.filter(client=>client.id === Id)
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
    <>
      <Header />
      <main>
        <div className="mainSection">
          <div className="MobileView mobileMain">
            <div className="logoBackgr">
              <Image alt="" src="/Logo.svg" fill className='image'/>
            </div>
          </div>
          <div className="infoCard">
            <div className="backgrImg">
              <Image alt="" src="/backgr.svg" fill className='image'/>
            </div>
            <p>En nuestro taller de reparaciones ofrecemos <b>soluciones rápidas</b> y efectivas para cualquier problema que presente su dispositivo, ya sea Apple, Samsung u otras marcas.</p>
            <p>Garantizamos un servicio honesto y de <b>calidad</b>, equipados con la última tecnología en micro soldadura.</p>
            <p>También podemos ayudarte con productos adicionales para complementar tu dispositivo.Confía en nuestra <b>experiencia</b> para recuperar el funcionamiento óptimo de tu dispositivo</p>
          </div>
          <div className="workStatus">
            <div className="header DesktopView">
              <div className="logo">
                <Image alt="" src="/whiteLogo.svg" fill className='image'/>
              </div>
            </div>
            <div className="MobileView statusMobile">
              <h2>Estado de reparación de mi dispositivo</h2>
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
                <h2>Tienda Online<span> Start Cell</span></h2>
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

          <div className="contactSect MobileView">
            <p>Dirección del taller 1: Ave 35/ 118 y 120 #11815, Marianao.</p>
            <p>Dirección del taller 2: Calle 76/ 51 y 49 #4907</p>
            <p>Teléfono: <a href="tel:+53 54025911">+53 54025911</a></p>
          </div>
        </div>
        <div className="footer MobileView">
          <h2>Contacta con nosotros por tu red social favorita:</h2>
          <div className="contacts">
            <div className="contactHeader">
                <a href="https://instagram.com">
                    <Image alt="" src="/whiteInstagram.svg" fill className="image"/>
                </a>
            </div>
            <div className="contactHeader">
                <a href="https://facebook.com">
                    <Image alt="" src="/whiteFacebook.png" fill className="image"/>
                </a>
            </div>
            <div className="contactHeader">
                <a href="https://whatsapp.com">
                    <Image alt="" src="/whiteWhatsApp.svg" fill className="image"/>
                </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
