export default function DropdownBig({ item }) {
  return (
    <div className="f_dropdown">
      <p className="f_dropbtn"> {item.title} </p>
      <div className="f_chevron">
        <span></span>
        <span></span>
      </div>

      <div className="f_dropdown_wrapper">
        <div className="f_dropcontent">
          <a href="" className="f_dropdown_title">
            {item.listTitle}
          </a>
          {item.list?.map((item, index) => (
            <a href="" key={index}>
              {item}
            </a>
          ))}
          <a href="" className="f_dropdown_title">
            {item.listTitle2}
          </a>
          {item.list2?.map((item, index) => (
            <a href="" key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
