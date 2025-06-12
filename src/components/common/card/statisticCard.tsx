import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FilledEarthIcon from "../../../assets/icons/earth";
import IconWithSqureBackground from "../icons/iconWithSqureBackground";
import OutlinedEarthIcon from "../../../assets/icons/outlinedEarth";
import { addCommas, handleRateCalculator } from "../../../utils/general";
import type { ServerDataItem } from "../../../types/entities";

interface Props {
  isSelected: boolean;
  data: ServerDataItem[];
  onClick: () => void;
  title: string;
}

export default function StatisticCard({
  isSelected,
  data,
  onClick,
  title,
}: Props) {
  const { second, minute, hour, secondAvg, minuteAvg, hourAvg } =
    handleRateCalculator(data);

  const secondText = `${addCommas(second)} (avg: ${addCommas(secondAvg)})`;
  const minuteText = `${addCommas(minute)} (avg: ${addCommas(minuteAvg)})`;
  const hourText = `${addCommas(hour)} (avg: ${addCommas(hourAvg)})`;
  return (
    <Card
      variant="outlined"
      sx={{
        width: "288px",
        cursor: "pointer",
        borderColor: isSelected ? "primary.main" : "",
        transition: "100ms",
      }}
      onClick={onClick}
    >
      <Stack direction={"column"}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <IconWithSqureBackground
            Icon={isSelected ? FilledEarthIcon : OutlinedEarthIcon}
          />
          <Typography
            marginLeft={3}
            variant="h4"
            sx={(theme) => ({
              color: isSelected ? theme.palette.primary.main : "",
              fontWeight: isSelected ? 700 : "",
              transition: "100ms",
            })}
          >
            {title}
          </Typography>
        </Stack>
        <Stack sx={{ mt: 6 }}>
          <RowItem title={"Total"} value={data.length} isTitle={true} />
          <RowItem title={"Post second"} value={secondText} />
          <RowItem title={"Post minute"} value={minuteText} />
          <RowItem title={"Post hour"} value={hourText} />
        </Stack>
      </Stack>
    </Card>
  );
}

interface RowItemProps {
  title: string;
  value: string | number;
  isTitle?: boolean;
}

const RowItem = ({ title, value, isTitle }: RowItemProps) => (
  <Stack
    direction={"row"}
    justifyContent={"space-between"}
    sx={{
      color: isTitle ? "" : "secondary.dark",
      fontWeight: isTitle ? 500 : "",
    }}
  >
    <Typography variant="h5" sx={{ fontWeight: isTitle ? 500 : 400 }}>
      {title}
    </Typography>
    <Typography variant="h5" sx={{ fontWeight: isTitle ? 500 : 400 }}>
      {value}
    </Typography>
  </Stack>
);
