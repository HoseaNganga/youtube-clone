import { Stack, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../Theme/Theme";

export const FeedContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
  },
}));

export const FeedContainerInnerContainer = styled(Box)(({ theme }) => ({
  height: "auto",
  [theme.breakpoints.up("md")]: {
    height: "92vh",
    padding: "16px",
  },
  borderRight: `1px solid ${Colors.light_gray}`,
  padding: 0,
}));
