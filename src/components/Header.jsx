'use client'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";

export default function Header ()
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

    const [menu,setMenu] = useState("none")

    return (
        <div className="Header">
            <div className="DesktopHeader">
                <div className="navbar">
                    <a href="/" id="Start">Inicio</a>
                    <a href="/Store" id="Store">Tienda</a>
                    <a href="/Contact" id="Contact">Contacto</a>
                </div>
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
            <div className="MobileHeader">
                <SideMenu setMenu={setMenu} menu={menu}/>
                <div className="burger" onClick={()=>setMenu("block")}>
                    <Image alt="" src="/burger.svg" fill className="image"/>
                </div>
            </div>
        </div>
    );
}