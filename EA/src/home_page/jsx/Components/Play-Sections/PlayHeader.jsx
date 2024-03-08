import { useEffect } from 'react';

export default function PlayHeader() {
  useEffect(() => {

    // SECCION AZUL
    const imgZonaAzul = <img src="sources EA/azul-mesa-juegos7x2.1920w.jpg" id="imgZonaAzul" />;
    
    const teamOfTheYear = (
      <img src="sources EA/team-of-the-year7x2.1920w.png" id="imagenTOTY" alt="Team of the year" />
    );

    const textoParrafo = "La votación ha terminado. Cada voto cuenta. Vuelve pronto para ver el anuncio de los onces oficiales del TOTY masculino y femenino de EA SPORTS FC.";
    const parrafoTOTY = <p id="parrafoTOTY">{textoParrafo}</p>;

    const botonMasInfo = (
      <button id="botonMasInfo" className="botonMasInfo">Mas Informacion</button>
    );

    const sectionTOTY = (
      <div id="team-of-the-year">
        {teamOfTheYear}
        {parrafoTOTY}
        {botonMasInfo}
      </div>
    );

    // SECCION GRIS
    const imgZonaGris = <img src="sources EA/Gris.1920w.jpg" id="imgZonaGris" />;
    
    const textoParrafoGris = "EA SPORTS™ F1® 23 ESTÁ EN THE PLAY LIST";
    const parrafoGris = <p id="parrafoGris">{textoParrafoGris}</p>;

    const PlayLogo = <img src="sources EA/play-logo-small.svg" id="PlayLogo" alt="Play Logo" />;

    const botonJugar = (
      <button id="botonJugar" className="botonJugar">Jugar ahora</button>
    );

    const divZonaGris = (
      <div id="divZonaGris">
        {PlayLogo}
        {botonJugar}
      </div>
    );

    const zonaGrisContenido = (
      <div id="zona-gris-contenido">
        {parrafoGris}
        {divZonaGris}
      </div>
    );

    const playToY = document.getElementById("play-ToY");
    playToY.appendChild(
      <div>
        <div id="zona-azul">
          {imgZonaAzul}
          {sectionTOTY}
        </div>
        <div id="zona-gris">
          {imgZonaGris}
          {zonaGrisContenido}
        </div>
      </div>
    );

    return () => {
      playToY.removeChild(zonaAzul);
      playToY.removeChild(zonaGris);
    };
  }, []); 

  return null;
}

