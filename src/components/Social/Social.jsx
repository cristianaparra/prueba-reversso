import React from "react";
import Apple from "../assets/Apple.png";
import Facebook from "../assets/Facebook.png";
import Google from "../assets/Google.png";
import "./Social.scss";

const Social = () => {
  return (
    <div className="card_social">
      <a href="https://Apple.com">
        <img src={Apple} />
      </a>
      <a href="https://facebook.com/">
        <img src={Facebook} />
      </a>
      <a href="https://google.com/">
        <img src={Google} />
      </a>
    </div>
  );
};

export default Social;
