import { News } from "./News";
import { TabsBar } from "./Tabs-Bar";

export function LastUpdates(){
    return (
        <section id="last-updates">
            <h2 id="updates-title">Ultimas Actualizaciones</h2>
            <TabsBar/>
            <div className="hr"></div>
            <News/>
        </section>
    )
}