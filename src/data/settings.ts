export interface Settings {
	fontSize: number;
	fontWeight: "bold" | "bolder" | "normal";
	fontWidth: number;
	text: string;
	visibleCharacters: number;
	wordsPerMinute: number;
}

export const defaultSettings = {
	fontSize: 40,
	fontWeight: "bolder",
	fontWidth: 16,
	text: "",
	visibleCharacters: 10,
	wordsPerMinute: 105,
} satisfies Settings;
