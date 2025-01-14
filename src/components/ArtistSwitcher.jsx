import { motion } from "framer-motion";
import artist_0 from "../assets/images/artists/artist_0.png";
import artist_1 from "../assets/images/artists/artist_1.png";
import artist_2 from "../assets/images/artists/artist_2.png";
import artist_3 from "../assets/images/artists/artist_3.png";

const ArtistSwitcher = ({ currentIndex, onSwipe }) => {
	const artists = [artist_0, artist_1, artist_2, artist_3];

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
		</div>
	);
};

export default ArtistSwitcher;
