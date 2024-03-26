export default function IconButton({ id, src, srcClass }) {
  return (
    <a id={id}>
      <img src={src} className={srcClass} />
    </a>
  );
}
