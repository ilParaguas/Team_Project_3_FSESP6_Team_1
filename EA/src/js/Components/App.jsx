//import '../../css/App.css'
import { LanguageContext } from '../Contexts/Language-Context'
import { LastUpdates } from './Last-Updates/Last-Updates'

export default function App() {
  
  return (
    <LanguageContext.Provider value='es-es'>
      <LastUpdates/>
    </LanguageContext.Provider>
  )
}

