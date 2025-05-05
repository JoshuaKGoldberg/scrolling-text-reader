import { Labeled } from "./Labeled";
import styles from "./SelectInput.module.css";

export interface SelectInputProps<Option extends string> {
	label: string;
	name: string;
	options: Option[];
	setValue: (value: Option) => void;
	value: Option;
}

export function SelectInput<Option extends string>({
	label,
	name,
	options,
	setValue,
	value,
}: SelectInputProps<Option>) {
	return (
		<Labeled label={label} name={name}>
			<select
				className={styles.selectInput}
				id={name}
				name={name}
				onChange={(event) => {
					setValue(event.target.value as Option);
				}}
				value={value}
			>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</Labeled>
	);
}
