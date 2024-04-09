import ContentLink from "./ContentLink";

export default function MediaElementBig({ item }) {
  function handleClickHeader(event) {
    let element = event.currentTarget.nextElementSibling.firstChild;

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
  }

  function handleClickContent(event) {
    let elements = event.currentTarget.nextElementSibling.children;
    let wrapper = event.currentTarget.nextElementSibling;

    if (
      wrapper.style.height === 0 ||
      wrapper.style.height === "0px" ||
      !wrapper.style.height
    ) {
      wrapper.style.height = 30 * item.list.length + "px";
    } else {
      wrapper.style.height = "0px";
    }

    for (const element of elements) {
      if (element.nodeName != "P") {
        if (element.style.visibility === "visible") {
          element.style.visibility = "hidden";
          element.style.height = "0px";
          element.style.opacity = 0;
        } else {
          element.style.visibility = "visible";
          element.style.height = "35px";
          element.style.opacity = 1;
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

      <div className="f_sidebar_media_content_body" id="f_body_big">
        <div className="f_sidebar_media_content_link">
          {item.listTitle && (
            <p onClick={handleClickContent}>{item.listTitle}</p>
          )}

          <div className="f_sidebar_media_content_link_wrapper">
            {item.list?.map((el, index) => (
              <ContentLink key={index} text={el} />
            ))}
          </div>

          {item.listTitle2 && (
            <div className="f_sidebar_media_content_link_border">
              <p onClick={handleClickContent}>{item.listTitle2}</p>
              <div className="f_sidebar_media_content_link_wrapper">
                {item.list2?.map((el, index) => (
                  <ContentLink key={index} text={el} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
