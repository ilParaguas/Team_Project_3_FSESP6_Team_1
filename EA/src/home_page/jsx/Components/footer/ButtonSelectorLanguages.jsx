import { LanguageContext } from "../../Contexts/LanguageContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function ButtonSelectorLanguages({ items }) {

    const lang = useContext(LanguageContext)        // Codigo para el titulo de la etiqueta
    const [labelItem, setLabelItem] = useState()
    
    if (!labelItem) {
        setLabelItem(items.content.find(item => item.lang === lang))
    } 
    
    const [open, setOpen] = useState(false)     // Close selector when click out
    const buttonRef = useRef()
    const selectorRef = useRef()

    useEffect( () => {
        let ref = buttonRef.current
        window.addEventListener("click", event => {
            if (!buttonRef.current?.contains(event.target) && !selectorRef.current?.contains(event.target)) {
                setOpen(false)
            }
        }) 
        return () => {
            window.removeEventListener("click", event => {
                if (!ref.contains(event.target) && !ref.contains(event.target)) {
                    setOpen(false)
                }
            })
        }
    } ,[])

    const columns = []                          // Columnas cuando width > 1400px
    let indexColumn = -1
    items.content.forEach(item => {
        if ( !columns.length || columns[indexColumn]?.length >=9) {
            indexColumn ++
            columns.push([])
        }
        columns[indexColumn].push(item)
    })
    

    return (
        <>
        {labelItem && <div className="footer-button-selector">
            <button className="footer-button" ref={buttonRef} onClick={() => {
                setOpen(open => !open)
            }}>
                <div className="footer-button-label">{items.title}</div>
                <div className="footer-button-content">
                    <img src={`./src/home_page/media/img/footer/flags/${labelItem.ISO}.png`} alt="" />
                    <span>{labelItem.country}</span>
                    <img className="footer-button-icon" src="./src/home_page/media/img/footer/flecha-abajo.png" />
                </div>
            </button>

            {open && (
            <div tabIndex="0" ref={selectorRef}>
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
                <div >
                    <img src={`./src/home_page/media/img/footer/flags/${item.ISO}.png`} />
                </div>
                <div>{item.country}</div>
            </div>
            <div className="footer-icon">
                {item.lang === lang && <img className="footer-icon" src="./src/home_page/media/img/footer/check.png" />}
            </div>
         </a>
    )
}
