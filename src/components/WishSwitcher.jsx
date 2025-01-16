import { motion } from "framer-motion";
import wish_0 from "../assets/images/wishes/wish_0.png";
import wish_1 from "../assets/images/wishes/wish_1.png";
import wish_2 from "../assets/images/wishes/wish_2.png";
import wish_bg from "../assets/images/wishes/wish_bg.png";
import selectWishText from "../assets/images/select_wish.png";

const WishSwitcher = ({ currentIndex, onSwipe }) => {
	const wishes = [wish_0, wish_1, wish_2];

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
		<div className="wish-switcher">
			<motion.div
				className="carousel-container"
				drag="x"
				dragConstraints={{ left: 0, right: 0 }}
				dragElastic={0}
				dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
				onDragEnd={handleDragEnd}
			>
				{wishes.map((wish, index) => (
					<div key={index}>
						<div
							className={`bg wish-card position-${
								(index - currentIndex + wishes.length) % wishes.length
							}`}
						>
							<img src={wish_bg} alt="wish_bg" />
						</div>
						<div
							className={`wish-card position-${
								(index - currentIndex + wishes.length) % wishes.length
							}`}
						>
							<img src={wish} alt={`Wish ${index}`} />
						</div>
					</div>
				))}
			</motion.div>
			<div className="wish-select-text carousel-bottom">
				<img src={selectWishText} alt="Select Wish" />
			</div>
		</div>
	);
};

export default WishSwitcher;
