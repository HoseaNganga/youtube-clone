import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../../utilities/Axios";
import { useParams } from "react-router-dom";
import Video from "../Video/Video";
import { Colors } from "../../Styles/Theme/Theme";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
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
        Search Results for <span style={{ color: "red" }}>{searchTerm}</span>
        <Typography
          variant="h4"
          component="div"
          sx={{ color: "white", opacity: "0.8" }}
        >
          Videos:
        </Typography>
      </Typography>
      <Video videos={videos} />
    </Box>
  );
};

export default SearchFeed;
