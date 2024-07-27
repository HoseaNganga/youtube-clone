import React from "react";
import { Box, Stack, Button } from "@mui/material";
import YoutubeIcon from "@mui/icons-material/YouTube";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          variant="text"
          startIcon={<YoutubeIcon color="error" />}
          href="/"
          color="info"
        >
          YouTube
        </Button>
      </Box>

      <SearchBar />
    </Stack>
  );
};

export default NavBar;
