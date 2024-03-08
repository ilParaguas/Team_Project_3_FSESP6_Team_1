export default function PlayFooter() {
  
    // ZONA ROJA
    const imgZonaRoja = (
      <img
        src={"./src/home_page/media/Play-Sections/recuadros7x2.1920w.jpg"}
        id="imgZonaRoja"
        className="imgZonaRoja"
      />
    );
    const imgZonaRojaGradient = (
      <img
        src={"./src/home_page/media/Play-Sections/gradient-azul7x2.1920w.png"}
        id="imgZonaRojaGradient"
        className="imgZonaRojaGradient"
      />
    );
    const PlayLogo = (
      <img
        src={"./src/home_page/media/Play-Sections/play-log-big.svg"}
        id="playLogo"
        alt="play Logo"
        className="playLogo"
      />
    );
    const parrafoPlay = (
      <p id="parrafoPlay" 
      className="parrafoPlay">
        No te limites a jugar. Saca más partido a tus juegos. Desbloquea
        recompensas exclusivas, contenido para los miembros y una biblioteca de
        los mejores títulos.
      </p>
    )
    const botonUneteYa = (
      <button id="botonUneteYa" 
      className="botonUneteYa">
        Únete ya
      </button>
    )
    const playContainer = (
      <div id="play-container" 
      className="play-container">
        {PlayLogo}
        {parrafoPlay}
        {botonUneteYa}
      </div>
    )
    const zonaRoja = (
      <div className="zona-roja">
        {imgZonaRoja}
        {imgZonaRojaGradient}
        {playContainer}
      </div>
    );
  
    // ZONA CELESTE
    const imgZonaCeleste = (
      <img src="./src/home_page/media/Play-Sections/celeste.1920w.jpg"
      id="imgZonaCeleste" 
      className="imgZonaCeleste"/>
    );
    const parrafoCeleste = (
      <p id="parrafoCeleste"
      className="parrafoCeleste">
        Herramientas parentales y de juego: el control en tus manos
      </p>
    );
    const botonInfoCeleste = (
      <button id="botonInfoCeleste" 
      className="botonInfoCeleste">
        Mas Información
      </button>
    );
    const zonaCelesteContainer = (
      <div id="zona-celeste-contenido"
      className="zona-celeste-contenido">
        {parrafoCeleste}
        {botonInfoCeleste}
      </div>
    );
    const zonaCeleste = (
        <div id="zona-celeste"
        className="zona-celeste">
          {imgZonaCeleste}
          {zonaCelesteContainer}
        </div>
    )
  
    return (
      <div>
        {zonaRoja}
        {zonaCeleste}
      </div>
    );
  }
  