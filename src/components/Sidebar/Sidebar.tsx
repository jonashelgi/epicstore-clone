import React from "react";

import styles from "./Sidebar.module.css";
import { IconLink } from "../../components";

const Sidebar = () => {
	return (
		<div className={styles.root}>
			<div className={styles.topIcon} style={{ marginLeft: "10px" }}>
				<IconLink
					to="games"
					icon="game"
					size="lg"
					color="#fdfdfd"
					title="Clone Games"
					marginRight={21}
					paddingBottom={40}
				/>
			</div>
			<div className={styles.top}>
				<IconLink
					to="home"
					icon="home"
					title="Home"
					marginRight={30}
					paddingBottom={20}
				/>
				<IconLink
					to="store"
					icon="store"
					title="Store"
					marginRight={30}
					paddingBottom={20}
				/>
				<IconLink
					to="library"
					icon="library"
					title="Library"
					marginRight={30}
					paddingBottom={20}
				/>
				<IconLink
					to="games"
					icon="game"
					title="Game engine"
					marginRight={30}
					paddingBottom={20}
				/>
				<p style={{ color: "white"}}>
					This website is a clone <br />
					of the Epic store windows <br />
					app. It is not functional <br />
					and only made to practice <br />
					front-end development. <br />
					<br />
					There is no way to
					<br />
					purchase any games here <br />
					and there will never <br />
					be any money made from <br />
					this website.
					
				</p>
			</div>
			<div className={styles.bottom}>
				<IconLink
					to="download"
					icon="download"
					title="Downloads"
					marginRight={30}
					paddingBottom={20}
				/>
				<IconLink
					to="https://github.com/jonashelgi"
					icon="setting"
					title="Code"
					marginRight={30}
					paddingBottom={20}
				/>
				<IconLink
					to="https://github.com/jonashelgi"
					icon="github"
					title="@jonashelgi"
					marginRight={30}
					paddingBottom={20}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
