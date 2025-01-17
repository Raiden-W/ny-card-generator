import { motion } from "framer-motion";
import artist_0 from "../assets/images/artists/artist_0.png";
import artist_1 from "../assets/images/artists/artist_1.png";
import artist_2 from "../assets/images/artists/artist_2.png";
import artist_3 from "../assets/images/artists/artist_3.png";
import artist_4 from "../assets/images/artists/artist_4.png";
import aText_0 from "../assets/images/artists-text/atext_0.png";
import aText_1 from "../assets/images/artists-text/atext_1.png";
import aText_2 from "../assets/images/artists-text/atext_2.png";
import aText_4 from "../assets/images/artists-text/atext_4.png";
import handIcon from "../assets/images/hand.png";

const ArtistSwitcher = ({ currentIndex, onSwipe }) => {
	const artists = [artist_0, artist_1, artist_2, artist_3, artist_4];
	const aTexts = {
		0: aText_0,
		1: aText_1,
		2: aText_2,
		3: null,
		4: aText_4,
	};

	const handleDragEnd = (event, info) => {
		const swipeThreshold = 50;
		const { offset } = info;

		if (Math.abs(offset.x) > swipeThreshold) {
			if (offset.x > 0) {
				onSwipe("left");
			} else {
				onSwipe("right");
			}
		}
	};

	// Add hand animation variants
	const handAnimationRight = {
		initial: {
			x: 0,
			rotate: 0,
			opacity: 0,
		},
		animate: {
			x: [-25, -25, 50, 50], // Removed pause at start/end
			rotate: [0, 0, 30, 30],
			opacity: [0, 1, 1, 0],
			transition: {
				duration: 2,
				times: [0, 0.4, 0.95, 1],
				ease: "circOut",
				repeat: 1,
				// repeatDelay: 0.5, // Small delay between loops
			},
		},
	};

	const handAnimationLeft = {
		initial: {
			x: 0,
			rotate: 0,
			opacity: 0,
		},
		animate: {
			x: [-35, -35, -115, -115], // Removed pause at start/end
			rotate: [15, 15, 0, 0],
			opacity: [0, 1, 1, 0],
			transition: {
				duration: 2,
				times: [0, 0.4, 0.95, 1],
				ease: "circOut",
				delay: 1,
				repeat: 1,
				// repeatDelay: 0.5, // Small delay between loops
			},
		},
	};

	return (
		<div className="artist-switcher">
			<motion.div
				className="carousel-container"
				drag="x"
				dragConstraints={{ left: 0, right: 0 }}
				dragElastic={0}
				dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
				onDragEnd={handleDragEnd}
			>
				{artists.map((artist, index) => (
					<div
						key={index}
						className={`artist-card position-${
							(index - currentIndex + artists.length) % artists.length
						}`}
					>
						<img src={artist} alt={`Artist ${index}`} />
					</div>
				))}
			</motion.div>
			{/* Add hand tip animation */}
			<motion.div
				className="hand-tip"
				variants={handAnimationRight}
				initial="initial"
				animate="animate"
			>
				<img src={handIcon} alt="Swipe tip" />
			</motion.div>
			<motion.div
				className="hand-tip"
				variants={handAnimationLeft}
				initial="initial"
				animate="animate"
			>
				<img src={handIcon} alt="Swipe tip" />
			</motion.div>
			<div className="artist-text carousel-bottom">
				{aTexts[currentIndex] && (
					<img src={aTexts[currentIndex]} alt={`Artist Text ${currentIndex}`} />
				)}
			</div>
		</div>
	);
};

export default ArtistSwitcher;
