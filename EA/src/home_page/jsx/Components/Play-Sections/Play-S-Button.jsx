export function PlayButtons({ texto, playButton }) {
  return (
    <div>
    <button className={playButton} href="#">
      <span>{texto}</span>
    </button>
    </div>
  );
}