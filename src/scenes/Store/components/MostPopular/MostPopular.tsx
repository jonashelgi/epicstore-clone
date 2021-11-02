import React from "react";

import { TitleBar, GameCard } from "../../../../components";
// import styles from "./MostPopular.module.css";

const MostPopular = () => {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <TitleBar title="Most Popular" button="VIEW MORE" />
      <GameCard num={6} style={{ backgroundColor: "red" }} />
    </div>
  );
};

export default MostPopular;
