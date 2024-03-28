const zonaBoton = document.getElementById("Juegos");
zonaBoton.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/fondo.png`)

const boton = document.createElement("a")
boton.setAttribute("href", "#")
boton.classList.add("botonClass")
boton.innerText= "Ultimos juegos"
zonaBoton.appendChild(boton)


const zonaGames = document.getElementById("juegos-destacados");

const zonaUfc = document.createElement("div")
const zonaFifa = document.createElement("div")
const zonaF1 = document.createElement("div")
const zonaNfs = document.createElement("div")
const zonaSims = document.createElement("div")
const zonaApex = document.createElement("div")

function createDiv(zona) {
    zona.classList.add("divZona")
    zonaGames.appendChild(zona) 
}
createDiv(zonaUfc)
createDiv(zonaFifa)
createDiv(zonaF1)
createDiv(zonaNfs)
createDiv(zonaSims)
createDiv(zonaApex)

//Ufc

const imgZonaUfc= document.createElement("img")
imgZonaUfc.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/ufc-5-fondo.jpg`)
imgZonaUfc.classList.add("imgClass")
imgZonaUfc.setAttribute("alt", "ufc")
zonaUfc.appendChild(imgZonaUfc)

const logoZonaUfc = document.createElement("img")
logoZonaUfc.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/ufc-5-logo (1).svg`)
logoZonaUfc.classList.add("logoClass")
logoZonaUfc.setAttribute("alt", "ufc")
zonaUfc.appendChild(logoZonaUfc)

//Fifa
const imgZonaFifa= document.createElement("img")
imgZonaFifa.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/fc24-fondo.jpeg`)
imgZonaFifa.classList.add("imgClass")
imgZonaFifa.setAttribute("alt", "fifa")
zonaFifa.appendChild(imgZonaFifa)

const logoZonaFifa = document.createElement("img")
logoZonaFifa.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/fc24-logo.png`)
logoZonaFifa.classList.add("logoClass")
logoZonaFifa.setAttribute("alt", "ufc")
zonaFifa.appendChild(logoZonaFifa)

//F1

const imgZonaF1= document.createElement("img")
imgZonaF1.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/f123-fondo.jpg`)
imgZonaF1.classList.add("imgClass")
imgZonaF1.setAttribute("alt", "f1")
zonaF1.appendChild(imgZonaF1)

const logoZonaF1 = document.createElement("img")
logoZonaF1.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/f123-logo.png`)
logoZonaF1.classList.add("logoClass")
zonaF1.appendChild(logoZonaF1)

//.................Nfs.............//

const imgZonaNfs= document.createElement("img")
imgZonaNfs.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/nfs-fondo.png`)
imgZonaNfs.classList.add("imgClass")
imgZonaNfs.setAttribute("alt", "nfs")
zonaNfs.appendChild(imgZonaNfs)

const logoZonaNfs = document.createElement("img")
logoZonaNfs.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/nfs-unbound-logo.png`)
logoZonaNfs.classList.add("logoClass")
zonaNfs.appendChild(logoZonaNfs)


//Sims

const imgZonaSims= document.createElement("img")
imgZonaSims.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/the-sims-4-fondo.jpg`)
imgZonaSims.classList.add("imgClass")
imgZonaSims.setAttribute("alt", "sims")
zonaSims.appendChild(imgZonaSims)

// Apex

zonaApex.classList.add("divZona")
zonaGames.appendChild(zonaApex)

const imgZonaApex= document.createElement("img")
imgZonaApex.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/apex-legends-fondo.jpg`)
imgZonaApex.classList.add("imgClass")
imgZonaApex.setAttribute("alt", "Apex")
zonaApex.appendChild(imgZonaApex)

const logoZonaApex = document.createElement("img")
logoZonaApex.setAttribute("src", `${location.protocol}//${location.host}/media/images-juegos-destacados/apex-legends-mono-logo (2).svg`)
logoZonaApex.classList.add("logoClass")
zonaApex.appendChild(logoZonaApex)

// link .......//
const linkZonaApex = document.createElement("a")
linkZonaApex.setAttribute("href", "#")
if(localStorage.getItem("language")==="es-es")
linkZonaApex.innerText= "Sitio oficial"
if(localStorage.getItem("language")==="en-us"||localStorage.getItem("language")==="en-gb" )
linkZonaApex.innerText= "Official site"
linkZonaApex.setAttribute("id", "linkZonaNfs")


/* function  event mouseover */

function logoMove(logo,zona) {
    
zona.addEventListener('mouseover',()=>{
    logo.style.top= "90px"
    logo.style.transition="20ms"
    setTimeout(() => {
        zona.appendChild(linkZonaApex)
    }, 30);
  });
  zona.addEventListener('mouseout',()=>{
    zona.removeChild(linkZonaApex)
    logo.style.top= "165px"
  });}

  logoMove(logoZonaApex,zonaApex)
  logoMove(logoZonaF1,zonaF1)
  logoMove(logoZonaNfs,zonaNfs)
  logoMove(logoZonaFifa,zonaFifa)
  logoMove(logoZonaUfc,zonaUfc)
  logoMove(logoZonaUfc,zonaSims)

