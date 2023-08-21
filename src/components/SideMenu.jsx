import Image from "next/image";
import Link from "next/link";

export default function SideMenu({setMenu, menu})
{
    return(
        <div className="Menu" id="menu" style={{display: menu}}>
            <div className="close" onClick={()=>(setMenu("none"))}>
                <Image alt="" src="/back.svg" fill className="image"/>
            </div>
            
            <Link href="/">
                <h4>Inicio</h4>
            </Link>

            <Link href="/Store">
                <h4>Tienda</h4>
            </Link>
            
            <Link href="/Contact">
                <h4>Contacto</h4>
            </Link>

        </div>
    )
}