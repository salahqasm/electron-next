import { IpcRendererEvent } from "electron";

export type TElectronAPI = {
  sayHello: () => void;
  receiveHello: (
    handler: (event: IpcRendererEvent, ...args: any[]) => void
  ) => void;
  stopReceivingHello: (
    handler: (event: IpcRendererEvent, ...args: any[]) => void
  ) => void;
};
