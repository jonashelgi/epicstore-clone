import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { GameCard, Sidebar } from "../../components";
import styles from "./Store.module.css";

const Store = () => {
	return (
		<Container fluid className={styles.root}>
			<Row>
				<Col sm={2}>
					<Sidebar />
				</Col>
				<Col sm={10}>
					<GameCard num={4}/>
				</Col>
			</Row>
		</Container>
	);
};

export default Store;
