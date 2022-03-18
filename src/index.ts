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

ipcMain.on("print", async (_event, { data, printerName }) => {
  const printers = await window.webContents.getPrintersAsync();

  console.log(printers);

  try {
    //printer
    PosPrinter.print(data, {
      printerName: printerName,
      silent: false,
      preview: true,
      timeOutPerLine: 5000,
    }).catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
});

export { ipcMain, ipcRenderer };
