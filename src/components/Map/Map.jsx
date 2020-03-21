import React from "react";
import style from "./Map.module.css";

const Map = () => {
  return (
    <div className={style.mapOverlay}>
      <iframe
        title="map"
        className={style.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.7418893632207!2d31.220765315769594!3d51.4996038796339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d54614887ff75f%3A0x593c38ed3ecb2b09!2z0YPQuy4g0JPQsNCz0LDRgNC40L3QsCwgMTU4LCDQp9C10YDQvdC40LPQvtCyLCDQp9C10YDQvdC40LPQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDE0MDAw!5e0!3m2!1sru!2sua!4v1583763094418!5m2!1sru!2sua"
      ></iframe>
    </div>
  );
};

export default Map;
