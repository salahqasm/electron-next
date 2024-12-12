import React from "react";
import Status from "../stat";
import { TResources } from "@shared/interfaces/electronAPI";
import { Flex } from "@chakra-ui/react";

export default function StaticDataRenderer({ data }: { data: TResources }) {
  return (
    <Flex wrap={"wrap"} gap={3}>
      <Status
        label="CPU"
        value={data.cpuName}
        // meta={data.cpuSpeed.toString() + "GHz"}
      />
      <Status
        label="Storage"
        value={data.totalStorage + "GB"}
        meta={data.freeStorage + "GB free"}
      />
      <Status label="RAM" value={data.totalMemory + "GB"} meta="Total" />
    </Flex>
  );
}
