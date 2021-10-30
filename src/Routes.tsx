import React, { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

import App from "./App";
import { Loading } from "./components";
const Home = lazy(() => import("./scenes/Home/Home"));

export default function Routes() {
	const location = useLocation();
	return (
		<App>
			<AnimatePresence>
				<Switch location={location} key={location.pathname}>
					<Route>
						<Suspense fallback={<Loading />}>
							<Home />
						</Suspense>
					</Route>
				</Switch>
			</AnimatePresence>
		</App>
	);
}
