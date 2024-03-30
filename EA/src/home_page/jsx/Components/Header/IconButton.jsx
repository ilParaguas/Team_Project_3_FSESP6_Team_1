export default function IconButton({
  customClick,
  id,
  aHref,
  aClass,
  aText,
  src,
  srcClass,
  srcId,
}) {
  return (
    <a id={id} href={aHref} className={aClass} onClick={customClick}>
      <img src={src} className={srcClass} id={srcId} />
      {aText}
    </a>
  );
}
