import Image from "next/image";

export default function DesktopHeader ()
{
    return (
        <div className="DesktopHeader">
            <div className="navbar">
                <a href="/">Inicio</a>
                <a href="/Store">Tienda</a>
                <a href="/Contact">Contacto</a>
            </div>
            <div className="contacts">
                <div className="contactHeader">
                    <Image src="/whiteInstagram.svg" fill className="image"/>
                </div>
                <div className="contactHeader">
                    <Image src="/whiteFacebook.png" fill className="image"/>
                </div>
                <div className="contactHeader">
                    <Image src="/whiteWhatsApp.svg" fill className="image"/>
                </div>
            </div>
        </div>
    );
}