import { Grid } from "@nextui-org/react";
import React from "react";

export const GridComponent = ({ children }) => {
  return (
    <Grid.Container wrap="wrap" gap={2}>
      {children}
    </Grid.Container>
  );
};
