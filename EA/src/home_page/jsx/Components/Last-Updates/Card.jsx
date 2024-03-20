import { useEffect, useRef, useState } from "react";

export function Card({ content }) {
  const linkRef = useRef();
  useEffect(() => {
    linkRef.current.classList.add("updates-hovered");
    const id = setTimeout(
      () => linkRef.current.classList.remove("updates-hovered"),
      200
    );
    return () => clearTimeout(id);
  }, [content]);
  return (
    <a ref={linkRef} href="#" className="card-updates updates-hovered">
      <img
        className="card-img"
        src={"./src/home_page/media/img/last-updates/" + content.Picture}
        alt={content.Picture}
      />
      <div>
        {content.Company && (
          <>
            <span className="card-company">{content.Company}</span>
            <span className="card-date">{content.Date}</span>
          </>
        )}
        {!content.Company && (
          <span className="card-company">{content.Date}</span>
        )}
        <h3 className="card-title">{content.Title}</h3>
        <p className="card-text">{content.Text}</p>
      </div>
    </a>
  );
}
