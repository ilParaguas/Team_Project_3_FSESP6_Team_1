export function ReadMore({text}) {
  return (
    <div id="read-more">
      <a id="read-more-link" href="#read-more">
      {text}
      </a>
      <span id="read-more-text">{text}</span>
    </div>
  );
}
