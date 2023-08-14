import React from "react";
import styles from "../RangeChart/RangeChart.module.css";
import { LuDroplets, LuCloudRain } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { CiTempHigh } from "react-icons/ci";
import { BsUmbrella } from "react-icons/bs";
import ProgressRange from "../ReusableComponent/ProgressRange";

const RangeChartsData = () => {
  return (
    <div>
      <h5
        style={{
          marginLeft: "2.4rem",
          lineHeight: "0",
          fontSize: "16px",
          fontWeight: "550",
        }}
      >
        More details of today's weather
      </h5>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2px",
            marginBottom: "10px",
            width: "900px",
          }}
        >
          <Humidity />
          <Wind />
          <Precipitation />
        </div>
        <div style={{ display: "flex", gap: "2px", width: "900px" }}>
          <UVind />
          <Temp />
          <Rain />
        </div>
      </div>
    </div>
  );
};

export default RangeChartsData;

export const Humidity = () => {
  const Style = {
    width: "50px",
  };
  return (
    <>
      <div className={styles.ChartContainer}>
        <div className={styles.ChartHeader}>
          <h5 style={{ fontSize: "16px", fontWeight: "500" }}>Humidity</h5>
          <LuDroplets className={styles.ChartIcon} />
        </div>
        <div className={styles.ChartInfo}>
          <h2>
            82% <span className={styles.smText}>bad</span>
          </h2>
        </div>
        <div className={styles.ChartRange}>
          <div className={styles.NumRange}>
            <h5>good</h5>
            <h5>normal</h5>
            <h5>bad</h5>
          </div>
          <div className={styles.RangeLine}>
            <ProgressRange value={100} WidStyle={Style} />
            <ProgressRange value={60} WidStyle={Style} />
            <ProgressRange value={20} WidStyle={Style} />
          </div>
        </div>
      </div>
    </>
  );
};

export const Wind = () => {
  return (
    <>
      <div className={styles.ChartContainer}>
        <div className={styles.ChartHeader}>
          <h5 style={{ fontSize: "16px", fontWeight: "500" }}>Wind</h5>
          <FaWind className={styles.ChartIcon} />
        </div>
        <div className={styles.ChartInfo}>
          <h2>
            8<span className={styles.smText}>km/h</span>
          </h2>
        </div>
        <div className={styles.ChartRange}>
          <div className={styles.NumRange}>
            <h5>good</h5>
            <h5>normal</h5>
            <h5>bad</h5>
          </div>
          <div className={styles.RangeLine}>
            <ProgressRange value={100} />
            <ProgressRange value={60} />
            <ProgressRange value={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export const Precipitation = () => {
  const Style = {
    width: "15px",
  };
  return (
    <>
      <div className={styles.ChartContainer}>
        <div className={styles.ChartHeader}>
          <h5 style={{ fontSize: "16px", fontWeight: "500" }}>Precipitation</h5>
          <FiSun className={styles.ChartIcon} />
        </div>
        <div className={styles.ChartInfo}>
          <h2>
            4 <span className={styles.smText}>medium</span>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.8rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              fontSize: "12px",
              fontWeight: "400",
              color: "grey",
              marginTop: "1.8rem",
              gap: "0.5rem",
            }}
          >
            <span>0</span>
            <span>10</span>
            <span>20</span>
            <span>30</span>
            <span>40</span>
            <span>50</span>
            <span>60</span>
            <span>70</span>
            <span>80</span>
            <span>90</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "10px",
              gap: "5px",
            }}
          >
            <ProgressRange value={100} WidStyle={Style} />
            <ProgressRange value={60} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
          </div>
        </div>
      </div>
    </>
  );
};

export const UVind = () => {
  const Style = {
    width: "25px",
  };
  return (
    <>
      <div className={styles.ChartContainer}>
        <div className={styles.ChartHeader}>
          <h5 style={{ fontSize: "16px", fontWeight: "500" }}>UV index</h5>
          <LuCloudRain className={styles.ChartIcon} />
        </div>
        <div className={styles.ChartInfo}>
          <h2>
            1.4 <span className={styles.smText}>cm</span>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.8rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              fontSize: "12px",
              fontWeight: "400",
              color: "grey",
              marginTop: "1.8rem",
              gap: "0.5rem",
            }}
          >
            <span>0-2</span>
            <span>3-5</span>
            <span>6-7</span>
            <span>8-10</span>
            <span>11+</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "10px",
              gap: "5px",
            }}
          >
            <ProgressRange value={100} WidStyle={Style} />
            <ProgressRange value={60} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
            <ProgressRange value={0} WidStyle={Style} />
          </div>
        </div>
      </div>
    </>
  );
};

export const Temp = () => {
  return (
    <>
      <div className={styles.ChartContainer}>
        <div className={styles.ChartHeader}>
          <h5 style={{ fontSize: "16px", fontWeight: "500" }}>Feels like</h5>
          <CiTempHigh className={styles.ChartIcon} />
        </div>
        <div className={styles.ChartInfo}>
          <h2>30°</h2>
        </div>
        <div className={styles.ChartRange}>
          <div className={styles.NumRange}>
            <h5>0°</h5>
            <h5>25°</h5>
            <h5>50°</h5>
          </div>
          <div className={styles.RangeLine}>
            <ProgressRange value={60} />
          </div>
        </div>
      </div>
    </>
  );
};

export const Rain = () => {
  const Style = {
    width: "70px",
  };
  return (
    <>
      <div className={styles.ChartContainer}>
        <div className={styles.ChartHeader}>
          <h5 style={{ fontSize: "16px", fontWeight: "500" }}>
            Chance of rain
          </h5>
          <BsUmbrella className={styles.ChartIcon} />
        </div>
        <div className={styles.ChartInfo}>
          <h2>42%</h2>
        </div>
        <div className={styles.ChartRange}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <h5>0%</h5>
            <h5>25%</h5>
            <h5>50%</h5>
            <h5>75%</h5>
            <h5>100%</h5>
          </div>
          <div className={styles.RangeLine}>
            <ProgressRange value={40} width={Style} />
          </div>
        </div>
      </div>
    </>
  );
};
