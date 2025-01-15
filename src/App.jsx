import { useEffect, useRef, useState } from "react";
import "./App.scss";
import background from "./assets/images/bg.jpg";
import OpenningPage from "./pages/OpenningPage";
import SwitcherPage from "./pages/SwitcherPage";
import ResultPage from "./pages/ResultPage";

function App() {
	const [currentPage, setCurrentPage] = useState("opening");

	const resultIndexRef = useRef("");

	useEffect(() => {
		document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
			WeixinJSBridge.call("hideOptionMenu");
			WeixinJSBridge.call("hideToolbar");
		});
	}, []);

	const handleOpenningComplete = () => {
		setCurrentPage("switcher");
	};

	const handleSwitcherComplete = () => {
		setCurrentPage("result");
	};

	const handleReturn = () => {
		setCurrentPage("switcher");
		resultIndexRef.current = ""; // Reset the result index
	};

	return (
		<div className="app-wrapper">
			<img src={background} alt="background" className="background" />
			{currentPage === "opening" && (
				<OpenningPage onOpenningComplete={handleOpenningComplete} />
			)}
			{currentPage === "switcher" && (
				<SwitcherPage
					resultIndexRef={resultIndexRef}
					onComplete={handleSwitcherComplete}
				/>
			)}

			{currentPage === "result" && (
				<ResultPage resultIndexRef={resultIndexRef} onReturn={handleReturn} />
			)}
		</div>
	);
}

export default App;
