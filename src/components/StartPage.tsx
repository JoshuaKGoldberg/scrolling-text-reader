import logo from "../assets/logo.svg";
import { SettingsForm, SettingsFormProps } from "./SettingsForm";
import styles from "./StartPage.module.css";

export function StartPage(props: SettingsFormProps) {
	return (
		<div className={styles.startPage}>
			<h1 className={styles.title}>
				<a
					className={styles.link}
					href="https://github.com/JoshuaKGoldberg/scrolling-text-reader"
					target="_blank"
				>
					<img
						alt="scrolling-text-reader Logo (an eye outline with three portrait rectangles inside"
						className={styles.logo}
						src={logo}
					/>
				</a>
				Scrolling Text Reader
			</h1>
			<SettingsForm {...props} />
		</div>
	);
}
