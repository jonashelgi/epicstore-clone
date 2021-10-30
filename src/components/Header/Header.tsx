import React from "react";
import { Row, Col, Button, Container, ButtonGroup } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import { Motion } from "..";
import styles from "./Header.module.css";

export const Header = () => {
	const isSmall = useMediaQuery({ query: "(max-width: 1000px)" });
	return (
		<Container>
			<Row>
				<Col
					md={12}
					lg={6}
					className={isSmall ? styles.center : styles.smallPadding}
				>
					<Motion Type="right">
						<a href="http://jonashelgi.is/" className={styles.noDec}>
							<h3 className={styles.colorMain}>JONASHELGI</h3>
						</a>
					</Motion>
				</Col>
				<Col md={12} lg={6} className={isSmall ? styles.center : styles.end}>
					<Motion Type="left">
						<ButtonGroup className="BoxShadow">
							<Button size="lg" className={styles.btn}>
								<a href={"#Projects"} className={styles.link}>
									Verkefni
								</a>
							</Button>
							<Button size="lg" className={styles.btn}>
								<a href={"#Courses"} className={styles.link}>
									Námskeið
								</a>
							</Button>
							<Button size="lg" className={styles.btn}>
								<a href={"#Work"} className={styles.link}>
									Vinna
								</a>
							</Button>
						</ButtonGroup>
					</Motion>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
