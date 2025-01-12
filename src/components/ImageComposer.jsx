import { useRef, useState } from "react";
// Import your preset images
import background1 from "../assets/images/background.png";
import frame1 from "../assets/images/frame1.png";
import frame2 from "../assets/images/frame2.png";
import frame3 from "../assets/images/frame3.png";
import wish1 from "../assets/images/wish1.png";
import wish2 from "../assets/images/wish2.png";
// ... import other preset images

const FRAME_LAYOUTS = {
	frame1: {
		artistProfile: { x: 100, y: 200, width: 400, height: 600 },
		wish: { x: 300, y: 800, width: 200, height: 100 },
	},
	frame2: {
		artistProfile: { x: 200, y: 300, width: 400, height: 600 },
		wish: { x: 400, y: 900, width: 200, height: 100 },
	},
	frame3: {
		artistProfile: { x: 300, y: 400, width: 400, height: 600 },
		wish: { x: 500, y: 1000, width: 200, height: 100 },
	},
};

const ImageComposer = ({ onCompositionComplete }) => {
	const [selectedFrame, setSelectedFrame] = useState("frame1");
	const [selectedWish, setSelectedWish] = useState(null);
	const [selectedArtistProfile, setSelectedArtistProfile] = useState(null);
	const canvasRef = useRef(null);

	const composeImages = async () => {
		if (!selectedFrame || !selectedWish || !selectedArtistProfile) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const layout = FRAME_LAYOUTS[selectedFrame];

		// Load all images first
		const loadImage = (src) => {
			return new Promise((resolve) => {
				const img = new Image();
				img.onload = () => resolve(img);
				img.src = src;
			});
		};

		try {
			// Load images in order
			const backgroundImg = await loadImage(background1);
			const artistProfileImg = await loadImage(selectedArtistProfile);
			const frameImg = await loadImage(selectedFrame);
			const wishImg = await loadImage(selectedWish);

			// Clear canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw background
			ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

			// Draw artist profile in position according to frame type
			ctx.drawImage(
				artistProfileImg,
				layout.artistProfile.x,
				layout.artistProfile.y,
				layout.artistProfile.width,
				layout.artistProfile.height
			);

			// Draw frame
			ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

			// Draw wish
			ctx.drawImage(
				wishImg,
				layout.wish.x,
				layout.wish.y,
				layout.wish.width,
				layout.wish.height
			);

			// Convert canvas to blob and pass to parent
			canvas.toBlob((blob) => {
				const resultImageUrl = URL.createObjectURL(blob);
				onCompositionComplete(resultImageUrl);
			}, "image/png");
		} catch (error) {
			console.error("Error composing images:", error);
		}
	};

	return (
		<div className="image-composer">
			<div className="selection-options">
				<div className="frame-selection">
					<h3>选择相框</h3>
					<div className="options">
						<img src={frame1} onClick={() => setSelectedFrame("frame1")} />
						<img src={frame2} onClick={() => setSelectedFrame("frame2")} />
						<img src={frame3} onClick={() => setSelectedFrame("frame3")} />
					</div>
				</div>

				<div className="artist-selection">
					<h3>选择艺术家照片</h3>
					{/* Add your artist profile options here */}
				</div>

				<div className="wish-selection">
					<h3>选择祝福语</h3>
					<div className="options">
						<img src={wish1} onClick={() => setSelectedWish(wish1)} />
						<img src={wish2} onClick={() => setSelectedWish(wish2)} />
					</div>
				</div>
			</div>

			<canvas
				ref={canvasRef}
				width={1080}
				height={1920}
				style={{ display: "none" }}
			/>

			<button
				onClick={composeImages}
				disabled={!selectedFrame || !selectedWish || !selectedArtistProfile}
			>
				生成图片
			</button>
		</div>
	);
};

export default ImageComposer;
