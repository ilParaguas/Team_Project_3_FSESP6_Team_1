import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx";

export function MediaLinks() {
    const data = useContext(JsonContext);

    return (
    <div id="media-links">
        {data && <section>
            <div id="local-links">{data["media-links"]["local-links"].map(link => {
                return <InfoDiv key={link} link={link}/>;
            })}</div>
            <div>
                <h3>{data["media-links"].join}</h3>
                <div>{data["media-links"]["social-links"].map(link => {
                    return <NetworkDiv key={link} link={link} />
                })}</div>
            </div>
        </section>}
        <div id="media-space-div"></div>
    </div>
    );
}

function InfoDiv({ link }) {

    return <div className="local-link" title={link}><a href="">{link}</a></div>;
}

function NetworkDiv({ link }) {

    return <div className="social-link" title={link}><a href=""><img src={`./src/home_page/media/img/footer/social/${link}.svg`} alt={link} /></a></div>
}