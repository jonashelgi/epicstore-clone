import React from "react";
import StickyBox from "react-sticky-box";

import { IconLink, Icon } from "..";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<StickyBox>
			<div className={styles.root}>
				<div className={styles.firstBox}>
					<div className={styles.mainLink}>
						<IconLink to="discover" title="Discover" color="white" />
					</div>
					<div className={styles.link}>
						<IconLink to="browse" title="Browse" />
					</div>
				</div>
				<div className={styles.secondBox}>
					<div className={styles.link}>
						<IconLink to="wishlist" title="Wishlist" />
					</div>
					<div className={styles.number}>2</div>
					<label>
						<input
							type="search"
							placeholder="Search"
							className={styles.search}
						/>
					</label>
					<div className={styles.icon}>
						<Icon type="user" size="lg" />
					</div>
				</div>
			</div>
		</StickyBox>
	);
};

export default Header;
