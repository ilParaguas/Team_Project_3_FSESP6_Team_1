import { PlaySectionsContext } from "../../Contexts/PlaySectionsContext";
import { useContext } from "react";
import { PlayButtons } from "./Play-S-Button";

export default function ZonaRoja() {
  const data = useContext(PlaySectionsContext);
  return (
    <>
      {data && (
        <div className="zona-roja">
          <img
            id="imgZonaRoja"
            src="./src/home_page/media/Play-Sections/recuadros7x2.1920w.jpg"
            className="imgZonaRoja"
          />
          <img
            id="imgZonaRojaGradient"
            src="./src/home_page/media/Play-Sections/gradient-azul7x2.1920w.png"
            className="imgZonaRojaGradient"
          />
          <div id="play-container" className="play-container">
            <img
              id="playLogo"
              src="./src/home_page/media/Play-Sections/play-log-big.svg"
              alt="play Logo"
              className="playLogo"
            />
            <p id="parrafoPlay" className="parrafoPlay">
              {data.parrafoPlay}
            </p>
            <PlayButtons
              texto={data.botonUneteYa}
              playButtonContainer={"playButtonH-container"}
              playButton={"playButtonFWhite"}
            />
          </div>
        </div>
      )}
    </>
  );
}
