import { useState } from "react";

import { exampleText } from "../text";
import { NumberInput } from "./NumberInput";

export interface InputsFormProps {
	setInputsState: (state: InputsState) => void;
}

export interface InputsState {
	fontSize: number;
	fontWidth: number;
	text: string;
	wordsPerMinute: number;
}

export function InputsForm({ setInputsState }: InputsFormProps) {
	const [fontSize, setFontSize] = useState(20);
	const [fontWidth, setFontWidth] = useState(16);
	const [wordsPerMinute, setWordsPerMinute] = useState(105);
	const [text, setText] = useState(exampleText);

	return (
		<form>
			<NumberInput
				label="Font Size"
				name="fontSize"
				setValue={setFontSize}
				value={fontSize}
			/>
			<NumberInput
				label="Font Width"
				name="fontWidth"
				setValue={setFontWidth}
				value={fontWidth}
			/>
			<NumberInput
				label="Words Per Minute"
				name="wordsPerMinute"
				setValue={setWordsPerMinute}
				value={wordsPerMinute}
			/>
			<textarea
				onChange={(event) => {
					setText(event.target.value);
				}}
				value={text}
			/>
			<br />
			<button
				onClick={(event) => {
					event.preventDefault();
					setInputsState({ fontSize, fontWidth, text, wordsPerMinute });
				}}
			>
				Go!
			</button>
		</form>
	);
}
