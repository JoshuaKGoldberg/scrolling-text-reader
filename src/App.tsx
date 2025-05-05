import { useState } from "react";

import styles from "./App.module.css";
import { ScrollingDisplay } from "./components/ScrollingDisplay";
import { SettingsForm } from "./components/SettingsForm";
import { Settings } from "./data/settings";

export function App() {
	const [settings, setSettings] = useState<Settings>();

	return (
		<div className={styles.app}>
			{settings ? (
				<ScrollingDisplay settings={settings} />
			) : (
				<SettingsForm setSettings={setSettings} />
			)}
		</div>
	);
}
