'use client'
import useSiteContext from '@/app/Hooks/useSiteContext';
import DesktopHeader from '@/components/DesktopHeader';
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
            <DesktopHeader />
            <div className="client">
                <div className="Left">
                    <h3>Hola! Su dispositivo está: </h3>
                    {client.status === "working" ?
                        <div className="statusRect" style={{backgroundColor: "#ff91001a"}}>
                            <div className="circle">
                                <Image src="/pendient.svg" fill className="image"/>
                            </div>
                            <h2>En Reparación</h2>
                        </div>
                        :
                        <div className="statusRect" style={{backgroundColor: "#04ba562f"}}>
                            <div className="circle">
                                <Image src="/ready.svg" fill className="image"/>
                            </div>
                            <h2>Listo para recoger</h2>
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
        </div>
    );
}