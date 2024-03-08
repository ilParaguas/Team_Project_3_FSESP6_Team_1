import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx"
import { LanguageContext } from "/src/home_page/jsx/Contexts/Language-Context.jsx"
import { TermsEA } from "./TermsEA";
import { MediaLinks } from "./MediaLinks";
import { ServsAndLegalTerms } from "./ServsAndLegalTerms";

export function Footer() {
    const lang = useContext(LanguageContext);

    const json = {
        "es-es": {
            "terms-ea": {
                "start": "*SUJETO A CONDICIONES, LIMITACIONES Y EXCLUSIONES. CONSULTA LOS ",
                "link": "TÉRMINOS DE EA PLAY",
                "final": " PARA OBTENER MÁS INFORMACIÓN."
            },
            "media-links": {
                "local-links": ["Empleo", "Ejecutivos", "Informe de impacto", "Nuestros compromisos", "Comunicar inquietudes"],
                "join": "Únete a la conversación",
                "social-links": ["Facebook", "Twitter", "Youtube", "Instagram", "Twitch"]
            },
            "servs-and-legal-terms": {
                "servs": ["Biblioteca de juegos", "Suscribirse", "Canjear Código", "EA app", "Acerca de", "Accesibilidad", "Ayuda"],
                "prices": {
                    "title": "Precios regionales",
                    "content": ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", 
                        "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Romania", 
                        "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland"]},
                "langs": {
                    "title": "Idioma",
                    "content": [
                        { "nombre": "United States", "ISO": "us" },
                        { "nombre": "United Kingdom", "ISO": "uk" },
                        { "nombre": "Australia", "ISO": "au" },
                        { "nombre": "France", "ISO": "fr" },
                        { "nombre": "Deutschland", "ISO": "ge" },
                        { "nombre": "Italia", "ISO": "it" },
                        { "nombre": "日本", "ISO": "ja" },
                        { "nombre": "Polska", "ISO": "po" },
                        { "nombre": "Brasil", "ISO": "br" },
                        { "nombre": "Россия", "ISO": "ru" },
                        { "nombre": "España", "ISO": "es" },
                        { "nombre": "Česká republika", "ISO": "rc" },
                        { "nombre": "Canada (En)", "ISO": "ca" },
                        { "nombre": "Canada (Fr)", "ISO": "ca" },
                        { "nombre": "Danmark", "ISO": "da" },
                        { "nombre": "Suomi", "ISO": "su" },
                        { "nombre": "México", "ISO": "mx" },
                        { "nombre": "Nederland", "ISO": "ne" },
                        { "nombre": "Norge", "ISO": "no" },
                        { "nombre": "Sverige", "ISO": "sv" },
                        { "nombre": "中国", "ISO": "ch" },
                        { "nombre": "대한민국", "ISO": "ks" },
                        { "nombre": "繁體中文", "ISO": "ch" },
                        { "nombre": "Türkiye", "ISO": "tu" }
                    ]
                },
                "legal-terms": ["Información legal y privacidad", "Acuerdo de usuario", " Política de privacidad y directiva de cookies (tus derechos de privacidad)",
                    "Actualizaciones del servicio online", "Seguridad", "Sus preferencias de cookies" ],
                "copyright": "© 2024 Electronic Arts Inc."
            }
        }
    }
    const esJson = json[lang];
    console.log(esJson);

    return (
        <div>
            <JsonContext.Provider value={esJson}>
                {lang}
                <TermsEA />
                <MediaLinks />
                <ServsAndLegalTerms />
            </JsonContext.Provider>
        </div>
    );
}