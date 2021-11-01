import React from "react";
import { TitleBar, GameCard } from "../../../../components";

const Halloween = () => {
	return (
		<div>
			<TitleBar title="Halloween Spotlight" button="SEE ALL DEALS" />
			<GameCard num={4} />
		</div>
	);
};

export default Halloween;
