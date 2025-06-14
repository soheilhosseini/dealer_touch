import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

interface Props {
  isSelected?: boolean;
  onClick?: () => void;
}

export default function CardWrapper({
  isSelected,
  children,
  onClick,
}: React.PropsWithChildren<Props>) {
  return (
    <Card
      variant="outlined"
      sx={{
        cursor: "pointer",
        borderColor: isSelected ? "primary.main" : "",
        transition: "100ms",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <Stack
        direction={"column"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {children}
      </Stack>
    </Card>
  );
}
