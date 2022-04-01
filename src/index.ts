import { app, BrowserWindow, ipcMain, ipcRenderer } from "electron";
import path from "path";
import ThermalPrinterService from "./services/thermalPrinter";
import cashDeskDepletionTemplate from "./utils/thermalPrinter/templates/cashDeskDepletion";

let window: BrowserWindow;

app.on("ready", () => {
  window = new BrowserWindow({
    width: 650,
    height: 450,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  window.loadFile(path.join(__dirname, "renderer", "index.html"));
  // window.webContents.openDevTools();
});

ipcMain.handle("get-printers", async (event) => {
  console.log("Getting printers");
  const printers = await window.webContents.getPrintersAsync();

  return printers;
});

ipcMain.on(
  "print",
  async (
    _event,
    { printerName, widthPage, verticalMargin, horizontalMargin }
  ) => {
    const data = cashDeskDepletionTemplate();
    await ThermalPrinterService({
      printerName,
      widthPage,
      verticalMargin,
      horizontalMargin,
      data,
    });
  }
);

export { ipcMain, ipcRenderer, window };
