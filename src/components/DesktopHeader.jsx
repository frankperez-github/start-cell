'use client'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DesktopHeader ()
{
    const path = usePathname()
    useEffect(()=>
    {
        if(path == "/")
        {
            var nav = document.getElementById("Start")
        }
        else if (path == "/Store")
        {
            var nav = document.getElementById("Store")
        }
        else if (path == "/Contact")
        {
            var nav = document.getElementById("Contact")
        }
        if(nav !== undefined) 
        {
            nav.classList.add("selected")
        }
    },[])
    return (
        <div className="DesktopHeader">
            <div className="navbar">
                <a href="/" id="Start">Inicio</a>
                <a href="/Store" id="Store">Tienda</a>
                <a href="/Contact" id="Contact">Contacto</a>
            </div>
            <div className="contacts">
                <div className="contactHeader">
                    <a href="https://instagram.com">
                        <Image src="/whiteInstagram.svg" fill className="image"/>
                    </a>
                </div>
                <div className="contactHeader">
                    <a href="https://facebook.com">
                        <Image src="/whiteFacebook.png" fill className="image"/>
                    </a>
                </div>
                <div className="contactHeader">
                    <a href="https://whatsapp.com">
                        <Image src="/whiteWhatsApp.svg" fill className="image"/>
                    </a>
                </div>
            </div>
        </div>
    );
}