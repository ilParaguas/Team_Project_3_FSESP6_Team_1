import { LanguageContext } from "../../Contexts/LanguageContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function ButtonSelectorLanguages({ items }) {

    const lang = useContext(LanguageContext)        // Codigo para el titulo de la etiqueta
    const [labelItem, setLabelItem] = useState()
    
    if (!labelItem) {
        setLabelItem(items.content.find(item => item.lang === lang))
    }                                               //
    
    const [open, setOpen] = useState(false)     // Close selector when click out
    const buttonRef = useRef()
    const selectorRef = useRef()

    // useEffect( () => {
    //     window.addEventListener("click", event => {
    //         if (!buttonRef.current.contains(event.target) && !selectorRef.current.contains(event.target)) {
    //             setOpen(false)
    //         }
    //         console.log(event.target);
    //     })                                          //
    //     return () => {
    //         window.removeEventListener("click", event => {
    //             if (!buttonRef.current.contains(event.target) && !selectorRef.current.contains(event.target)) {
    //                 setOpen(false)
    //             }
    //             console.log(event.target);
    //         })  
    //     }
    // } ,[])

    useEffect( () => {
        if(open){
            selectorRef.current.addEventListener("focusout", () => {
                console.log(document.activeElement);
                setOpen(false)
            })
            selectorRef.current.focus()
            console.log(document.activeElement);
        }
    } ,[open])

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
        {labelItem && <div>
            <button ref={buttonRef} onClick={(e) => {
                e.preventDefault()
                setOpen(open => !open)
            }}>
                <div>{items.title}</div>
                <div>
                    <div>
                        <img src={`./src/home_page/media/img/footer/flags/${labelItem.ISO}.png`} alt="" />
                        <span>{labelItem.country}</span>
                    </div>
                    {/* <img src="./src/home_page/media/img/footer/flecha-abajo.png" /> */}
                </div>
            </button>

            {open && (
            <div tabIndex="0" ref={selectorRef} autoFocus>
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
