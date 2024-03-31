export function ReadMore({text,link}) {
  return (
    <div className="read-more">
      <span className="read-more-text">{text}</span>
      <a className="read-more-link" href={link || "#"}>
      {text}
      </a>
      
    </div>
  );
}
