import { PosPrintData } from "electron-pos-printer";
import { join } from "path";
import HorizontalLine from "../components/horizontalLine";
import InformationForm, {
  InformationFormParams,
} from "../components/informationForm";
import Logo from "../components/logo";

const cashDeskDepletionTemplate = () => {
  const horizontalLine = HorizontalLine({ type: "dashed" });

  const informationFormData: InformationFormParams["data"] = {
    usuario: "Rafael Castro",
    "data/hora": "09/07/2021 14:35:58",
    caixa: "caixa 01",
    operacao: "Disney",
    pdv: "PDV 1",
    valor: "R$ 270,00",
  };

  const data: PosPrintData[] = [
    Logo(),
    ...horizontalLine,
    {
      type: "text",
      value: "****** S A N G R I A ******",
      position: "center",
      css: {
        "font-family": "'Courier New', monospace",
        "font-size": "80%",
        "font-weight": "100",
        "text-align": "center",
      },
    },
    ...horizontalLine,
    ...InformationForm({
      data: informationFormData,
      options: {
        css: {
          "font-family": "'Courier New', monospace",
          "font-size": "80%",
          "font-weight": "100",
          margin: 0,
        },
      },
    }),
    ...horizontalLine,
  ];

  return data;
};

export default cashDeskDepletionTemplate;
