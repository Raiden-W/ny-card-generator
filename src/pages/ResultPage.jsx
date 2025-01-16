import { useState, useEffect } from "react";
import returnBtn from "../assets/images/return.png";
import saveBtn from "../assets/images/save.png";

const ResultPage = ({ resultIndexRef, onReturn }) => {
	const [resultImage, setResultImage] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isEnlarged, setIsEnlarged] = useState(false);

	useEffect(() => {
		const loadResultImage = async () => {
			if (resultIndexRef.current) {
				console.log(resultIndexRef.current);

				setIsLoading(true);
				try {
					// Dynamic import of the result image based on resultIndexRef
					const image = await import(
						`../assets/images/results/${resultIndexRef.current}.png`
					);
					setResultImage(image.default);
				} catch (error) {
					console.error("Failed to load result image:", error);
				} finally {
					setIsLoading(false);
				}
			}
		};

		loadResultImage();
	}, [resultIndexRef.current]);

	const handleImageClick = () => {
		setIsEnlarged(!isEnlarged);
	};

	return (
		<div className="result page">
			<div
				className={`result-image ${isEnlarged ? "enlarged" : ""}`}
				onClick={handleImageClick}
			>
				{isLoading ? (
					<div></div>
				) : (
					resultImage && (
						<div className="image-wrapper">
							<img src={resultImage} alt="result" />
							<div className={`tip-text ${isEnlarged ? "enlarged" : ""}`}>
								长按图片保存或分享
							</div>
						</div>
					)
				)}
			</div>
			<div className={`btns-col-group ${isEnlarged ? "hidden" : ""}`}>
				<div className="btns-container">
					<div className="return-btn" onClick={onReturn}>
						<img src={returnBtn} alt="return" />
					</div>
					<div className="save-btn" onClick={handleImageClick}>
						<img src={saveBtn} alt="save" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultPage;
