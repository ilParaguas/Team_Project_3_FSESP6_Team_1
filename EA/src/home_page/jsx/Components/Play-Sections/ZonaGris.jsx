import { useContext } from "react";
import { PlaySectionsContext } from "../../Contexts/PlaySectionsContext";
import { PlayButtons} from "./Play-S-Button";

export default function ZonaGris() {
  const data = useContext(PlaySectionsContext);
  return (
    <>
      {data && (
        <div className="zona-gris">
          <img
            id="imgZonaGris"
            src="./src/home_page/media/Play-Sections/grey.1920w.jpg"
            className="imgZonaGris"
          />
          <div id="zona-gris-contenido" className="zona-gris-contenido">
            <p id="parrafoGris" className="parrafoGris">
              {data.parrafoGris}
            </p>
            <PlayButtons
             texto={data.botonJugar}
             playButtonContainer= {'playButtonH-container'}
             playButton= {"playButtonH"}
             />
            </div>
         </div>
      )}
    </>
  );
}
