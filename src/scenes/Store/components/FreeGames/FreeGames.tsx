import React from "react";
import { TitleBar, GameCard } from "../../../../components";
import styles from "./FreeGames.module.css";

const FreeGames = () => {
  return (
    <div className={styles.root}>
      <TitleBar title="Free Games" button="VIEW MORE" iconType="gift" />
      <GameCard num={2} style={{ backgroundColor: "red" }} />
    </div>
  );
};

export default FreeGames;
