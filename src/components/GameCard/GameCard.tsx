import React from "react";
import { Col, Container, Row, Image, Badge } from "react-bootstrap";

import data from "../../utils/Data/data";
import { getData } from "../../utils/functions/getData";

export type Size = 2 | 3 | 4 | 5;
type Sizes = {
	[Type in Size]: {
		sm: number;
		md: number;
		lg: number;
		xl: number;
		// True for tall false for wide.
		layout: boolean;
	};
};

const list: Sizes = {
	2: {
		sm: 6,
		md: 6,
		lg: 6,
		xl: 6,
		layout: false,
	},
	3: {
		sm: 4,
		md: 4,
		lg: 4,
		xl: 4,
		layout: false,
	},
	4: {
		sm: 3,
		md: 3,
		lg: 3,
		xl: 3,
		layout: true,
	},
	5: {
		sm: 2,
		md: 2,
		lg: 2,
		xl: 2,
		layout: true,
	},
};

interface GameCardProps {
	num: Size;
}

const GameCard = ({ num }: GameCardProps) => {
	var [info] = getData(data, 4);
	console.log(info);
	return (
		<Container fluid>
			<Row>
				<Col
					sm={list[num].sm}
					md={list[num].md}
					lg={list[num].lg}
					xl={list[num].xl}
					style={{ border: "2px solid red" }}
				>
					<Image src={info[1].img.wide} fluid />
					<div style={{ color: "white" }}>
						<h3>{info[1].title}</h3>
						<h4>{info[1].company}</h4>
						<div style={{display: "flex"}}>
							<Badge bg="primary">{info[1].price.discount}</Badge>
							<p style={{ textDecoration: "line-through", color: "gray" }}>
								{info[1].price.originalPrice}
							</p>
							<p>{info[1].price.discountPrice}</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default GameCard;
