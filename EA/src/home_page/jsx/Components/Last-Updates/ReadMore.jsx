export function ReadMore({text}) {
  return (
    <div id="read-more">
      <span id="read-more-text">{text}</span>
      <a id="read-more-link" href="#read-more">
      {text}
      </a>
      
    </div>
  );
}
