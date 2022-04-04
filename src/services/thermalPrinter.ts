import { PosPrintData, PosPrinter } from "electron-pos-printer";

type configPrinterOptions = {
  printerName: string;
  widthPage: string;
  verticalMargin: number;
  horizontalMargin: number;
  data: PosPrintData[];
};

const ThermalPrinterService = async ({
  printerName,
  widthPage,
  verticalMargin,
  horizontalMargin,
  data,
}: configPrinterOptions) => {
  try {
    //printer
    await PosPrinter.print(data, {
      printerName: printerName,
      silent: true,
      preview: true,
      timeOutPerLine: 1 * (1000 * 60), // 1 minute
      margin: `${verticalMargin}px ${horizontalMargin}px`,
      width: `${widthPage}px`,
      pageSize: {
        height: 30,
        width: 20,
      },
    });

    console.log("Success on print! :)");
  } catch (err) {
    console.log("Ops! Something wrong...");
    console.log(err);
  }
};

export default ThermalPrinterService;
