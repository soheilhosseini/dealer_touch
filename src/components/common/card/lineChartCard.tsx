import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import CardWrapper from "./cardWrapper";
import { Box, Stack, Typography, useTheme } from "@mui/material";

interface Data {
  name: string;
  value: number;
}

interface Props {
  data: Data[];
  title: string;
}

const LineChartCard = ({ data, title }: Props) => {
  const theme = useTheme();
  return (
    <CardWrapper>
      <Stack direction={"row"} justifyContent={"space-between"} sx={{width: '100%'}}>
        <Typography variant="h5" sx={{ width: "100%", textAlign: "left" }}>
          {title}
        </Typography>
        <Stack direction={"row"} alignItems={'center'}>
          <Box
            sx={{
              minWidth: "12px",
              minHeight: "12px",
              maxWidth: "12px",
              maxHeight: "12px",
              backgroundColor: theme.palette.primary.main,
              borderRadius: '4px'
            }}
          />
          <Typography variant="h6" sx={{width: '100px'}}>Edits per second</Typography>
        </Stack>
      </Stack>
      <Stack sx={{ mt: 7, width: "100%", height: "206px" }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} />
            <YAxis tickLine={false} axisLine={false} dx={-10} />
            <CartesianGrid strokeDasharray="1" vertical={false} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={theme.palette.primary.main}
              fill={theme.palette.primary.light}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Stack>
    </CardWrapper>
  );
};

export default LineChartCard;
