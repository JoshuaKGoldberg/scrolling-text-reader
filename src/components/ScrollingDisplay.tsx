import { useState } from "react";
import { useInterval } from "react-use";

import { exampleText } from "../text";
import { InputsState } from "./InputsForm";

export interface ScrollingDisplayProps {
	inputs: InputsState;
}

export function ScrollingDisplay({ inputs }: ScrollingDisplayProps) {
	const characters = exampleText.split("");

	const [startIndex, setStartIndex] = useState(0);
	const tickFrequency = Math.round(6_000 / inputs.wordsPerMinute);

	useInterval(() => {
		setStartIndex(startIndex + 1);
	}, tickFrequency);

	return (
		<div
			style={{
				fontSize: `${inputs.fontSize}px`,
				letterSpacing: `${inputs.fontWidth / 10}px`,
			}}
		>
			{characters.map((character, index) => {
				const delta = Math.abs(index - startIndex);
				const opacity = delta > 10 ? 0 : delta < 10 ? 1 : 1 / delta;

				return (
					<span
						key={index}
						style={{
							opacity,
							transition: `opacity ${tickFrequency * 2}ms`,
						}}
					>
						{character}
					</span>
				);
			})}
		</div>
	);
}
