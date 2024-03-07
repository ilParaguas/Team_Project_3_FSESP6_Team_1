export function Tab({news,isFirst,isLast}){
    return(
        <li id={news}>
            <input type="radio" id={`radio-${news}`} className="tab-radio" name="tab-value"></input>
            <a href={`#${news}`} className="update-tab" style={isFirst&&{borderLeft:"none"} || isLast&&{borderRight:"none"}}><span>{news.replaceAll("-", "\xa0")}</span></a>
            <hr/>
        </li>
    )
}