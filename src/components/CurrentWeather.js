import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      textAlign={"center"}
      color={"white"}
      // color={data.weather[0].icon.includes("n") ? "white" : "black"}
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

    //       <div className="parameter-row">
    //         <span className="parameter-label">Feels like</span>
    //         <span className="parameter-value">
    //           {Math.round(data.main.feels_like)}°C
    //         </span>
    //       </div>
    //       <div className="parameter-row">
    //         <span className="parameter-label">Wind</span>
    //         <span className="parameter-value">{data.wind.speed} m/s</span>
    //       </div>
    //       <div className="parameter-row">
    //         <span className="parameter-label">Humidity</span>
    //         <span className="parameter-value">{data.main.humidity}%</span>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  );
};

export default CurrentWeather;
