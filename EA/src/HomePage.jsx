import { useParams } from 'react-router-dom'
import '../css/HomePage.css'
import { LanguageContext } from './home_page/jsx/Context/LanguageContext'

export default function HomePage() {
 
  const { lang } = useParams()


  return (
    <>
    <LanguageContext.Provider value={lang} >

    </LanguageContext.Provider>
    </>
  )
}

