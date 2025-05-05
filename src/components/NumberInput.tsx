import { Labeled } from "./Labeled";
import styles from "./NumberInput.module.css";

export interface NumberInputProps {
	label: string;
	name: string;
	setValue: (value: number) => void;
	value: number;
}

export function NumberInput({
	label,
	name,
	setValue,
	value,
}: NumberInputProps) {
	return (
		<Labeled label={label} name={name}>
			<input
				className={styles.numberInput}
				id={name}
				name={name}
				onChange={(event) => {
					setValue(+event.target.value);
				}}
				type="number"
				value={value}
			/>
		</Labeled>
	);
}
