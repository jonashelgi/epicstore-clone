import React from "react";
import Icon, { IconTypes, Size } from "../Icon/Icon";

import styles from "./TitleBar.module.css";

interface TitleBarProps {
	title?: string;
	button?: string;
	iconType?: IconTypes;
	iconSize?: Size;
}

const TitleBar = ({
	title,
	button,
	iconType,
	iconSize = "lg",
}: TitleBarProps) => {
	return (
		<div className={styles.root}>
			{iconType && (
				<div className={styles.icon}>
					<Icon type={iconType} size={iconSize} marginRight={15} />
				</div>
			)}
			{title && <div className={styles.title}>{title}</div>}
			{button && (
				<div className={styles.btnBox}>
					<button className={styles.btn}>{button}</button>
				</div>
			)}
		</div>
	);
};

export default TitleBar;
