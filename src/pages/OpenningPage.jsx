import { useEffect, useState } from "react";
import logo2025Gif from "../assets/gifs/logo2025.gif";

const OpenningPage = ({ onOpenningComplete }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setIsLoading(false);
			// Change page after GIF duration
			setTimeout(onOpenningComplete, 10500);
		};
		img.src = logo2025Gif;
	}, []);

	if (isLoading) {
		return (
			<div className="openning page">
				<div className="loading">...</div>
			</div>
		);
	}

	return (
		<div className="openning page">
			<div className="openning-gif-container">
				<img src={logo2025Gif} alt="Opening animation" />
			</div>
			<button className="skip-btn" onClick={onOpenningComplete}>
				跳过
			</button>
		</div>
	);
};

export default OpenningPage;
