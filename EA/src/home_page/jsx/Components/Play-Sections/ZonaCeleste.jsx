import { PlaySectionsContext } from "../../Contexts/PlaySectionsContext";
import { useContext } from "react";
import { PlaySecButtons } from "./Play-S-Button";

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
            <PlaySecButtons
              texto={data.botonInfoCeleste}
              />
          </div>
        </div>
      )}
    </>
  );
}
