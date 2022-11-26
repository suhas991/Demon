import React from "react";
import logoO from "./img/logoola.png";
import logoU from "./img/logouber.jpg";
import logoR from "./img/logorapido.png";
import logoC from "./img/logocrypt.png";
import "./Home.css";
import { ThemeIcon, RingProgress, Text, Center } from "@mantine/core";
import { IconCheck } from "@tabler/icons";

export default function Rating() {
  return (
    <div className="RideD">
      <div className="Title">
        <h1>Cross-Platform Ratings</h1>
      </div>
      <div className="Stat">
        <div className="box">
          <div className="box-item">
            <img src={logoC} alt="O-rating" />
          </div>
          <div className="box-item">
            <b>8.0</b>
          </div>
        </div>

        <div className="box">
          <div className="box-item">
            <img src={logoO} alt="O-rating" />
          </div>
          <div className="box-item">
            <b>7.7</b>
          </div>
        </div>
        <div className="box">
          <div className="box-item">
            <img src={logoU} alt="O-rating" />
          </div>
          <div className="box-item">
            <b>8.1</b>
          </div>
        </div>
        <div className="box">
          <div className="box-item">
            <img src={logoR} alt="O-rating" />
          </div>
          <div className="box-item">
            <b>7.0</b>
          </div>
        </div>
      </div>
      <div className="Title">
        <h1>Records</h1>
      </div>
      <div className="Track">
        <div className="Track-container">
          <div className="TrackDe">
            <h2> Orders Placed</h2>
          </div>
          <div className="TrackSt">
            <RingProgress
              sections={[{ value: 40, color: "blue" }]}
              label={
                <Text color="blue" weight={700} align="center" size="xl">
                  40
                </Text>
              }
            />
          </div>
        </div>

        <div className="Track-container">
          <div className="TrackDe">
            <h2> Orders Recived</h2>
          </div>
          <div className="TrackSt">
            <RingProgress
              sections={[{ value: 30, color: "blue" }]}
              label={
                <Text color="blue" weight={700} align="center" size="xl">
                  30
                </Text>
              }
            />
          </div>
        </div>

        <div className="Track-container">
          <div className="TrackDe">
            <h2>Total Orders</h2>
          </div>
          <div className="TrackSt">
            <RingProgress
              sections={[{ value: 80, color: "blue" }]}
              label={
                <Text color="blue" weight={700} align="center" size="xl">
                  80
                </Text>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
