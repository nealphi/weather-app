import { Flex } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import React from "react";

const SplineIcon = ({ url }) => {
  return (
    <Flex mt={40}>
      <Spline scene={url} width={300} height={300} />
    </Flex>
  );
};

export default SplineIcon;

// position={'absolute'}
//   top= {"500px"}
//   left= {"50%"}
//   transform={"translate(-50%,-50%)"}
//   zIndex={10}
