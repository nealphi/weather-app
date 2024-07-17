import { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./services/api";
import SplineIcon from "./components/SplineIcon";
import { Box } from "@chakra-ui/react";
import Forecast from "./components/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log("searchData", searchData);
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );
    const forcastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forcastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log("currentWeather", currentWeather);
  console.log("forecast", forecast);

  useEffect(() => {
    handleOnSearchChange({
      value: "43.670277777 -79.386666666",
      label: "Toronto, CA",
    });
  }, []);

  return (
    <Box className="App">
      <Search onSearchChange={handleOnSearchChange} />

      <Box
        className="Weather"

        bgColor={
          currentWeather && currentWeather.weather[0].icon.includes("n")
            ? "#191D26"
            : "#ADB7C6"
        }
      >
        {currentWeather && <CurrentWeather data={currentWeather} />}

        {currentWeather && currentWeather.weather[0].icon === "01d" && (
          <SplineIcon
            url={"https://prod.spline.design/FnWAEN-OvMS63m-i/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "01n" && (
          <SplineIcon
            url={"https://prod.spline.design/PhBZkFxKFvZd5TWk/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "02d" && (
          <SplineIcon
            url={"https://prod.spline.design/w26K3Ksy5G4b2yIP/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "02n" && (
          <SplineIcon
            url={"https://prod.spline.design/PhBZkFxKFvZd5TWk/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "03d" && (
          <SplineIcon
            url={"https://prod.spline.design/wtyat8P1YOVVkmI3/scene.splinecode"  }
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "04d" && (
          <SplineIcon
            url={"https://prod.spline.design/wtyat8P1YOVVkmI3/scene.splinecode" }
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "03n" && (
          <SplineIcon
            url={"https://prod.spline.design/qd4aqvjOuCAyjWAH/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "04n" && (
          <SplineIcon
            url={"https://prod.spline.design/qd4aqvjOuCAyjWAH/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "09d" && (
          <SplineIcon
            url={"https://prod.spline.design/QBKIXHAo6R-eSZh8/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "09n" && (
          <SplineIcon
            url={"https://prod.spline.design/4zFwFsNaFGrt5PZt/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "10d" && (
          <SplineIcon
            url={"https://prod.spline.design/P8mQjl9ZFN1n9Cyt/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "10n" && (
          <SplineIcon
            url={"https://prod.spline.design/ueF7RWTcjMA9KR7d/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "11d" && (
          <SplineIcon
            url={"https://prod.spline.design/AE3Ec05IuH4mMW25/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "11n" && (
          <SplineIcon
            url={"https://prod.spline.design/EOAlJr65ZSe4HKHm/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "13d" && (
          <SplineIcon
            url={"https://prod.spline.design/TF6fNkIvVgTEWlIu/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "13n" && (
          <SplineIcon
            url={"https://prod.spline.design/LjRl4OgSRNXJNdYy/scene.splinecode"}
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "50d" && (
          <SplineIcon
            url={"https://prod.spline.design/wtyat8P1YOVVkmI3/scene.splinecode"  }
          />
        )}
        {currentWeather && currentWeather.weather[0].icon === "50n" && (
          <SplineIcon
            url={"https://prod.spline.design/qd4aqvjOuCAyjWAH/scene.splinecode"}
          />
        )}
        {forecast && <Forecast data={forecast} />}
      </Box>
    </Box>
  );
}

export default App;
