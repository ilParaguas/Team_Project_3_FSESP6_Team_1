import { LanguageContext } from "../../Contexts/LanguageContext";
import { useContext, useState } from "react";

export default function ButtonSelector({ items }) {

    const lang = useContext(LanguageContext)
    const [labelItem, setLabelItem] = useState()

    if (!labelItem) {
        setLabelItem(items.content.find(item => item.lang === lang))
    }
    

    return (
        <>
        {labelItem && <div>
            <button>
                <div>{items.title}</div>
                <div>
                    <img src={`./src/home_page/media/img/footer/flags/${labelItem.ISO}.png`}></img>
                    <div>{labelItem.country}</div>
                </div>
            </button>
            <div>
                {items.content.map(item => (
                    item.ISO ? <LanguageSelector key={item.ISO} item={item}/> : null
                ))}
            </div>
        </div> }
        </>     
    );
}

function LanguageSelector({ item }) {

    return (
        <a href={`/${item.lang}`}>
            <img src={`./src/home_page/media/img/footer/flags/${item.ISO}.png`}></img>
            <div>{item.country}</div>
         </a>
    )
}

function PriceSelector ({ item }) {

    return (
        <a href="">
            <div>{item}</div>
        </a>
    )
}