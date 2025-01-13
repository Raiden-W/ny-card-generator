import { useState } from "react";

const FinalCardSelector = () => {
	const [selectedPic, setSelectedPic] = useState("");
	const [resultImage, setResultImage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleGenerate = async () => {
		if (selectedPic) {
			setIsLoading(true);
			try {
				// Dynamic import of the selected image
				const image = await import(`../assets/images/${selectedPic}.png`);
				setResultImage(image.default);
			} catch (error) {
				console.error("Failed to load image:", error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	return (
		<div className="image-selector">
			<select
				value={selectedPic}
				onChange={(e) => setSelectedPic(e.target.value)}
			>
				<option value="">Select an image</option>
				<option value="pic1">Picture 1</option>
				<option value="pic2">Picture 2</option>
				<option value="pic3">Picture 3</option>
			</select>

			<button onClick={handleGenerate} disabled={!selectedPic || isLoading}>
				Yes
			</button>

			{resultImage && (
				<div className="result-image">
					<img src={resultImage} alt="Selected result" />
				</div>
			)}
		</div>
	);
};

export default FinalCardSelector;
