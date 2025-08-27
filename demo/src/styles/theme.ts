import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        background: {
            default: "#fcf8f3", // soft beige background
        },
        primary: {
            main: "#8b5e3c", // brown for buttons/active elements
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#704d35", // darker brown for text highlights
        },
        text: {
            primary: "#5c3b1e", // main text color
            secondary: "#704d35",
        },
    },
    typography: {
        fontFamily: `"Roboto", "serif"`,
    },
});

export default theme;
