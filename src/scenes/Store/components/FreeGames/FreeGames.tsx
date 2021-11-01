import React from "react";
import { GameCard, Icon } from "../../../../components";
import { TitleBar } from "../../../../components/TitleBar";
import styles from "./FreeGames.module.css";

const FreeGames = () => {
	return (
		<div className={styles.root}>
			<TitleBar title="Free Games" button="VIEW MORE" iconType="gift"/>
			<GameCard num={2} style={{ backgroundColor: "red" }} />
		</div>
	);
};

export default FreeGames;
