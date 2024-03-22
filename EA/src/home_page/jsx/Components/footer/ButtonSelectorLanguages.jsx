import { LanguageContext } from "../../Contexts/LanguageContext";
import { useContext, useRef, useState } from "react";

export default function ButtonSelectorLanguages({ items }) {

    const lang = useContext(LanguageContext)        // Codigo para la etiqueta
    const [labelItem, setLabelItem] = useState()
    
    if (!labelItem) {
        setLabelItem(items.content.find(item => item.lang === lang))
    }
    
    const [open, setOpen] = useState(false)
    const buttonRef = useRef()
    const selectorRef = useRef()

    window.addEventListener("click", event => {

        if (!buttonRef.current.contains(event.target) && !selectorRef.current.contains(event.target)) {
            setOpen(false)
            console.log(event.target);
        }
    })

    return (
        <>
        {labelItem && <div>
            <button ref={buttonRef} onClick={() => {setOpen(!open)}}>
                <div>{items.title}</div>
                <div>
                    <div>
                        <img src={`./src/home_page/media/img/footer/flags/${labelItem.ISO}.png`} alt="" />
                        <span>{labelItem.country}</span>
                    </div>
                    <img src="./src/home_page/media/img/footer/flecha-abajo.png" />
                </div>
            </button>
            {open && (
            <div ref={selectorRef}>
                {items.content.map(item => (
                    <LanguageSelector key={item.ISO} item={item} lang={lang}/>
                ))}
            </div>  )}
        </div> }
        </>     
    );
}

function LanguageSelector({ item, lang }) {



    return (
        <a href={`/${item.lang}`}>
            <div>
                <div>
                    <img src={`./src/home_page/media/img/footer/flags/${item.ISO}.png`} />
                </div>
                <div>{item.country}</div>
            </div>
            <div>
                {item.lang === lang && <img src="./src/home_page/media/img/footer/check.png" />}
            </div>
         </a>
    )
}
