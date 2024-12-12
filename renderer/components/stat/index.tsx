import React from "react";
import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
type Props = {
  label: string;
  value: string;
  meta?: string;
};

export default function Status({ label, value, meta }: Props) {
  return (
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
      {meta && <StatHelpText>{meta}</StatHelpText>}
    </Stat>
  );
}
