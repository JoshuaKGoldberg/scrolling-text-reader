import { exampleStories } from "../data/stories";
import styles from "./StoryInput.module.css";

export interface StoryInputProps {
	setValue: (newValue: string) => void;
	value: string;
}

export function StoryInput({ setValue, value }: StoryInputProps) {
	const storyEntries = Array.from(exampleStories);
	const selectedStory =
		storyEntries.find(([, story]) => story === value)?.[0] ?? "";

	return (
		<div className={styles.storyInput}>
			<textarea
				className={styles.textarea}
				onChange={(event) => {
					setValue(event.target.value);
				}}
				value={value}
			/>
			<select
				className={styles.select}
				onChange={(event) => {
					const story = exampleStories.get(event.target.value);

					if (story === undefined) {
						console.error("Story not found:", event.target.value);
					} else {
						setValue(story);
					}
				}}
				value={selectedStory}
			>
				{!selectedStory && (
					<option disabled value="">
						(custom story)
					</option>
				)}
				{storyEntries.map(([name]) => (
					<option key={name} value={name}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
}
