import React from "react";
import styles from "./LeftBoard.module.css";
import { BsPlusSquareFill, BsSunrise, BsSunset } from "react-icons/bs";
import { PiDotOutlineThin } from "react-icons/pi";
import Switch from "@mui/material/Switch";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxSun } from "react-icons/rx";
import { BiNavigation } from "react-icons/bi";

const LeftDashBoard = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className={styles.Container}>
      <div className={styles.BgImg}>
        {/* ----------------------------------------Header_Section----------------------------- */}
        <div className={styles.header}>
          <BsPlusSquareFill className={styles.PlusSymbol} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.dash}></div>
            <PiDotOutlineThin className={styles.dots} />
            <PiDotOutlineThin className={styles.dots} />
          </div>
          <div className={styles.SwitchBtn}>
            <span>°C</span>

            <Switch {...label} />
            <span>°F </span>
          </div>
        </div>
        {/* -----------------------------------Middle_Section---------------------------------- */}

        <div className={styles.middleSection}>
          <div className={styles.TextSection}>
            <h2>
              <BiNavigation style={{ fontSize: "14px" }} />
              New York, USA
            </h2>
            <p>Today 28 Sept</p>
          </div>
          <div>
            <span className={styles.TimeSection}>
              <BsSunrise />
              <h3>07:19</h3>
            </span>
            <span className={styles.TimeSection}>
              <BsSunset />
              <h3>19:32</h3>
            </span>
          </div>
        </div>

        {/* ----------------------------------Bottom_Section------------------------------ */}
        <div className={styles.bottomSection}>
          <div className={styles.TempShow}>
            <IoIosArrowBack />
            <h1>27°</h1>
            <IoIosArrowForward />
          </div>
          <div className={styles.WeatherShow}>
            <RxSun />
            <h3>Sunny</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftDashBoard;
