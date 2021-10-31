import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import { Row, Col } from "react-bootstrap";

import { Sidebar } from "../../components"
import styles from "./Store.module.css";

const Store = () => {
	return (
		<Row>
			<Col sm={2}>
				<Sidebar />
			</Col>
			<Col sm={10}></Col>
		</Row>
	);
};

export default Store;
