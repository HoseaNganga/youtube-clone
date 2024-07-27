import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../Theme/Theme";

export const SearchBarContainer = styled(Typography)(() => ({
  display: "flex",
  flexGrow: 2,
  alignItems: "center",
  justifyContent: "center",
}));

export const SearchBarField = styled(TextField)(() => ({
  padding: "1rem",
  color: Colors.black,
}));
