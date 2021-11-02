import React from 'react'

import { TitleBar, GameCard } from "../../../../components";
// import styles from "./GamesOnSale.module.css";

const GamesOnSale = () => {
	return (
		<div style={{paddingBottom: "50px"}}>
			<TitleBar title="Games On Sale" button="VIEW MORE" />
			<GameCard num={6} style={{ backgroundColor: "red" }} />
		</div>
	);
};

export default GamesOnSale
