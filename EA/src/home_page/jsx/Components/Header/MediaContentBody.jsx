export default function ContentLink({ listTitle, itemList, big }) {
  function handleClickContent(event) {
    const element = event.currentTarget.nextElementSibling;
    const parent = event.currentTarget.parentElement;
    const body = event.currentTarget.parentElement.parentElement.parentElement;
    const sectionHeight = 35 * itemList.length;
    const bodyHeight = parseInt(body.style.height.replace("px", ""));

    if (
      !element.style.height ||
      element.style.height === "0px" ||
      element.style.height === 0
    ) {
      element.style.height = sectionHeight + "px";
      parent.style.height = sectionHeight;
      body.style.height = bodyHeight + sectionHeight + "px";
    } else {
      element.style.height = "0px";
      parent.style.height = "0px";
      body.style.height = bodyHeight - sectionHeight + "px";
    }
  }

  return (
    <div className="f_sidebar_media_content_body">
      <div className="f_sidebar_media_content_link">
        <div className="f_sidebar_media_content_link_border">
          {listTitle && <p onClick={handleClickContent}>{listTitle}</p>}

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
    </div>
  );
}
