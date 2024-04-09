export default function Dropdown({ header, itemList }) {
  return (
    <div className="f_dropdown">
      <p className="f_dropbtn"> {header} </p>
      <div className="f_chevron">
        <span></span>
        <span></span>
      </div>

      <div className="f_dropdown_wrapper">
        <div className="f_dropcontent f_dropdown_content">
          {itemList?.map((item, index) => (
            <a href="" key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
