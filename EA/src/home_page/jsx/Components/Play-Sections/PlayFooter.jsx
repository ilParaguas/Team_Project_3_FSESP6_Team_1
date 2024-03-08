import { useEffect } from 'react';

export default function PlayFooter() {

  useEffect(() => {
    // ZONA ROJA
    const imgZonaRoja = <img src="sources EA/recuadros7x2.1920w.jpg" id="imgZonaRoja" />;
    const imgZonaRojaGradient = <img src="sources EA/gradient-azul7x2.1920w.png" id="imgZonaRojaGradient" />;

    const PlayLogo2 = <img src="sources EA/play-logo-small.svg" id="PlayLogo2" alt="Play Logo2" />;
    
    const parrafoPlay = (
      <p id="parrafoPlay">
        No te limites a jugar. Saca más partido a tus juegos. Desbloquea recompensas exclusivas, contenido para los miembros y una biblioteca de los mejores títulos.
      </p>
    );

    const botonUneteYa = (
      <button id="botonUneteYa" className="botonUneteYa">
        Únete ya
      </button>
    );

    const playContainer = (
      <div id="play-container">
        {PlayLogo2}
        {parrafoPlay}
        {botonUneteYa}
      </div>
    );

    // ZONA CELESTE
    const imgZonaCeleste = (
      <img src="sources EA/ea-section-bg-esrb-parents-blue-xl.jpg.adapt.1456w.jpg" id="imgZonaCeleste" />
    );

    const parrafoCeleste = (
      <p id="parrafoCeleste">
        Herramientas parentales y de juego: el control en tus manos
      </p>
    );

    const botonInfoCeleste = (
      <button id="botonInfoCeleste" className="botonInfoCeleste">
        Mas Información
      </button>
    );

    const zonaCelesteContainer = (
      <div id="zona-celeste-contenido">
        {parrafoCeleste}
        {botonInfoCeleste}
      </div>
    );

    const playUneteYa = document.getElementById("play-uneteya");
    playUneteYa.appendChild(
      <div>
        <div id="zona-roja">
          {imgZonaRoja}
          {imgZonaRojaGradient}
          {playContainer}
        </div>
        <div id="zona-celeste">
          {imgZonaCeleste}
          {zonaCelesteContainer}
        </div>
      </div>
    );

    return () => {
      playUneteYa.removeChild(zonaRoja);
      playUneteYa.removeChild(zonaCeleste);
    };
  }, []); 

  return (
    <div id="play-uneteya">
      {}
    </div>
  );
}
