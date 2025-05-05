import clsx from "clsx";

import styles from "./Button.module.css";

export interface ButtonProps {
	bold?: boolean;
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
	onClick: () => void;
}

export function Button({
	bold,
	children,
	className,
	disabled,
	onClick,
}: ButtonProps) {
	return (
		<button
			className={clsx(
				styles.button,
				bold && styles.bold,
				disabled && styles.disabled,
				className,
			)}
			disabled={disabled}
			onClick={(event) => {
				event.preventDefault();
				onClick();
			}}
			type="button"
		>
			{children}
		</button>
	);
}
