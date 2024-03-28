import { PlaySectionsContext } from "../../Contexts/PlaySectionsContext";
import { useContext } from "react";

export default function ZonaCeleste() {
  const data = useContext(PlaySectionsContext);

  return (
    <>
      {data && (
        <div id="zona-celeste" className="zona-celeste">
          <img
            id="imgZonaCeleste"
            src="./src/home_page/media/Play-Sections/celeste.1920w.jpg"
            className="imgZonaCeleste"
          />
          <div id="zona-celeste-contenido" className="zona-celeste-contenido">
            <p id="parrafoCeleste" className="parrafoCeleste">
              {data.parrafoCeleste}
            </p>

            <div className='playButtonF-container'>
             <button className="playButtonF" href="#">
              <span>{data.botonInfoCeleste}</span>
             </button>
            </div>  

          </div>
        </div>
      )}
    </>
  );
}
