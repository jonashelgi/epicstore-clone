import React, { useState } from "react";
import { OverlayTrigger, Offcanvas } from "react-bootstrap";
import { Link, Github, InfoCircle } from "react-bootstrap-icons";

import { TextTooltip } from "..";
import styles from "./ProjectCard.module.css";

export interface ProjectCardProps {
	Title?: string;
	SubTitle?: string;
	Text?: string;
	ExtraText?: string;
	Tools?: string;
	LinkUrl?: string;
	GithubUrl?: string;
}

export const ProjectCard = ({
	Title,
	SubTitle,
	Text,
	ExtraText,
	Tools,
	LinkUrl,
	GithubUrl,
}: ProjectCardProps) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const toggleShow = () => setShow((s) => !s);
	return (
		<div className={styles.card}>
			{Title && <h1 className={styles.title}>{Title}</h1>}
			{SubTitle && <h3>{SubTitle}</h3>}
			{Text && <p className={styles.text}>{Text}</p>}
			{Tools && <p className={styles.tools}>{Tools}</p>}
			{LinkUrl && (
				<a href={LinkUrl} target="_blank" rel="noreferrer">
					<OverlayTrigger overlay={TextTooltip({ Text: "Vefsíða" })}>
						<Link
							size={40}
							className={styles.icon}
							aria-label="Linkur á vefsíðuna"
						/>
					</OverlayTrigger>
				</a>
			)}
			{GithubUrl && (
				<a href={GithubUrl} target="_blank" rel="noreferrer">
					<OverlayTrigger overlay={TextTooltip({ Text: "Github" })}>
						<Github
							size={40}
							className={styles.icon}
							aria-label="Linkur á Github"
						/>
					</OverlayTrigger>
				</a>
			)}
			{ExtraText && (
				<OverlayTrigger overlay={TextTooltip({ Text: "Auka upplýsingar" })}>
					<InfoCircle
						size={40}
						onClick={toggleShow}
						className={styles.icon}
						aria-label="Opnar upplýsinga glugga"
					/>
				</OverlayTrigger>
			)}
			{ExtraText && (
				<Offcanvas
					show={show}
					onHide={handleClose}
					scroll={true}
					className={styles.offCanvas}
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title className={styles.offCanvasTitle}>
							{Title && <div>{Title}</div>} Auka upplýsingar
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body className={styles.offCanvasBody}>
						{ExtraText}
					</Offcanvas.Body>
				</Offcanvas>
			)}
		</div>
	);
};

export default ProjectCard;
