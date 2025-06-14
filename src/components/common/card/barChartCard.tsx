import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import CardWrapper from "./cardWrapper";
import { Stack, Typography } from "@mui/material";

interface Data {
  name: string;
  value: number;
}

interface Props {
  data: Data[];
  title: string;
}

const BarChartCard = ({ data, title }: Props) => {
  return (
    <CardWrapper>
      <Typography variant="h5" sx={{ width: "100%", textAlign: "left" }}>
        {title}
      </Typography>
      <Stack sx={{mt: 7}}>
        <BarChart width={344} height={206} data={data} barSize={32}>
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 40, right: 40 }}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748B", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748B", fontSize: 12 }}
          />
          <CartesianGrid strokeDasharray="1 2" vertical={false} />
          <Bar
            dataKey="value"
            fill="#2563EB"
            background={{ fill: "#2563EB1A" }}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </Stack>
    </CardWrapper>
  );
};

export default BarChartCard;
