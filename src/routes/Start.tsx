import { useState } from "react";

import { NumberInput } from "../components/NumberInput";
import { exampleText } from "../text";

export function Start() {
	const [fontSize, setFontSize] = useState(20);
	const [fontWidth, setFontWidth] = useState(16);
	const [wordsPerMinute, setWordsPerMinute] = useState(105);
	const [text, setText] = useState(exampleText);

	return (
		<div>
			<h1>Scrolling Text Reader</h1>

			<form action="/go" method="get">
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
				<button type="submit">Go!</button>
			</form>
		</div>
	);
}
