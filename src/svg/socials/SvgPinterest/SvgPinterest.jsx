import React from "react";
import style from "./SvgPinterest.module.css";

const SvgPinterest = () => {
  return (
    <div className={style.iconOverlay}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510">
        <g className={style.svgImg}>
          <path
            d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
			 M280.5,362.1c-20.4,0-40.8-7.649-53.55-22.949l-25.5,81.6l-2.55,5.1l0,0c-5.1,7.65-12.75,12.75-22.95,12.75
			c-15.3,0-28.05-12.75-28.05-28.05c0-2.55,0-2.55,0-2.55l0,0l2.55-5.1l45.9-142.801c0,0-5.1-15.3-5.1-38.25
			c0-43.35,22.95-56.1,43.35-56.1c17.85,0,35.7,7.65,35.7,33.15c0,33.15-22.95,51-22.95,76.5c0,17.85,15.3,33.149,33.15,33.149
			c58.65,0,81.6-45.899,81.6-86.7c0-56.1-48.449-102-107.1-102c-58.65,0-107.1,45.9-107.1,102c0,17.85,5.1,33.15,12.75,48.45
			c2.55,5.101,2.55,7.65,2.55,12.75c0,15.3-10.2,25.5-25.5,25.5c-10.2,0-17.85-5.1-22.95-12.75c-12.75-22.95-20.4-48.45-20.4-76.5
			c0-84.15,71.4-153,158.1-153s158.1,68.85,158.1,153C413.1,290.7,372.3,362.1,280.5,362.1z"
          />
        </g>
      </svg>
    </div>
  );
};

export default SvgPinterest;