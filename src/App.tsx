import { useState } from "react";

import { InputsForm, InputsState } from "./components/InputsForm";
import { ScrollingDisplay } from "./components/ScrollingDisplay";

export function App() {
	const [inputs, setInputs] = useState<InputsState>();

	return inputs ? (
		<ScrollingDisplay inputs={inputs} />
	) : (
		<InputsForm setInputsState={setInputs} />
	);
}
