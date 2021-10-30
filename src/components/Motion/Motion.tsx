import React from "react";
import { motion } from "framer-motion";

export interface MotionProps {
	children: React.ReactNode;
	Type?: "up" | "down" | "left" | "right";
}

export const Motion = ({ children, Type = "up" }: MotionProps) => {
	return (
		<div>
			{Type === "up" && (
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 60 }}
				>
					{children}
				</motion.div>
			)}
			{Type === "down" && (
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 60 }}
				>
					{children}
				</motion.div>
			)}
			{Type === "left" && (
				<motion.div
					initial={{ x: 50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 60 }}
				>
					{children}
				</motion.div>
			)}
			{Type === "right" && (
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 60 }}
				>
					{children}
				</motion.div>
			)}
		</div>
	);
};

export default Motion;
