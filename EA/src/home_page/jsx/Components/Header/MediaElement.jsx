import MediaContentBody from "./MediaContentBody";

export default function MediaElement({ item }) {

  // JAJAJAJA
  // SIRVE PARA RECORDAR LA ALTURA QUE TENIA LA
  // PESTAÑA AL CERRARSE
  let elementHeight = item.height;

  function handleClickHeader(event) {
    let element = event.currentTarget.nextElementSibling;

    let chevron = event.currentTarget.childNodes[1];
    let chevron1 = chevron.childNodes[0];
    let chevron2 = chevron.childNodes[1];

    if (!event.currentTarget.classList.contains("f_tomato")) {
      event.currentTarget.classList.add("f_tomato");
      element.style.height = elementHeight;
      chevron1.classList.add("f_rotatechevron1");
      chevron2.classList.add("f_rotatechevron2");
    } else {
      event.currentTarget.classList.remove("f_tomato");
      elementHeight = element.style.height;
      element.style.height = "0px";
      chevron1.classList.remove("f_rotatechevron1");
      chevron2.classList.remove("f_rotatechevron2");
    }
  }

  return (
    <div>
      <div
        className="f_sidebar_media_content_header"
        onClick={handleClickHeader}
      >
        <p> {item.title} </p>
        <div className="f_chevron_sidebar">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="f_sidebar_media_content_body">
        <MediaContentBody
          listTitle={item.listTitle}
          itemList={item.list}
          big={!!item.listTitle}
        />
        {item.listTitle2 && (
          <MediaContentBody
            listTitle={item.listTitle2}
            itemList={item.list2}
            big={true}
          />
        )}
      </div>
    </div>
  );
}
