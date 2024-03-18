export default function ZonaRoja() {
  return (
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
          No te limites a jugar. Saca más partido a tus juegos. Desbloquea
          recompensas exclusivas, contenido para los miembros y una biblioteca
          de los mejores títulos.
        </p>
        <button id="botonUneteYa" className="botonUneteYa">
          Únete ya
        </button>
      </div>
    </div>
  );
}
