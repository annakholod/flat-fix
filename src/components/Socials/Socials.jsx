import React from "react";
import style from "./Socials.module.css";
import SvgYoutube from "../../svg/socials/SvgYoutube/SvgYoutube";
import SvgFacebook from "../../svg/socials/SvgFacebook/SvgFacebook";
import SvgPinterest from "../../svg/socials/SvgPinterest/SvgPinterest";
import SvgGoogle from "../../svg/socials/SvgGoogle/SvgGoogle";

const Socials = () => {
  return (
    <div className={style.socials}>
      <SvgFacebook />
      <SvgPinterest />
      <SvgGoogle />
      <SvgYoutube />
    </div>
  );
};

export default Socials;
