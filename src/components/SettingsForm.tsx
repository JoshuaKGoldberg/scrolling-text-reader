import { useLocalStorage } from "react-use";

import { defaultSettings, Settings } from "../data/settings.ts";
import { Button } from "./Button";
import { NumberInput } from "./NumberInput";
import { SelectInput } from "./SelectInput.tsx";
import styles from "./SettingsForm.module.css";
import { StoryInput } from "./StoryInput";

export interface SettingsFormProps {
	setSettings: (settings: Settings) => void;
}

export function SettingsForm({
	setSettings: setInputsState,
}: SettingsFormProps) {
	const [localState, setLocalState] = useLocalStorage<Settings>(
		"scrolling-text-reader-state",
		{ ...defaultSettings },
	);

	// It's easier to make a local variable here than correct the types...
	// https://github.com/streamich/react-use/issues/1483
	const fullLocalState = { ...defaultSettings, ...localState };

	const setState = <Key extends keyof Settings>(
		key: Key,
		value: Settings[Key],
	) => {
		setLocalState((prev) => ({
			...defaultSettings,
			...prev,
			[key]: value,
		}));
	};

	const createSetState = <T extends keyof Settings>(key: T) => {
		return (value: Settings[T]) => {
			setState(key, value);
		};
	};

	return (
		<form className={styles.settingsForm}>
			<NumberInput
				label="Font Size"
				name="fontSize"
				setValue={createSetState("fontSize")}
				value={fullLocalState.fontSize}
			/>
			<SelectInput
				label="Font Weight"
				name="fontWeight"
				options={["bold", "bolder", "normal"]}
				setValue={createSetState("fontWeight")}
				value={fullLocalState.fontWeight}
			/>
			<NumberInput
				label="Font Width"
				name="fontWidth"
				setValue={createSetState("fontWidth")}
				value={fullLocalState.fontWidth}
			/>
			<NumberInput
				label="Visible Characters"
				name="visibleCharacters"
				setValue={createSetState("visibleCharacters")}
				value={fullLocalState.visibleCharacters}
			/>
			<NumberInput
				label="Words Per Minute"
				name="wordsPerMinute"
				setValue={createSetState("wordsPerMinute")}
				value={fullLocalState.wordsPerMinute}
			/>
			<StoryInput
				setValue={createSetState("text")}
				value={fullLocalState.text}
			/>
			<div className={styles.buttons}>
				<Button
					onClick={() => {
						setLocalState(defaultSettings);
					}}
				>
					Reset
				</Button>
				<Button
					bold
					disabled={
						!fullLocalState.fontSize ||
						!fullLocalState.fontWidth ||
						!fullLocalState.text ||
						!fullLocalState.visibleCharacters ||
						!fullLocalState.wordsPerMinute
					}
					onClick={() => {
						setInputsState(fullLocalState);
					}}
				>
					Start
				</Button>
			</div>
		</form>
	);
}
