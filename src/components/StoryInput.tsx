import { exampleStories } from "../data/stories";
import styles from "./StoryInput.module.css";

export interface StoryInputProps {
	setValue: (newValue: string) => void;
	value: string;
}

export function StoryInput({ setValue, value: text }: StoryInputProps) {
	return (
		<div className={styles.storyInput}>
			<textarea
				className={styles.textarea}
				onChange={(event) => {
					setValue(event.target.value);
				}}
				value={text}
			/>
			<select
				className={styles.select}
				onChange={(event) => {
					const story = exampleStories.get(event.target.value);
					console.log("Story selected:", event.target.value);

					if (!story) {
						console.error("Story not found:", event.target.value);
					} else {
						setValue(story);
					}
				}}
			>
				<option disabled>Select a story...</option>
				{Array.from(exampleStories.keys()).map((name) => (
					<option key={name} value={name}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
}
