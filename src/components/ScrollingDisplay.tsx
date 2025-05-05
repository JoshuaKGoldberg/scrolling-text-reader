import { useState } from "react";
import { useInterval } from "react-use";

import { Settings } from "../data/settings.ts";

export interface ScrollingDisplayProps {
	settings: Settings;
}

export function ScrollingDisplay({ settings }: ScrollingDisplayProps) {
	const characters = settings.text.split("");

	const [currentIndex, setCurrentIndex] = useState(
		-settings.visibleCharacters - 1,
	);
	const tickFrequency = Math.round(6_000 / settings.wordsPerMinute);

	useInterval(() => {
		if (currentIndex > characters.length + settings.visibleCharacters) {
			setCurrentIndex(-settings.visibleCharacters);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	}, tickFrequency);

	return (
		<div
			style={{
				fontSize: `${settings.fontSize}px`,
				letterSpacing: `${settings.fontWidth / 10}px`,
			}}
		>
			{characters.map((character, index) => {
				const delta = Math.abs(index - currentIndex);
				const opacity =
					delta > settings.visibleCharacters
						? 0
						: delta < settings.visibleCharacters
							? 1
							: 1 / delta;

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
