import React from "react";
import style from "./SvgYoutube.module.css";

const SvgYoutube = () => {
  return (
    <div className={style.iconOverlay}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510">
        <g className={style.svgImg}>
          <path
            d="M459,61.2C443.7,56.1,349.35,51,255,51c-94.35,0-188.7,5.1-204,10.2C10.2,73.95,0,163.2,0,255s10.2,181.05,51,193.8
			C66.3,453.9,160.65,459,255,459c94.35,0,188.7-5.1,204-10.2c40.8-12.75,51-102,51-193.8S499.8,73.95,459,61.2z M204,369.75v-229.5
			L357,255L204,369.75z"
          />
        </g>
      </svg>
    </div>
  );
};

export default SvgYoutube;
