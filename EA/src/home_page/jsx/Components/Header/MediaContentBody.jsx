export default function ContentLink({ listTitle, itemList, big }) {
  function handleClickContent(event) {
    const element = event.currentTarget.nextElementSibling;
    const parent = event.currentTarget.parentElement;
    const grandpa = parent.parentElement;
    const body = event.currentTarget.parentElement.parentElement.parentElement;

    const chevron = event.currentTarget.childNodes[1];
    const chevron1 = chevron.childNodes[0];
    const chevron2 = chevron.childNodes[1];

    const sectionHeight = 35 * (itemList.length + 1);
    const bodyHeight = parseInt(body.style.height.replace("px", ""));

    if (
      !element.style.height ||
      element.style.height === "0px" ||
      element.style.height === 0
    ) {
      element.style.height = sectionHeight + "px";
      parent.style.height = sectionHeight + "px";
      grandpa.style.height = sectionHeight + "px";
      grandpa.style.color = "black";
      body.style.height = bodyHeight + sectionHeight - 54 + "px";
      chevron1.classList.add("f_rotate_chevronx1");
      chevron2.classList.add("f_rotate_chevronx2");
    } else {
      element.style.height = "0px";
      parent.style.height = "0px";
      grandpa.style.height = "0px";
      grandpa.style.color = "grey";
      body.style.height = bodyHeight - sectionHeight + 54 + "px";
      chevron1.classList.remove("f_rotate_chevronx1");
      chevron2.classList.remove("f_rotate_chevronx2");
    }
  }

  return (
    <div
      className={`f_sidebar_media_content_link ${big ? "f_border_big" : ""}`}
    >
      <div className="f_sidebar_media_content_link_border">
        {listTitle && (
          <p onClick={handleClickContent}>
            {listTitle}
            <span className="f_chevronx">
              <span />
              <span />
            </span>
          </p>
        )}

        <div className="f_sidebar_media_content_link_wrapper">
          {itemList?.map((el, index) => (
            <div
              key={index}
              className={
                big
                  ? "f_sidebar_media_content_link_BIG"
                  : "f_sidebar_media_content_link_end"
              }
            >
              <a className="f_sidebar_media_a"> {el} </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
