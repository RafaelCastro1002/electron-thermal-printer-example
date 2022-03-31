import { app, BrowserWindow, ipcMain, ipcRenderer } from "electron";
import { PosPrinter } from "electron-pos-printer";
import path from "path";

let window: BrowserWindow;

app.on("ready", () => {
  window = new BrowserWindow({
    width: 650,
    height: 450,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      //   preload: path.join(__dirname, "preload.js"),
    },
  });

  window.loadFile(path.join(__dirname, "index.html"));
  window.webContents.openDevTools();
});

ipcMain.handle("get-printers", async (event) => {
  console.log("Getting printers");
  const printers = await window.webContents.getPrintersAsync();

  return printers;
});

ipcMain.on("print", async (_event, { data, printerName }) => {
  try {
    //printer
    await PosPrinter.print(data, {
      printerName: printerName,
      silent: true,
      preview: false,
      timeOutPerLine: 1 * (1000 * 60), // 1 minute
      margin: "50px 10px 10px 10px",
    });

    console.log("Success on print! :)");
  } catch (err) {
    console.log("Ops! Something wrong...");
    console.log(err);
  }
});

export { ipcMain, ipcRenderer, window };
