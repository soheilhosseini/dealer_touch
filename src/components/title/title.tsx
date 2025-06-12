import { Stack, Typography } from "@mui/material";
import type { TitleInterface } from "../../types/types";

const Title = ({
  isMainTitle,
  title,
  description,
  titleExtraComponent,
}: TitleInterface) => {
  return (
    <Stack direction={"column"} alignItems={"flex-start"}  sx={{width: '100%'}}>
      <Stack direction={'row'} justifyContent="space-between"  sx={{width: '100%'}}>
        <Typography variant={isMainTitle ? "h1" : "h3"}>{title}</Typography>
        {titleExtraComponent}
      </Stack>
      <Typography variant="h4" sx={{ fontWeight: "normal", mt: 1 }}>
        {description}
      </Typography>
    </Stack>
  );
};

export default Title;
