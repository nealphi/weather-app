import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      textAlign={"center"}
      color={"white"}
      bg={"transparent"}
    >
      <Text m={1} fontSize={24}>
        {data.city}
      </Text>
      <Text m={1} fontSize={66}>
        {" "}
        {Math.round(data.main.temp)}°C
      </Text>

      <Text m={1} fontSize={24}>
        {data.weather[0].description}
      </Text>
      <Text m={2}>
        H:{Math.round(data.main.temp_max)}° L:{Math.round(data.main.temp_min)}°
      </Text>
    </Flex>
  );
};

export default CurrentWeather;
