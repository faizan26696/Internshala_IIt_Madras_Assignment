import React from "react";
import styles from "./WeatherGraph.module.css";
import ChartGraph from "../ChartGraph/ChartGraph";
import { HiOutlineSun } from "react-icons/hi";
import { TiWeatherCloudy } from "react-icons/ti";

const WeatherGraph = () => {
  const WeatherData = [
    {
      id: 1,
      time: " Now",
      icon: <HiOutlineSun className={styles.icon} />,
      temp: "27°",
      Percent: "23%",
    },
    {
      id: 2,
      time: "11:00",
      icon: <HiOutlineSun className={styles.icon} />,
      temp: "28°",
      Percent: "29%",
    },
    {
      id: 3,
      time: "12:00",
      icon: <TiWeatherCloudy className={styles.icon} />,
      temp: "28°",
      Percent: "58%",
    },

    {
      id: 4,
      time: "13:00",
      icon: <TiWeatherCloudy className={styles.icon} />,
      temp: "29°",
      Percent: "75%",
    },
    {
      id: 5,
      time: "14:00",
      icon: <HiOutlineSun className={styles.icon} />,
      temp: "30°",
      Percent: "33%",
    },
    {
      id: 6,
      time: "15:00",
      icon: <TiWeatherCloudy className={styles.icon} />,
      temp: "29°",
      Percent: "20%",
    },
    {
      id: 7,
      time: "16:00",
      icon: <TiWeatherCloudy className={styles.icon} />,
      temp: "29°",
      Percent: "73%",
    },
    {
      id: 8,
      time: "17:00",
      icon: <HiOutlineSun className={styles.icon} />,
      temp: "28°",
      Percent: "49%",
    },
  ];

  return (
    <div className={styles.Container}>
      {WeatherData.map((item, index) => {
        return (
          <div className={styles.Item} key={index}>
            <div className={styles.Time}>{item.time}</div>
            <div className={styles.Icon}>{item.icon}</div>
            <div className={styles.Temp}>{item.temp}</div>
            <div className={styles.Line}></div>
            <div className={styles.Percent}>{item.Percent}</div>
          </div>
        );
      })}
      <div
        style={{
          marginRight: "3.7rem",
          marginTop: "6rem",
          position: "absolute",
        }}
      >
        <ChartGraph />
      </div>
    </div>
  );
};

export default WeatherGraph;
