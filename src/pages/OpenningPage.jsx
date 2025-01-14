import { useEffect, useState } from "react";
import logo2025Gif from "../assets/gifs/logo2025.gif";
import skipBtn from "../assets/images/skip.png";

const OpenningPage = ({ onOpenningComplete }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let timeoutId; // Declare timeoutId in the effect scope

		const img = new Image();
		img.onload = () => {
			setIsLoading(false);
			timeoutId = setTimeout(() => {
				onOpenningComplete();
			}, 10500);
		};
		img.src = logo2025Gif;

		// Cleanup function at effect level
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, []);

	if (isLoading) {
		return (
			<div className="openning page">
				<div className="loading"></div>
			</div>
		);
	}

	return (
		<div className="openning page">
			<div className="openning-gif-container">
				<img src={logo2025Gif} alt="Opening animation" />
			</div>
			<div className="skip-btn" onClick={onOpenningComplete}>
				<img src={skipBtn} alt="skip" />
			</div>
		</div>
	);
};

export default OpenningPage;
