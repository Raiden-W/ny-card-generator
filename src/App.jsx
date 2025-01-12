import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.scss";
import OpenningPage from "./pages/OpenningPage";
import SwitcherPage from "./pages/SwitcherPage";
import ResultPage from "./pages/ResultPage";

function App() {
	return (
		<div className="app-wrapper">
			<OpenningPage />
			{/* <SwitcherPage />
			<ResultPage /> */}
		</div>
	);
}

export default App;
