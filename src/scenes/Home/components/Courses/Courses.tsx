import React from "react";
import { Container } from "react-bootstrap";
import { Book } from "react-bootstrap-icons";

import { CourseProgress } from "../../../../components";
import styles from "./Courses.module.css";

const Courses = () => {
	return (
		<Container>
			<h1 className={styles.title}>
				<Book size={60} className={styles.icon} /> NÁMSKEIÐ
			</h1>
			<CourseProgress
				Title="Docker and Kubernetes: The Complete Guide"
				Progress={15}
				Link="https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/"
			/>
			<CourseProgress
				Title="Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)"
				Progress={60}
				Link="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
			/>
			<CourseProgress
				Title="The Complete 2021 Web Development Bootcamp"
				Progress={100}
				Link="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
				Cert="https://www.udemy.com/certificate/UC-10471ff1-f7dd-4142-af02-a1e33a151341/"
			/>
			<CourseProgress
				Title="Tableau 2020 A-Z: Hands-On Tableau Training for Data Science"
				Progress={100}
				Link="https://www.udemy.com/course/tableau10/"
				Cert="https://www.udemy.com/certificate/UC-3c163630-9a06-4ea5-8221-14e07bf856bc/"
			/>
		</Container>
	);
};

export default Courses;
