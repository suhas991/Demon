import React from "react";
import logo from "./img/logo.svg";
import profile from "./img/profile.svg";
import history from "./img/history.svg";
import wallet from "./img/wallet.svg";
import meta from "./img/meta.svg";
import "./Home.css";

export default function Nav1() {
  return (
    <div className="navWrapper">
      <div className="nav-left">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-right">
        <div className="nav-item">
          <img src={history} alt="histroy" />
        </div>
        <div className="nav-item">
          <img src={profile} alt="profile" />
        </div>
        <div className="nav-item">
          <img src={wallet} alt="wallet" />
        </div>
        <div className="nav-item1">
          <div className="nav-sub">
            <img src={meta} alt="metamask" />
          </div>
          <div className="nav-sub">0x99....9A9</div>
        </div>
      </div>
    </div>
  );
}
