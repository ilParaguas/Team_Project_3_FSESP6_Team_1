export function ReadMore({text}) {
  return (
    <div className="read-more">
      <span className="read-more-text">{text}</span>
      <a className="read-more-link" href="#read-more">
      {text}
      </a>
      
    </div>
  );
}
