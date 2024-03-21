import { PlaySectionsContext } from "../../Contexts/PlaySectionsContext";
import { useContext} from "react";

export default function ZonaPurple() {
  const data = useContext(PlaySectionsContext);

  return (
    <>
    {data &&
    <div id="zonaPurple" className="zona-purple">
      <img
        id="imgZonaPurple"
        src="./src/home_page/media/Play-Sections/purple.crop7x2.1920w.jpg"
        className="imgZonaPurple"
      />
      <div id="formula1-contenido" className="formula1-contenido">
        <img
          id="formula1"
          src="./src/home_page/media/Play-Sections/f124-7x2.1920w.png"
          alt="formula1"
          className="imagenFormula1"
        />
       <div id="parrafoFormula1" className="parrafoFormula1">
      <p id="ParrafoAcercate" className="ParrafoAcercate">
       {data.ParrafoAcercate}
          </p>
          <p id="textoAcercate" className="textoAcercate">
           {data.textoAcercate}
          </p>
        </div>
        <button id="botonMasInfo" className="botonMasInfo">
         {data.botonMasInfo}
        </button>
       </div>
    </div>
}
</>
  )
}
