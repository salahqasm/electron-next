import React, { useCallback, useEffect, useRef, useState } from "react";
import { TUsageData } from "@shared/interfaces/electronAPI";
import LineChart from "./LineChart";
import { Box } from "@chakra-ui/react";

export default function UsageCharts() {
  const [usageData, setUsageData] = useState<TUsageData[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const getData = useCallback(async () => {
    const res = await window.electron.getUsageData();
    setUsageData((prev) => [...prev.slice(-20), res]);
  }, []);
  useEffect(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      getData();
    }, 500);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [getData]);

  return (
    <Box width={"full"}>
      <div>
        <LineChart
          title="CPU Usage"
          data={usageData.map((elem) => elem.cpuUsage)}
        />
      </div>
      <LineChart
        title="RAM Usage"
        data={usageData.map((elem) => elem.ramUsage)}
      />
    </Box>
  );
}
