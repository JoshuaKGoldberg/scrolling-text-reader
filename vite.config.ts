import react from "@vitejs/plugin-react";

export default {
	build: {
		outDir: "../dist",
	},
	plugins: [react()],
	root: "src",
};
