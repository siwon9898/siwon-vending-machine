import DiagramImg from "@images/Diagram.png";
import { Box, styled } from "@mui/material";
const Diagram = () => {
  return <DiagramBox />;
};

const DiagramBox = styled(Box)({
  width: "100%",
  height: "100%",
  background: `url(${DiagramImg}) 50% 50% no-repeat`,
  backgroundSize: "cover",
  "& > img": {
    width: "100%",
  },
});

export default Diagram;
