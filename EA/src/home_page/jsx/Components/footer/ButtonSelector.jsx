import SelectorColumn from "./SelectorColumn";

export default function ButtonSelector({ items }) {

    return (
        <div>
            <button>
                <div>{items.title}</div>
                <div></div>
            </button>
            <SelectorColumn items={items.content} />
        </div>
    );
}