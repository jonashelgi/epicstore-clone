import React from "react";
import { GameCard } from "../../../../components";
import { TitleBar } from "../../../../components/TitleBar";

const Wishlist = () => {
	return (
		<div>
			<TitleBar title="From your Wishlist" button="WISHLIST" />
			<GameCard num={2} />
		</div>
	);
};

export default Wishlist;
