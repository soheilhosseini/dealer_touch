import { Card, Stack, Typography } from "@mui/material";
import type { CardInterface } from "../../../types/types";

interface Props {
  isSelected?: boolean;
}

export default function ChartChard({ isSelected }: Props) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "288px",
        borderColor: isSelected ? "primary.main" : "",
        transition: "100ms",
      }}
    >
      <Stack direction={"column"}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            marginLeft={3}
            variant="h4"
            sx={(theme) => ({
              color: isSelected ? theme.palette.primary.main : "",
              fontWeight: isSelected ? 700 : "",
              transition: "100ms",
            })}
          >

          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
