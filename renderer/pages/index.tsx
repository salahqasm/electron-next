import StaticData from "@/components/staticData";
import UsageCharts from "@/components/usageCharts";
import { Button, Grid } from "@chakra-ui/react";

export default function HomaPage() {
  return (
    <Grid p={4} gap={2}>
      <StaticData />
      <UsageCharts />
    </Grid>
  );
}
