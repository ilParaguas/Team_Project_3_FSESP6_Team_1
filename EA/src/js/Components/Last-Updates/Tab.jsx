export function Tab({news}){
    return(
        <li id={news}>
            <input type="radio" id={`radio-${news}`} className="tab-radio" name="tab-value"></input>
            <a href={`#${news}`}><span>{news.replaceAll("-", "\xa0")}</span></a>
            <hr/>
        </li>
    )
}