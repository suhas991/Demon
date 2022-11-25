import React from "react";
import logo from "./img/logo.svg";
import profile from "./img/profile.svg";
import history from "./img/history.svg";
import wallet from "./img/wallet.svg";
import "./Home.css";

export default function Nav1() {
  return (
    <div className="connect">
      <div className="nav-item1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-item2">
        <img src={history} alt="histroy" />

        <img src={profile} alt="profile" />

        <img src={wallet} alt="wallet" />
      </div>
    </div>
  );
}
