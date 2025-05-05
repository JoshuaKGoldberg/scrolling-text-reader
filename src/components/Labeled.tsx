import styles from "./Labeled.module.css";

export interface LabeledProps {
	children: React.ReactNode;
	label: string;
	name: string;
}

export function Labeled({ children, label, name }: LabeledProps) {
	return (
		<div className={styles.labeled}>
			<label className={styles.label} htmlFor={name}>
				{label}:
			</label>
			{children}
		</div>
	);
}
