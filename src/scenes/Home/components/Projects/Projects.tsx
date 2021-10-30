import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Kanban } from "react-bootstrap-icons";

import { ProjectCard, Waves } from "../../../../components";
import styles from "./Projects.module.css";

const Projects = () => {
	return (
		<Container>
			<h1 className={styles.title}>
				<Kanban size={60} className={styles.icon} /> VERKEFNI
			</h1>
			<Row>
				<Col sm={12} md={6} lg={4} className={styles.col}>
					<Waves Type="bottom" Points={2} />
					<ProjectCard
						Title="Aðalnámskrá grunnskóla"
						SubTitle="Menntamálastofnun"
						Text="Hanna og forrita aðalnámskrá grunnskóla yfir á rafrænt form ásamt áframhaldandi þróun og viðhald."
						Tools="React, Typescript , Prismic, Jest og Ísland.is UI library."
						LinkUrl="https://adalnamskra.is/"
					/>
					<Waves Type="top" Points={2} />
				</Col>
				<Col sm={12} md={6} lg={4} className={styles.col}>
					<Waves Type="bottom" Points={2} />
					<ProjectCard
						Title="Portfolio"
						SubTitle="Jónas Helgi"
						Text="Síða sem inniheldur yfirlit af öllum mínum verkefnum, þetta er síðan sem þú ert á núna. "
						ExtraText="halló"
						Tools="React, Typescript, React-Bootstrap og Firebase."
						GithubUrl="https://github.com/jonashelgi/portfolio"
					/>
					<Waves Type="top" Points={2} />
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
