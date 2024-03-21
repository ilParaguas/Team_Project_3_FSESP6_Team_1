import ZonaGris from "./ZonaGris";
import ZonaPurple from "./ZonaPurple";
import { usePlaySections } from "../../Hooks/usePlaySections";
import { PlaySectionsContext } from "../../Contexts/PlaySectionsContext";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

export function PlaySectionsHeader(){
  const language = useContext(LanguageContext)
  const json = usePlaySections(language)

    return(
        <div>
           <PlaySectionsContext.Provider value={json}>
          <ZonaPurple/>
          <ZonaGris/>
          </PlaySectionsContext.Provider>
        </div>
    )
}

