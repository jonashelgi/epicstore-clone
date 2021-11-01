import React from "react";
import { GameCard } from "../../../../components";
import { TitleBar } from "../../../../components/TitleBar";

const Halloween = () => {
	return (
		<div>
			<TitleBar title="Halloween Spotlight" button="SEE ALL DEALS" />
			<GameCard num={4} />
		</div>
	);
};

export default Halloween;
