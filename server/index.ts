import { join } from "path";
import { BrowserWindow, app, ipcMain, IpcMainEvent } from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";
import { getStaticData } from "./resourceManager";

// Prepare the renderer once the app is ready
app.on("ready", async () => {
  await prepareNext("./renderer");

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  const url = isDev
    ? "http://localhost:8000/"
    : new URL(join("file:", __dirname, "../../renderer/out/index.html"));

  mainWindow.loadURL(url.toString());
  mainWindow.webContents.openDevTools();
});

app.on("window-all-closed", app.quit);

ipcMain.on("message", (event: IpcMainEvent, message: any) => {
  console.log(message);
  event.sender.send("message", "hi from electron");
});

ipcMain.handle("getStaticResources", () => {
  return getStaticData();
});
