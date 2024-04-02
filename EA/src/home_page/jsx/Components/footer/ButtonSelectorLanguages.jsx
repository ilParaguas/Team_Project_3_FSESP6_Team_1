import { LanguageContext } from "../../Contexts/LanguageContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function ButtonSelectorLanguages({ items, hasFlags }) {

    const lang = useContext(LanguageContext)        // Button Label
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


    const columns = []                          // Columnas cuando width > 1456px
    let indexColumn = -1
    items.content.forEach(item => {
        if ( !columns.length || columns[indexColumn]?.length >=9) {
            indexColumn ++
            columns.push([])
        }
        columns[indexColumn].push(item)
    })
    // console.log(columns);
    // window.innerWidth
    

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
                {columns.map((column, index) => (
                    <ul key={index}>
                        {column.map(item => {
                            return <SelectorItem key={item.ISO} item={item} hasFlags={hasFlags} />
                        })}
                    </ul>
                ))}
            </div>  )}
        </div> }
        </>     
    );
}

function SelectorItem({ item, hasFlags }) {

    return (
        <a href={hasFlags ? `/${item.lang}` : ""}>
            <div>
                <div >
                    <img src={`./src/home_page/media/img/footer/flags/${item.ISO}.png`} />
                </div>
                <div>{item.country}</div>
            </div>
            <div className="footer-icon">
                {hasFlags && <img className="footer-icon" src="./src/home_page/media/img/footer/check.png" />}
            </div>
         </a>
    )
}
