import React from "react";

import styles from "./Wrapper.module.css";

export interface WrapperProps {
	children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
	return (
		<div>
			<div className={styles.header}>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default Wrapper;
