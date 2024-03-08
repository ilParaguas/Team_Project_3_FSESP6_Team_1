import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx";

export function MediaLinks() {
    const data = useContext(JsonContext);

    return (
    <div>
        {data && <section>
            <div>{data["media-links"]["local-links"].map(link => {
                return <InfoDiv key={link} link={link}/>;
            })}</div>
            <div>
                <h3>{data.join}</h3>
                <div>{data["media-links"]["social-links"].map(link => {
                    return <NetworkDiv key={link} link={link} />
                })}</div>
            </div>
        </section>}
    </div>
    );
}

function InfoDiv({ link }) {

    return <div><a>{link}</a></div>;
}

function NetworkDiv({ link }) {

    return <div><a><img src={`./src/home_page/media/img/footer/social/${link}.svg`} alt={link} /></a></div>
}