'use client'
import useSiteContext from '@/app/Hooks/useSiteContext';
import Header from '@/components/Header';
import Image from 'next/image';
import {useParams} from 'next/navigation'
import { useEffect } from 'react';

export default function Status()
{
    const {Id} = useParams()
    const {clients} = useSiteContext()
    const client = clients.filter(e=>e.id === Id)[0]
    return(
        <div className="">
            {
                client ?
            <>
            <Header />
            <div className="client">
                <div className="Left">
                    <h3>Hola!</h3><h3> Su dispositivo está: </h3>
                    {client.status === "working" ?
                        <div className="statusRect" style={{backgroundColor: "#ff91001a"}}>
                            <div className="circle">
                                <Image alt="" src="/pendient.svg" fill className="image"/>
                            </div>
                            <h3>En Reparación</h3>
                        </div>
                        :
                        client.status === "ready" &&
                        <div className="statusRect" style={{backgroundColor: "#04ba562f"}}>
                            <div className="circle">
                                <Image alt="" src="/ready.svg" fill className="image"/>
                            </div>
                            <h3>Listo para recoger</h3>
                        </div>
                    }
                </div>
                <div className="Right">
                    <h2>Detalles:</h2>
                    <div className="Information">
                        <div className="left">
                            <p>Cliente: {client.name}</p>
                            <p>Servicio: {client.service}</p>
                            <p>Dirección del taller: {client.location}</p>
                        </div>
                        <div className="right">
                            <p>Tipo de dispositivo: {client.dispositive}</p>
                            <p>Fecha de ingreso: {client.in_date}</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
            :
            <h2>Loading...</h2>
            }
        </div>
    );
}