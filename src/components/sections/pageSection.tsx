import { Grid } from "@mui/material";
import Title from "../title/title";
import type { TitleInterface } from "../../types/types";

const PageSection = ({
  children,
  titleData,
}: {
  children: React.ReactNode;
  titleData: TitleInterface;
}) => {
  return (
    <Grid container alignItems={"flex-start"} direction={"column"} spacing={6}>
      <Title {...titleData} />
      {children}
    </Grid>
  );
};

export default PageSection;
