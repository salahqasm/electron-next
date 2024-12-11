import { TElectronAPI } from "./electronAPI";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  interface Window {
    electron: TElectronAPI;
  }
}
