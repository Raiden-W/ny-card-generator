import { useRef, useState } from "react";
import ArtistSwitcher from "../components/ArtistSwitcher";
import FrameSwitcher from "../components/FrameSwitcher";
import WishSwitcher from "../components/WishSwitcher";
import "./SwitcherPage.scss";
import logo from "../assets/images/logo.png";
const SwitcherPage = () => {
	const [currentStep, setCurrentStep] = useState(0); // 0: artist, 1: frame, 2: wish
	const chosenArtistIndexRef = useRef(0);
	const chosenFrameIndexRef = useRef(0);
	const chosenWishIndexRef = useRef(0);
	const currentIndexRef = useRef(0);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleSwitch = (direction) => {
		setCurrentIndex((prev) => {
			let maxLength;
			switch (currentStep) {
				case 0:
					maxLength = 4; // number of artists
					break;
				case 1:
					maxLength = 3; // number of frames
					break;
				case 2:
					maxLength = 3; // number of wishes
					break;
				default:
					maxLength = 4;
			}

			const newIndex =
				direction === "left"
					? prev === 0
						? maxLength - 1
						: prev - 1
					: prev === maxLength - 1
					? 0
					: prev + 1;

			currentIndexRef.current = newIndex;
			return newIndex;
		});
	};

	const handleNextStep = () => {
		switch (currentStep) {
			case 0:
				chosenArtistIndexRef.current = currentIndexRef.current;
				setCurrentStep(1);
				setCurrentIndex(0); // Reset index for next step
				break;
			case 1:
				chosenFrameIndexRef.current = currentIndexRef.current;
				setCurrentStep(2);
				setCurrentIndex(0); // Reset index for next step
				break;
			case 2:
				chosenWishIndexRef.current = currentIndexRef.current;
				// Handle completion
				break;
		}
	};

	return (
		<div className="switcher page">
			<div className="logo-container">
				<img src={logo} alt="logo" />
			</div>
			<div className="switcher-container">
				{currentStep === 0 && (
					<ArtistSwitcher currentIndex={currentIndex} onSwipe={handleSwitch} />
				)}
				{currentStep === 1 && (
					<FrameSwitcher currentIndex={currentIndex} onSwipe={handleSwitch} />
				)}
				{currentStep === 2 && (
					<WishSwitcher currentIndex={currentIndex} onSwipe={handleSwitch} />
				)}
			</div>
			<div className="btns-container">
				<div className="switch-btn left" onClick={() => handleSwitch("left")}>
					←
				</div>
				<div className="next-btn" onClick={handleNextStep}>
					下一步
				</div>
				<div className="switch-btn right" onClick={() => handleSwitch("right")}>
					→
				</div>
			</div>
		</div>
	);
};

export default SwitcherPage;
