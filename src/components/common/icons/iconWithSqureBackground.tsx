import { Box } from "@mui/material";
import type { JSX } from "react";

interface Props {
  Icon: JSX.ElementType;
  backgroundColor?: string;
}

const IconWithSqureBackground = ({ Icon, backgroundColor }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: backgroundColor || theme.palette.background.icon,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "32px",
        height: "32px",
        borderRadius: "6px",
      })}
    >
      <Icon
        sx={{
          width: "17px",
          height: "17px",
        }}
      />
    </Box>
  );
};

export default IconWithSqureBackground;
