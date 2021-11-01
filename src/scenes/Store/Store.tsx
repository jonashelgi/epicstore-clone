import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Sidebar } from "../../components";
import { FreeGames } from "./components/FreeGames";
import { Halloween } from "./components/Halloween";
import { Wishlist } from "./components/Wishlist";
import styles from "./Store.module.css";

const Store = () => {
	return (
		<Container fluid>
			<Row>
				<Col
					sm={6}
					md={4}
					lg={3}
					xl={2}
				>
					<div className={styles.sidebar}>
						<Sidebar />
					</div>
				</Col>

				<Col sm={6} md={8} lg={9} xl={10}>
					<Halloween />
					<Wishlist />
					<FreeGames />
				</Col>
			</Row>
		</Container>
	);
};

export default Store;
