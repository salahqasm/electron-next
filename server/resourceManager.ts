import OsUtils from "os-utils";
import os from "os";
import disk from "diskusage";
import { TResources, TUsageData } from "../shared/interfaces/electronAPI";

export function getStaticData(): TResources {
  const totalStorage = getResources();
  const cpuName = os.cpus()[0].model;
  const cpuSpeed = os.cpus()[0].speed;
  const totalMemory = Math.round(OsUtils.totalmem());

  return {
    totalStorage: totalStorage.total,
    freeStorage: totalStorage.free,
    cpuName,
    cpuSpeed,
    totalMemory,
  };
}

export async function getUsageData(): Promise<TUsageData> {
  const ramUsage = getRamUsage();
  const cpuUsage = await getCpuUsage();
  const storageUsage = getResources();
  return {
    ramUsage,
    cpuUsage,
    storageUsage: storageUsage.usage,
  };
}

function getRamUsage() {
  const freeMemory = OsUtils.freememPercentage();
  return 1 - freeMemory;
}

async function getCpuUsage() {
  return new Promise((resolve) => OsUtils.cpuUsage(resolve));
}

function getResources() {
  const path = process.platform === "win32" ? "C:\\" : "/";
  const { free, total } = disk.checkSync(path);

  return {
    total: Math.round(total / 1_000_000_000),
    usage: 1 - free / total,
    free: free / 1_000_000_000,
  };
}
