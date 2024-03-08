export default function PlayHeader() {

  // PURPLE SECTION
  const imgZonaPurple = (
    <img
      src={"./src/home_page/media/Play-Sections/purple.crop7x2.1920w.jpg"}
      id="imgZonaPurple"
      className="imgZonaPurple"
    />
  )
  const formula1 = (
    <img
      src={"./src/home_page/media/Play-Sections/f124-7x2.1920w.png"}
      id="formula1"
      alt="formula1"
      className="imagenFormula1"
    />
  );
  const ParrafoAcercate = (
    <p className="ParrafoAcercate">ACÉRCATE A LA PARRILLA</p>)
   
  const textoAcercate = (
    <p>Prepárate para encender tu pasión por las carreras y acercarte a la parrilla como nunca antes con EA SPORTS™ F1® 24, el videojuego oficial del 2024 FIA Formula One World Championship™.</p>)

  const parrafoFormula1 = (
    <p id="parrafoFormula1" className="parrafoFormula1">
      {ParrafoAcercate}
      {textoAcercate}
    </p>
  )
  const botonMasInfo = (
    <button id="botonMasInfo" className="botonMasInfo">
     RESERVAR AHORA
    </button>
  )
  const sectionTOTY = (
    <div id="formula1-contenido" className="formula1-contenido">
      {formula1}
      {parrafoFormula1}
      {botonMasInfo}
    </div>
  )

  const zonaPurple = (
    <div id="zonaPurple" className="zona-purple">
      {imgZonaPurple}
      {sectionTOTY}
    </div>
  )

// GRAY SECCION 
const imgZonaGris = <img 
src={"./src/home_page/media/Play-Sections/grey.1920w.png"} 
id="imgZonaGris" 
className="imgZonaGris"/>

const parrafoGris = <p 
id="parrafoGris"
className="parrafoGris"
>DESCUBRE MÁS SOBRE NEED FOR SPEED™ UNBOUND VOLUMEN 6
</p>

const botonJugar = (
<button 
id="botonJugar" 
className="botonMasInfo">MAS INFORMACIÓN
</button>
)

const zonaGrisContenido = (
  <div id="zona-gris-contenido"
  className="zona-gris-contenido">
   {parrafoGris}
   {botonJugar}
   </div>
)

const zonaGris = (
  <div className="zona-gris">
    {imgZonaGris}
    {zonaGrisContenido}
  </div>
)

return (
  <>
  {zonaPurple}
  {zonaGris}
  </>
  )
}