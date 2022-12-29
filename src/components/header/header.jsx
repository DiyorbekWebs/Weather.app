import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function Header() {
  return (
    <Box sx={{ border: "1px solid white", }}>
      <Container maxWidth="lg">
        <Stack p="20px" alignItems="center">
          <Typography variant="h4" color={"#fff"} textAlign="center">
            Diyorbek Webs | Weather app project
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
