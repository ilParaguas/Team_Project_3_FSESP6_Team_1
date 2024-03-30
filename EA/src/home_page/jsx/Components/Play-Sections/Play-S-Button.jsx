export function PlayButtons({ texto, playButton})  {
  return (
      <button className={playButton} href="#">
        <span>{texto}</span>
        </button>
  );
}

