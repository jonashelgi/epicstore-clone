import React from "react";
import Icon, { IconTypes, Size } from "../Icon/Icon";

import styles from "./Header.module.css";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
	return (
		<div className={styles.root}>
			<div className={styles.firstBox}>
				<div className={styles.mainLink}>Discover</div>
				<div className={styles.link}>Browse</div>
			</div>
			<div className={styles.secondBox}>
				<div className={styles.link}>Wishlist</div>
				<label>
					<input type="search" placeholder="Search" className={styles.search} />
				</label>
				<div className={styles.link}>icon</div>
			</div>
		</div>
	);
};

export default Header;
