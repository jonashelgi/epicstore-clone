import React from "react";
import { TitleBar, GameCard } from "../../../../components";

const Wishlist = () => {
	return (
		<div>
			<TitleBar title="From your Wishlist" button="WISHLIST" />
			<GameCard num={2} />
		</div>
	);
};

export default Wishlist;
