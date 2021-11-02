import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

import data from "../../utils/Data/data";
import { getData } from "../../utils/functions/getData";
import styles from "./GameCard.module.css";

export type Size = 2 | 3 | 4 | 6;
type Sizes = {
	[Type in Size]: {
		xs: number;
		sm: number;
		md: number;
		lg: number;
		xl: number;
		xxl: number;
		// True for tall false for wide.
		layout: boolean;
	};
};

const list: Sizes = {
	2: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 6,
		xl: 6,
		xxl: 3,
		layout: false,
	},
	3: {
		xs: 12,
		sm: 4,
		md: 4,
		lg: 4,
		xl: 4,
		xxl: 3,
		layout: false,
	},
	4: {
		xs: 12,
		sm: 12,
		md: 6,
		lg: 4,
		xl: 3,
		xxl: 3,
		layout: true,
	},
	6: {
		xs: 12,
		sm: 12,
		md: 6,
		lg: 4,
		xl: 2,
		xxl: 2,
		layout: true,
	},
};

interface GameCardProps {
	/*
  How many cards do we want.
  */
	num: Size;
	/*
  To pass styles to the component
  Currently not in use.
  */
	style?: React.CSSProperties;
}

const GameCard = ({ num, style }: GameCardProps) => {
	var [info] = getData(data, num);

	return (
		<Container fluid style={{ padding: "0px 0px 0px 0px" }}>
			<Row md={4}>
				{info.map((game: any, index: number) => (
					<Col
						sm={list[num].sm}
						md={list[num].md}
						lg={list[num].lg}
						xl={list[num].xl}
						key={index}
						className={styles.col}
						style={{ cursor: "pointer" }}
					>
						{list[num].layout ? (
							<Image src={game.img.tall} fluid className={styles.img} />
						) : (
							<Image src={game.img.wide} fluid className={styles.img} />
						)}
						<div>
							<div className={styles.colorwhite}>{game.title}</div>
							<div className={styles.colordark}>{game.developer}</div>
						</div>
						{game.price.discount === "0%" ? (
							<div className={styles.single}>
								<div className={styles.colorwhite}>
									{game.price.originalPrice}
								</div>
							</div>
						) : (
							<div className={styles.price}>
								<div className={styles.discount}>{game.price.discount}</div>
								<div className={styles.originalPrice}>
									{game.price.originalPrice}
								</div>
								<div className={styles.colorwhite}>
									{game.price.discountPrice}
								</div>
							</div>
						)}
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default GameCard;
