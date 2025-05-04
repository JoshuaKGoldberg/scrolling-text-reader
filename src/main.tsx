import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

// import "./index.css";

import { Go } from "./routes/Go";
import { Start } from "./routes/Start";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Start />} path="/" />
				<Route element={<Go />} path="/go" />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
