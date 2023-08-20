'use client'

import DesktopHeader from '@/components/DesktopHeader'
import ProductPreview from '@/components/ProductPreview'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation, Pagination }from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [products, setProducts] = useState([{
    "id":"1",
    "title": "Iphone 13 Max",
    "image": "/preview.svg",
    "description": "esta bueno"
  },
  {
    "id":"2",
    "title": "Iphone 13 Max",
    "image": "/preview.svg",
    "description": "esta bueno"
  },
  {
    "id":"1",
    "title": "Iphone 13 Max",
    "image": "/preview.svg",
    "description": "esta bueno"
  },
  {
    "id":"2",
    "title": "Iphone 13 Max",
    "image": "/preview.svg",
    "description": "esta bueno"
  }])
  return (
    <main>
      <DesktopHeader />
      <div className="mainSection">
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
            <input type="text" name="workID"/><br />
            <button>Aceptar</button>
          </div>
        </div>
        <div className="storePreview">
          <div className="title">
            <h2><spam>Tienda Online</spam> Start Cell</h2>
            <Swiper
            modules={{Navigation, Pagination}}
            spaceBetween={0}
            slidesPerView={2}
            navigation={{clickable: true}}
            pagination={{clickable: true}}
          >
            {products.map(product=>(
              <SwiperSlide><ProductPreview product={product}/></SwiperSlide>
            ))}
          </Swiper>
            <button className='secondaryButton'>Ir a la tienda</button>
          </div>
        </div>
      </div>
    </main>
  )
}
