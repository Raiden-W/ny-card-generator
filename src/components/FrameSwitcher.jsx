import { motion } from "framer-motion";
import frame_0 from "../assets/images/frames/frame_0.jpg";
import frame_1 from "../assets/images/frames/frame_1.jpg";
import frame_2 from "../assets/images/frames/frame_2.jpg";

const FrameSwitcher = ({ currentIndex, onSwipe }) => {
	const frames = [frame_0, frame_1, frame_2];

	const handleDragEnd = (event, info) => {
		const swipeThreshold = 50; // minimum distance for swipe
		const { offset } = info;

		if (Math.abs(offset.x) > swipeThreshold) {
			if (offset.x > 0) {
				onSwipe("left");
			} else {
				onSwipe("right");
			}
		}
	};

	return (
		<div className="frame-switcher">
			<motion.div
				className="carousel-container"
				drag="x"
				dragConstraints={{ left: 0, right: 0 }}
				dragElastic={0}
				dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
				onDragEnd={handleDragEnd}
			>
				{frames.map((frame, index) => (
					<div
						key={index}
						className={`frame-card position-${
							(index - currentIndex + frames.length) % frames.length
						}`}
					>
						<img src={frame} alt={`Frame ${index}`} />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default FrameSwitcher;
