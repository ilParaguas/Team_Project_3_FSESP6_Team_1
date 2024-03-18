import ZonaGris from "./ZonaGris";
import ZonaPurple from "./ZonaPurple";
import ZonaRoja from "./ZonaRoja";
import ZonaCeleste from "./ZonaCeleste";

export function PlaySectionsHeader(){
    return(
        <div>
          <ZonaPurple/>
          <ZonaGris/>
        </div>
    )
}
export function PlaySectionsFooter(){
    return(
        <div>
          <ZonaRoja/>
          <ZonaCeleste/>
        </div>
    )
}