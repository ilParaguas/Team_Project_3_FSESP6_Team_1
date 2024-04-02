import ZonaRoja from "./ZonaRoja";
import ZonaCeleste from "./ZonaCeleste";
import { usePlaySections } from "../../Hooks/usePlaySections";
import { PlaySectionsContext } from "../../Contexts/PlaySectionsContext";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

export function PlaySectionsFooter() {
  const language = useContext(LanguageContext);
  const json = usePlaySections(language);
  return (
    <div>
      <PlaySectionsContext.Provider value={json}>
        <ZonaRoja />
        <ZonaCeleste />
      </PlaySectionsContext.Provider>
    </div>
  );
}
