import { useEffect, useState } from "react";

export function usePlaySections(lang) {
    const [data, setData] = useState({})
    
    async function PlaySectionsFetch() {
        try{
            const response = await fetch("/src/home_page/json/PlaySections.json");
            const data = await response.json();
            setData({...data})
    
        }catch(err){
            console.log(`Error: ${err}`);
        }
    }
    useEffect(()=>{
        PlaySectionsFetch(lang)
    }, [lang])

    return data[lang]
}
