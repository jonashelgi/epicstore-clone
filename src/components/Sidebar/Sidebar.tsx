import React from "react";

import styles from "./Sidebar.module.css";
import { IconLink } from "../../components";

const Sidebar = () => {
	return (
		<div className={styles.root}>
			<div className={styles.topIcon}>
				<IconLink
					to="home"
					icon="game"
					size="lg"
					color="#fdfdfd"
					title="This is a CLONE"
					marginRight={30}
					paddingBottom={40}
				/>
			</div>
			<div>
				<IconLink
					to="home"
					icon="home"
					title="Home"
					marginRight={30}
					paddingBottom={20}
				/>
				<IconLink
					to="home"
					icon="store"
					title="Store"
					marginRight={30}
					paddingBottom={20}
				/>
				<IconLink
					to="home"
					icon="library"
					title="Library"
					marginRight={30}
					paddingBottom={20}
				/>
				<IconLink
					to="home"
					icon="game"
					title="Game engine"
					marginRight={30}
					paddingBottom={20}
				/>
			</div>
			<div style={{ position: "fixed", top: "80%" }}>
				<IconLink
					to="home"
					icon="download"
					title="Downloads"
					marginRight={30}
					paddingBottom={20}
				/>
				<IconLink
					to="home"
					icon="setting"
					title="Settings"
					marginRight={30}
					paddingBottom={20}
				/>
				<IconLink
					to="home"
					icon="user"
					title="Jonas Helgi"
					marginRight={30}
					paddingBottom={20}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
