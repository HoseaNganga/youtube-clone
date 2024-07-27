import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";

const Video = ({ videos, direction }) => {
  if (!videos?.length) return "loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      alignItems={"center"}
    >
      {videos.map((video, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Video;
