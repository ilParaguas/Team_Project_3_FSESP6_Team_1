import Selector from "./Selector";

export default function ButtonSelector({ items }) {

    return (
        <div>
            <button>
                <div>{items.title}</div>
                <div></div>
            </button>
            <div>
                {items.content.map(item => (
                    <div key={item.ISO}><a href={`/${item.lang}`}>{item.country}</a></div>
                ))}
            </div>
        </div>
    );
}