import { Flex } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import React from "react";

const SplineIcon = ({ url }) => {
  return <Spline scene={url} width={300} height={300} />;
};

export default SplineIcon;

// position={'absolute'}
//   top= {"500px"}
//   left= {"50%"}
//   transform={"translate(-50%,-50%)"}
//   zIndex={10}
