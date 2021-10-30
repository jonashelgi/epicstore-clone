import React from "react";
import { Container, Row, Col, OverlayTrigger, Button } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";

import { TextTooltip, Motion } from "../../../../components";

import avatar from "../../../../utils/avatar.png";
import styles from "./Greeting.module.css";

const Greeting = () => {
	return (
		<Container>
			<Row>
				<Col md={12} lg={8} className={styles.col}>
					<Motion Type="right">
						<div className={styles.colorMain}>
							<h1>Hæ! Ég heiti Jónas Helgi</h1>
							<p className={styles.smallFont}>
								Ég sérhæfi mig í vefhönnun ,þróun og forritun á vefsíðum.
							</p>
							<p className={styles.smallFont}>
								Ég er fljótur að aðlagast og læra nýja hluti og einnig forvitinn
								svo ég er duglegur að leysa vandamál. Ég hugsa út fyrir kassann
								og sækist ávalt í nýjar áskoranir.
							</p>
						</div>
						<div>
							<a
								href={"https://github.com/jonashelgi"}
								target="_blank"
								rel="noreferrer"
							>
								<OverlayTrigger overlay={TextTooltip({ Text: "Github" })}>
									<Github
										size={40}
										className={styles.icon}
										aria-label="Link to another course page"
									/>
								</OverlayTrigger>
							</a>
							<a
								href={"https://www.linkedin.com/in/jonashelgi/"}
								target="_blank"
								rel="noreferrer"
								className="HoverItem"
							>
								<OverlayTrigger overlay={TextTooltip({ Text: "Linkedin" })}>
									<Linkedin
										size={40}
										className={styles.icon}
										aria-label="Link to another course page"
									/>
								</OverlayTrigger>
							</a>
						</div>
						<div className={styles.logos}>
							<h4 className={styles.colorMain}>Það sem ég er helst að nota:</h4>
							<img
								src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
								alt="React"
								height="40px"
							/>
							<img
								src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
								alt="Javascript"
								height="40px"
							/>
							<img
								src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
								alt="Typescript"
								height="40px"
							/>
							<img
								src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"
								alt="Firebase"
								height="40px"
							/>
							{/* <img
								src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
								alt="Node"
								height="40px"
							/> */}
							<img
								src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"
								alt="Jest"
								height="40px"
							/>
							<img
								src="https://img.shields.io/badge/Prismic-8B66A9?style=for-the-badge&logo=prismic&logoColor=white"
								alt="Prismic"
								height="40px"
							/>
							<img
								src="https://img.shields.io/badge/-storybook-e35182?style=for-the-badge&logo=storybook&logoColor=white"
								alt="StoryBook"
								height="40px"
							/>
							<img
								src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
								alt="Github"
								height="40px"
							/>
							<img
								src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
								alt="Visual studio Code"
								height="40px"
							/>
						</div>
						<div className={styles.logos}>
							<h4 className={styles.colorMain}>
								Hægt er að sjá Storybook fyrir þessa vefsíðu hérna:
							</h4>
							<div>
								<Button size="lg" className={styles.btn}>
									<a
										href={"https://jonas-helgi-sb.web.app/"}
										className={styles.link}
										target="_blank"
										rel="noreferrer"
									>
										Storybook
									</a>
								</Button>
							</div>
						</div>
					</Motion>
				</Col>
				<Col md={12} lg={4} className={styles.col}>
					<div className={styles.avatar}>
						<img
							className={styles.img}
							src={avatar}
							alt="Avatar of Jonas"
							width="300px"
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Greeting;
