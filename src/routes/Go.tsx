import { useState } from "react";
import { useInterval } from "react-use";
import { useSearchParams } from "react-router";

import { exampleText } from "../text";

export function Go() {
	const [searchParams] = useSearchParams();

	const fontSize = String(searchParams.get("fontSize"));
	const fontWidth = Number(searchParams.get("fontWidth"));
	const wordsPerMinute = Number(searchParams.get("wordsPerMinute"));

	const characters = exampleText.split("");

	const [startIndex, setStartIndex] = useState(0);
	const tickFrequency = Math.round(6_000 / wordsPerMinute);

	useInterval(() => {
		setStartIndex(startIndex + 1);
	}, tickFrequency);

	return (
		<div
			style={{
				fontSize: `${fontSize}px`,
				letterSpacing: `${fontWidth / 10}px`,
			}}
		>
			{characters.map((character, index) => {
				const delta = Math.abs(index - startIndex);
				const opacity = delta > 10 ? 0 : delta < 10 ? 1 : 1 / delta;

				return (
					<span
						style={{
							transition: `opacity ${tickFrequency * 5}ms`,
							opacity: opacity,
						}}
						key={index}
					>
						{character}
					</span>
				);
			})}
		</div>
	);
}
