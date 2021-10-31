import React from "react";
import styles from "./IconLink.module.css";

type Size = "sm" | "md" | "lg";
type Sizes = {
	[Type in Size]: {
		width: string | number | "none";
		height: string | number | "none";
	};
};

type IconTypes =
	| "home"
	| "store"
	| "library"
	| "unreal"
	| "downloads"
	| "settings"
	| "user";
type Icons = {
	[Type in IconTypes]: {
		width: string | number | "none";
		height: string | number | "none";
		viewBox: string;
		path?: string;
	};
};

interface IconProps {
	type: IconTypes;
	size?: Size;
}

const sizeList: Sizes = {
	sm: {
		width: 16,
		height: 16,
	},
	md: {
		width: 24,
		height: 24,
	},
	lg: {
		width: 32,
		height: 32,
	},
};

const iconList: Icons = {
	home: {
		width: 16,
		height: 16,
		viewBox: "0 0 16 16",
		path: "m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z",
	},
	store: {
		width: 16,
		height: 16,
		viewBox: "0 0 16 16",
		path: "M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z",
	},
	library: {
		width: 16,
		height: 16,
		viewBox: "0 0 16 16",
		path: "M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z",
	},
	unreal: {
		width: 16,
		height: 16,
		viewBox: "0 0 16 16",
		path: "m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z",
	},
	downloads: {
		width: 16,
		height: 16,
		viewBox: "0 0 16 16",
		path: "m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z",
	},
	settings: {
		width: 16,
		height: 16,
		viewBox: "0 0 16 16",
		path: "m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z",
	},
	user: {
		width: 16,
		height: 16,
		viewBox: "0 0 16 16",
		path: "m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z",
	},
};

const Icon = ({ type, size = "sm" }: IconProps) => {
	return (
		<div className={styles.links}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={sizeList[size].width}
				height={sizeList[size].height}
				viewBox={iconList[type].viewBox}
			>
				<path d={iconList[type].path} />
			</svg>
		</div>
	);
};

export default Icon;
