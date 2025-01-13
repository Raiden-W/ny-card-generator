import { useState } from "react";
import "./App.scss";
import OpenningPage from "./pages/OpenningPage";
import SwitcherPage from "./pages/SwitcherPage";
import ResultPage from "./pages/ResultPage";
import FinalCardSelector from "./components/FinalCardSelector";

function App() {
	const [currentPage, setCurrentPage] = useState("opening");

	const handleOpenningComplete = () => {
		setCurrentPage("switcher");
	};

	return (
		<div className="app-wrapper">
			{currentPage === "opening" && (
				<OpenningPage onOpenningComplete={handleOpenningComplete} />
			)}
			{currentPage === "switcher" && <SwitcherPage />}
			{currentPage === "result" && <ResultPage />}
		</div>
	);
}

export default App;
