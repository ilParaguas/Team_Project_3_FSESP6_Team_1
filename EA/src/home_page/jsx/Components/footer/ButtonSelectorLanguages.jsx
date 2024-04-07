import { LanguageContext } from "../../Contexts/LanguageContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function ButtonSelectorLanguages({ items, hasFlags }) {

    const lang = useContext(LanguageContext)        // Button Label
    const [labelItem, setLabelItem] = useState()
    
    if (!labelItem) {
        if (hasFlags === "true") {
            setLabelItem(items.content.find(item => item.lang === lang))
        } else {
            setLabelItem(items.content.find(item => item.country === "Spain" ))  //Precios por defecto en España porq no aparece ninguno
        }
    } 

    
    const [open, setOpen] = useState(false)     
    const buttonRef = useRef()
    const selectorRef = useRef()

    useEffect( () => {
        let ref = buttonRef.current
        window.addEventListener("click", event => {         // Close selector when click out
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

    
    const [columns, setColumns] = useState()                          // Columnas cuando width > 1456px
    useEffect( () => {
        const columns = []
        let indexColumn = -1
        items.content.forEach(item => {
            if ( !columns.length || columns[indexColumn]?.length >=9) {
                indexColumn ++
                columns.push([])
            }
            columns[indexColumn].push(item)
        })
        setColumns(columns)
    }, [items.content])


    // useEffect( () => {
    //     if (open) {
            
    //     }
    // }, [])
    

    return (
        <>
        {labelItem && <div className="footer-button-selector">
            <button className={"footer-button"} ref={buttonRef} onClick={() => {
                setOpen(open => !open)
            }}>
                <div className="footer-button-label">{items.title}</div>
                <div className="footer-button-content">
                    <div className="footer-button-content-div">
                        {hasFlags==="true" && <img src={`./src/home_page/media/img/footer/flags/${labelItem.ISO}.png`} alt="" 
                            onError={ e => {
                                e.target.style.display = 'none'
                                e.target.onerror = null
                            }}
                        />}
                        <span>{labelItem.country}</span>
                    </div>
                    <img className="footer-button-icon" src="./src/home_page/media/img/footer/flecha-abajo.png" />
                </div>
            </button>

            {open && (
            <div className="footer-div-selector" tabIndex="0" ref={selectorRef}>
                {columns.map((column, index) => (
                    <ul key={index} className="footer-div-selector-column">
                        {column.map(item => {
                            return <SelectorItem key={item.ISO} item={item} hasFlags={hasFlags} checkedCountry={labelItem.country}/>
                        })}
                    </ul>
                ))}
            </div>  )}
        </div> }
        </>     
    );
}

function SelectorItem({ item, hasFlags, checkedCountry }) {

    return (
        <a href={hasFlags ? `/${item.lang}` : ""}>
            <div>
                {hasFlags==="true" && <div className="footer-icon">
                    <img src={`./src/home_page/media/img/footer/flags/${item.ISO}.png`} 
                    onError={ e => {
                        e.target.style.display = 'none'
                        e.target.onerror = null
                    }} />
                </div>}
                <div>{item.country}</div>
            </div>
            <div className="footer-icon">
                {checkedCountry===item.country && <img className="footer-icon" src="./src/home_page/media/img/footer/check.png" />}
            </div>
         </a>
    )
}
