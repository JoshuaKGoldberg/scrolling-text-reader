import { useState } from "react";

import styles from "./App.module.css";
import { ScrollingDisplay } from "./components/ScrollingDisplay";
import { StartPage } from "./components/StartPage";
import { Settings } from "./data/settings";

export function App() {
	const [settings, setSettings] = useState<Settings>();

	return (
		<div className={styles.app}>
			{settings ? (
				<ScrollingDisplay settings={settings} />
			) : (
				<StartPage setSettings={setSettings} />
			)}
		</div>
	);
}
