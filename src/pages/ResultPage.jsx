import { useState } from "react";

const ResultPage = () => {
	const [resultImage, setResultImage] = useState(null);

	const handleCompositionComplete = (imageUrl) => {
		setResultImage(imageUrl);
	};

	const handleSave = () => {
		if (resultImage) {
			const a = document.createElement("a");
			a.href = resultImage;
			a.download = "composed-image.png";
			a.click();
			URL.revokeObjectURL(resultImage);
		}
	};

	return <div className="result page"></div>;
};

export default ResultPage;
