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
		<div className={styles.numberInput}>
			<label htmlFor={name}>{label}:</label>
			<input
				id={name}
				name={name}
				onChange={(event) => {
					setValue(+event.target.value);
				}}
				type={"number"}
				value={value}
			/>
		</div>
	);
}
