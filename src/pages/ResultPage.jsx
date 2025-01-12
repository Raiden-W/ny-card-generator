import { useState } from "react";
import ImageComposer from "../components/ImageComposer";

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

	return (
		<div className="result page">
			{!resultImage ? (
				<ImageComposer onCompositionComplete={handleCompositionComplete} />
			) : (
				<>
					<div className="result-image">
						<img src={resultImage} alt="Composed result" />
					</div>
					<button onClick={handleSave}>保存</button>
				</>
			)}
		</div>
	);
};

export default ResultPage;
