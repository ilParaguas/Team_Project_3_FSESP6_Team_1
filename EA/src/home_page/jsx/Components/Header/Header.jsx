import NavbarBlack from "./NavbarBlack";
import NavbarWhite from "./NavbarWhite";
import Cover from "./Cover";

export default function Header() {
  return (
    <div>
      <Cover />
      <div id="f_nav">
        <NavbarBlack />
        <NavbarWhite />
      </div>
    </div>
  );
}
