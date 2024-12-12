import { TResources } from "@shared/interfaces/electronAPI";
import React, { useCallback, useEffect, useState } from "react";
import StaticDataRenderer from "./StaticDataRenderer";

export default function StaticData() {
  const [staticData, setStaticData] = useState<TResources | null>(null);
  const getData = useCallback(async () => {
    const data = await window.electron.getStaticData();
    setStaticData(data);
  }, []);

  useEffect(() => {
    if (staticData) return;
    getData();
  }, [getData]);

  return <div>{staticData && <StaticDataRenderer data={staticData} />}</div>;
}
