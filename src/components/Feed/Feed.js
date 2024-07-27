import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Colors } from "../../Styles/Theme/Theme";
import SideBar from "../SideBar/SideBar";
import Video from "../Video/Video";
import { fetchFromAPI } from "../../utilities/Axios";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: `1px solid ${Colors.light_gray}`,
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography variant="body1" sx={{ mt: 1.5 }}>
          CopyRight 2024 YouTube
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          component="div"
          fontWeight="bold"
          mb={2}
          sx={{ color: `${Colors.white}` }}
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={1}
        >
          {selectedCategory}
          <Typography
            variant="h4"
            component="div"
            sx={{ color: "#F31503", opacity: "0.8" }}
          >
            Videos
          </Typography>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
