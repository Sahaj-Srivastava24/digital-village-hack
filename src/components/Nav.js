import React from "react";
import * as styles from "../static/css/style.js";
import tel from "../static/tel_aviv.png";
import dsc from "../static/dsc.png";
import ti from "../static/ti.png";
import meity from "../static/meity.png";
import step from "../static/step.png";

export default function Nav() {
  return (
    <div>
      <div
        className="nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 5rem 2rem 5rem",
        }}
      >
        <div className="nav-item">
          {/* <a href="#"> */}
          <img
            src={tel}
            alt=""
            style={styles.logoStyles}
            height="80px"
            width="140px"
          />
          {/* </a> */}
        </div>
        <div className="nav-item" style={{ transform: "translateX(-50px)" }}>
          {/* <a href="#"> */}
          <img
            src={meity}
            style={{
              ...styles.logoStyles,
              transform: "scale(1.5)",
              position: "relative",
              bottom: "45px",
            }}
            alt=""
            height="200px"
            width="200px"
          />
          {/* </a> */}
        </div>
        <div className="nav-item" style={{ transform: "translateX(-50px)" }}>
          {/* <a href="#"> */}
          <img
            src={dsc}
            style={styles.logoStyles}
            alt=""
            height="80px"
            width="530px"
          />
          {/* </a> */}
        </div>
        <div className="nav-item" style={{ transform: "translateX(-50px)" }}>
          {/* <a> */}
          <img
            src={step}
            style={{
              ...styles.logoStyles,
              transform: "scale(1.5)",
              position: "relative",
              bottom: "45px",
            }}
            alt=""
            height="200px"
            width="200px"
          />
          {/* </a> */}
        </div>
        <div className="nav-item">
          {/* <a href="#"> */}
          <img
            src={ti}
            alt=""
            style={styles.logoStyles}
            height="80px"
            width="60px"
          />
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}
