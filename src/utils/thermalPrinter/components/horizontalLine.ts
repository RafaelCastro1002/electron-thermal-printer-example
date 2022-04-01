import { PosPrintData, PosPrintPosition } from "electron-pos-printer";

type HorizontalLineParams = {
  type: "dotted" | "dashed" | "solid" | "double";
  size?: string;
  color?: string;
  width?: string;
  position?: PosPrintPosition;
};

const emptyLine: PosPrintData = {
  type: "text",
  value: "",
};

const HorizontalLine = ({
  type,
  size = "1px",
  color = "black",
  width = "100%",
  position = "left",
}: HorizontalLineParams): PosPrintData[] => [
  {
    ...emptyLine,
    css: {
      "border-bottom": `${size} ${type} ${color}`,
      width,
      margin: 0,
      "margin-bottom": "1px",
    },
    position,
  },
  {
    ...emptyLine,
    css: {
      "border-bottom": `${size} ${type} ${color}`,
      width,
      margin: 0,
      "margin-bottom": "1px",
    },
    position,
  },
];

export default HorizontalLine;
