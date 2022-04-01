import { PosPrintData } from "electron-pos-printer";
import { join } from "path";

const Logo = (): PosPrintData => ({
  type: "image",
  path: join(__dirname, "..", "..", "..", "assets", "logo.svg"), // file path
  position: "center", // position of image: 'left' | 'center' | 'right'
  width: "60px", // width of image in px; default: auto
  height: "30px", // width of image in px; default: 50 or '50px'
  style: "padding: 0px; margin: 0px",
});

export default Logo;
