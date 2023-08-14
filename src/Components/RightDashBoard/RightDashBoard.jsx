import React from "react";
import styles from "./RightBoard.module.css";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import img from "../../assets/cr7.jpg";
import WeatherGraph from "../WeatherGraph/WeatherGraph";
import RangeChart from "../RangeChart/RangeChart";

const RightDashBoard = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.HeaderText}>
          <h3>Welcome Back Isabella!</h3>
          <p>Check out today's weather information.</p>
        </div>
        <div className={styles.HeaderProfile}>
          <BsThreeDots className={styles.Dots} />
          <img src={img} alt="cr7Img" className={styles.profile} />
        </div>
      </div>
      <div className={styles.MiddleSection}>
        <div className={styles.GrafHeader}>
          <div className={styles.middleText}>
            <h4>Upcoming Hours</h4>
          </div>
          <div className={styles.Btn}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <button className={styles.Btn1}>
                <span> Rain precipitation</span> <IoIosArrowDown />
              </button>
            </div>
            <div>
              <button className={styles.Btn2}>
                <span>Next Days</span> <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        <WeatherGraph />
      </div>
      <div className={styles.BottomSection}>
        <RangeChart />
      </div>
    </div>
  );
};

export default RightDashBoard;
