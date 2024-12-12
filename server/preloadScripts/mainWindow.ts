import { TElectronAPI } from "../../shared/interfaces/electronAPI";
import { contextBridge, ipcRenderer } from "electron";

let electronAPI: TElectronAPI = {
  getStaticData: async () => {
    return await ipcRenderer.invoke("getStaticResources");
  },
  getUsageData: async () => {
    return await ipcRenderer.invoke("getUsageData");
  },
  sayHello: () => ipcRenderer.send("message", "hi from next"),
  receiveHello: (handler) => ipcRenderer.on("message", handler),
  stopReceivingHello: (handler) =>
    ipcRenderer.removeListener("message", handler),
};
contextBridge.exposeInMainWorld("electron", electronAPI);
