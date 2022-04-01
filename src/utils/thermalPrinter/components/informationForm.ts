import { PosPrintData } from "electron-pos-printer";
import { capitalizeFirstLetter } from "../../../utils/stringResources";
import { capitalizeFirstLetterPhrase } from "../../../utils/stringResources";

export type InformationFormParams = {
  data: Record<string, string>;
  options?: {
    css: Record<string, string | number>;
  };
};

const sizeSpace = "5px";

const emptyLine: PosPrintData = {
  type: "text",
  value: "",
};

const lineSpaceTop: PosPrintData = {
  ...emptyLine,
  css: {
    "margin-top": sizeSpace,
  },
};

const lineSpaceBottom: PosPrintData = {
  ...emptyLine,
  css: {
    "margin-bottom": sizeSpace,
  },
};

const InformationForm = ({
  data,
  options: { css = {} },
}: InformationFormParams): PosPrintData[] => {
  const dataToLines = Object.entries(data).map(([key, value]) => ({
    type: "text",
    value: `${capitalizeFirstLetterPhrase(key)}: ${capitalizeFirstLetter(
      value
    )}`,
    css: css,
  })) as PosPrintData[];

  return [lineSpaceTop, ...dataToLines, lineSpaceBottom];
};

export default InformationForm;
