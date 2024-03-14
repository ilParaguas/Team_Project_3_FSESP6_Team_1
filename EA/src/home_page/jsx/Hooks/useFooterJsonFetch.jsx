import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "/src/home_page/jsx/Contexts/LanguageContext.jsx";

export function useFooterJsonFetch() {
    const [data, setData] = useState({})
    const lang = useContext(LanguageContext)
    console.log(lang);
    
    async function jsonFetch() {
        try{
            const response = await fetch("/src/home_page/json/footer.json");
            const data = await response.json();
            setData({...data})
    
        }catch(err){
            console.log(`Error: ${err}`);
        }
    }

    useEffect(()=>{
        jsonFetch(lang)
    }, [lang])

    return data[lang]
}