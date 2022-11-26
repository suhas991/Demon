import React from "react";
import { Autocomplete } from "@mantine/core";
import { Button } from "@mantine/core";
import "./Home.css";
const car =
  " https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80";
const auto =
  " https://5.imimg.com/data5/DX/JE/RS/SELLER-2454989/bajaj-re-cng-auto-rickshaw-500x500.png ";
export default function Map() {
  return (
    <div className="M-container">
      <div className="S-Bar">
        <div className="intro">
          <h1>CRYPT-CABS</h1>
        </div>
        <div className="trip">
          <h3>Trip Details</h3>
        </div>
        <div className="From">
          <Autocomplete
            label="From"
            placeholder="Pick one"
            data={["React", "Angular", "Svelte", "Vue"]}
          />
        </div>
        <div className="To">
          <Autocomplete
            label="To"
            placeholder="Pick one"
            data={["React", "Angular", "Svelte", "Vue"]}
          />
        </div>

        <div className="select">
          <h3>Select Vechile</h3>
          <div className="Vechile">
            <div className="Auto">
              <img src={auto} alt="auto" width="200px" height="200px" />
            </div>
            <div className="Car">
              <img src={car} alt="car" width="200px" height="200px" />
            </div>
          </div>
        </div>

        <div className="confirm">
          <Button radius="xl" size="lg">
            Confirm
          </Button>
        </div>
      </div>

      <div className="Map"></div>
    </div>
  );
}
