import { exampleStories } from "./stories";

export interface Settings {
	fontSize: number;
	fontWidth: number;
	text: string;
	visibleCharacters: number;
	wordsPerMinute: number;
}

export const defaultSettings = {
	fontSize: 40,
	fontWidth: 16,
	text: Array.from(exampleStories)[0][1],
	visibleCharacters: 10,
	wordsPerMinute: 105,
} satisfies Settings;
