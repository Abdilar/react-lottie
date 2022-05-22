import React from "react";
import style from "../index.module.scss";

const LottieTemplate = props => (
  <div id={props.id} className={`${style.lottie} ${props.className}`} />
);

export { LottieTemplate };
