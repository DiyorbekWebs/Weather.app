import React from "react";
import Card from "@mui/material/Card";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
export function Card1({
  img = null,
  name = null,
  country = null,
  deg = null,
  description = null,
}) {
  return (
    <Card variant="elevation" sx={{ backgroundColor: "#f0f8ff29" }}>
      <Stack
        direction={"column"}
        gap="15px"
        alignItems={"center"}
        justifyContent="center"
        padding="30px 50px"
        borderRadius="10px"
      >
        <img src={img} alt="icon" />
        <Typography variant="h4">
          {name}
          <sup>{country}</sup>
        </Typography>
        <Typography variant="h4">{deg}&deg;C</Typography>
        <Typography variant="h4">{description}</Typography>
      </Stack>
    </Card>
  );
}
