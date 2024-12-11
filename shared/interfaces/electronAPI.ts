import { IpcRendererEvent } from "electron";

export type TResources = {
  totalStorage: number;
  cpuName: string;
  cpuSpeed: number;
  totalMemory: number;
};

export type TElectronAPI = {
  sayHello: () => void;
  receiveHello: (
    handler: (event: IpcRendererEvent, ...args: any[]) => void
  ) => void;
  stopReceivingHello: (
    handler: (event: IpcRendererEvent, ...args: any[]) => void
  ) => void;
  getStaticData: () => Promise<TResources>;
};
