import { useContext } from "react";
import { PlaySectionsContext } from "../../Contexts/PlaySectionsContext";

export default function ZonaGris() {
  const data = useContext(PlaySectionsContext);

  return (
    <>
    {data &&
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
        <button id="botonJugar" className="botonJugar">
         {data.botonJugar}
        </button>
      </div>
    </div>
    }
    </>
  );
 
}
