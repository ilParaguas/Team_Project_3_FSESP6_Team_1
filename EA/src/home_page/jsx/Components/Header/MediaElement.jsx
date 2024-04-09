import ContentLink from "./ContentLink";

export default function MediaElement({ item }) {
  function handleClickHeader(event) {
    let element = event.currentTarget.nextElementSibling;

    if (!event.currentTarget.classList.contains("f_tomato")) {
      event.currentTarget.classList.add("f_tomato");
    } else {
      event.currentTarget.classList.remove("f_tomato");
    }

    if (
      element.style.height === 0 ||
      element.style.height === "0px" ||
      !element.style.height
    ) {
      element.style.height = item.height;
      element.style.opacity = 1;
      element.style.visibility = "visible";
    } else {
      element.style.height = "0px";
      element.style.opacity = 0;
      element.style.visibility = "hidden";
    }

    let chevron = event.currentTarget.childNodes[1];
    let chevron1 = chevron.childNodes[0];
    let chevron2 = chevron.childNodes[1];

    if (!chevron1.classList.contains("f_rotatechevron1")) {
      chevron1.classList.add("f_rotatechevron1");
    } else {
      chevron1.classList.remove("f_rotatechevron1");
    }
    if (!chevron2.classList.contains("f_rotatechevron2")) {
      chevron2.classList.add("f_rotatechevron2");
    } else {
      chevron2.classList.remove("f_rotatechevron2");
    }

    if (!item.listTitle) {
      console.log("ENTRO")
      let wrapper =
        event.currentTarget.nextElementSibling.firstChild.firstChild.firstChild;
      let elements = wrapper.children;

      if (
        wrapper.style.height === 0 ||
        wrapper.style.height === "0px" ||
        !wrapper.style.height
      ) {
        wrapper.style.height = 45 * item.list.length + "px";
      } else {
        wrapper.style.height = "0px";
      }

      for (const el of elements) {
          if (el.style.opacity === "visible") {
            el.style.visibility = "hidden";
            el.style.height = "0px";
            el.style.opacity = 0;
          } else {
            el.style.visibility = "visible";
            el.style.height = "45px";
            el.style.opacity = 1;
          
        }
      }
    }
  }

  return (
    <div className="f_sidebar_media_content">
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
        <div className="f_sidebar_media_content_link">
          <div className="f_sidebar_media_content_link_border">
            {item.listTitle && <p>{item.listTitle}</p>}

            <div className="f_sidebar_media_content_link_wrapper">
              {item.list?.map((el, index) => (
                <ContentLink key={index} text={el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
