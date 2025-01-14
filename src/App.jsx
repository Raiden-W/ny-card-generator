import { useRef, useState } from "react";
import "./App.scss";
import background from "./assets/images/bg.jpg";
import OpenningPage from "./pages/OpenningPage";
import SwitcherPage from "./pages/SwitcherPage";
import ResultPage from "./pages/ResultPage";
import FinalCardSelector from "./components/FinalCardSelector";

function App() {
	const [currentPage, setCurrentPage] = useState("opening");

	const resultIndexRef = useRef("");

	const handleOpenningComplete = () => {
		setCurrentPage("switcher");
	};

	return (
		<div className="app-wrapper">
			<img src={background} alt="background" className="background" />
			{currentPage === "opening" && (
				<OpenningPage onOpenningComplete={handleOpenningComplete} />
			)}
			{currentPage === "switcher" && (
				<SwitcherPage resultIndexRef={resultIndexRef} />
			)}

			{currentPage === "result" && <ResultPage />}
		</div>
	);
}

export default App;
