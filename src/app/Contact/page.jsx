import Header from "@/components/Header";
import Image from "next/image";

export default function Contact()
{
    return(
        <div className="">
            <Header />
            <div className="Contact">
                <div className="LeftContact">
                    <div className="LogoContact">
                        <Image alt="" src="/Logo.svg" fill className="image"/>
                    </div>
                </div>
                <div className="RightContact">
                    <h2>Contactar:</h2>
                    <p>Dirección del taller 1: Ave 35/118 y 120 #11815, Marianao</p>
                    <p>Dirección del taller 2: Calle 76 / 51 y 49 #4907</p>
                    <p>Teléfono: +5354025911</p>
                    <a href="https://wa.me/+5354025911">
                        <button className="primaryButton">Escribir por Whatsapp</button>
                    </a>
                </div>
            </div>
        </div>
    )
}