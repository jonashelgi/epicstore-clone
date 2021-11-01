import React from "react";
import { Link } from "react-router-dom";

import styles from "./IconLink.module.css";
import { Icon } from "../../components";
import { IconTypes, Size } from "../Icon/Icon";

interface IconLinkProps {
	to: string;
	icon: IconTypes;
	title?: string;
	color?: string;
	size?: Size;
	marginRight?: number;
	marginLeft?: number;
	paddingBottom?: number;
}

const IconLink = ({
	to,
	icon,
	title,
	color,
	size = "md",
	marginRight = 0,
	marginLeft = 0,
	paddingBottom = 0,
}: IconLinkProps) => {
	return (
		<Link to={to} className={styles.link}>
			<div
				className={styles.icon}
				style={{ paddingBottom: paddingBottom, fill: color, color: color }}
			>
				<Icon
					type={icon}
					size={size}
					marginRight={marginRight}
					marginLeft={marginLeft}
				/>
				{title && title}
			</div>
		</Link>
	);
};

export default IconLink;
