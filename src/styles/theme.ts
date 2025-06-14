import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2563EB",
      light: "#2563EB1A",
      dark: "#1E40AF",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#94A3B8",
      light: "#CBD5E1",
      dark: "#475569",
      contrastText: "#ffffff",
    },

    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
      icon: "#2563EB1A",
    },

    text: {
      primary: "#0F172A",
      secondary: "#64748B",
    },

    divider: "#F1F5F9",

    success: {
      main: "#22C55E",
    },

    error: {
      main: "#EF4444",
    },

    info: {
      main: "#3B82F6",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
  },

  typography: {
    h1: {
      fontSize: "1.5rem", // 30px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h2: {
      fontSize: "1.5rem", // 24px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h3: {
      fontSize: "1.25rem", // 20px
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "0.875rem", // 14px
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "0.75rem", // 12px
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },

  spacing: 4,
});

export default theme;
