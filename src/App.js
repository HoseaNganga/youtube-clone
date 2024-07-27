import { Box, ThemeProvider } from "@mui/material";
import {
  NavBar,
  Channel,
  SearchFeed,
  Feed,
  VideoDetails,
} from "./components/index";
import { Routes, Route } from "react-router-dom";
import theme from "./Styles/Theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: "#000" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
