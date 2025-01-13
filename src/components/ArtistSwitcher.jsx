import { useState } from "react";
import artist_1 from "../assets/images/artists/artist_1.png";
import artist_2 from "../assets/images/artists/artist_2.png";
import artist_3 from "../assets/images/artists/artist_3.png";
import artist_4 from "../assets/images/artists/artist_4.png";

const ArtistSwitcher = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const artists = [artist_1, artist_2, artist_3, artist_4];

	const handleLeftClick = () => {
		setCurrentIndex((prev) => (prev === 0 ? artists.length - 1 : prev - 1));
	};

	const handleRightClick = () => {
		setCurrentIndex((prev) => (prev === artists.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="artist-switcher">
			<div className="carousel-container">
				{artists.map((artist, index) => {
					const position =
						(index - currentIndex + artists.length) % artists.length;
					return (
						<div key={index} className={`artist-card position-${position}`}>
							<img src={artist} alt={`Artist ${index + 1}`} />
						</div>
					);
				})}
			</div>
			<div className="switch-buttons">
				<button className="switch-btn left" onClick={handleLeftClick}>
					←
				</button>
				<button className="switch-btn right" onClick={handleRightClick}>
					→
				</button>
			</div>
		</div>
	);
};

export default ArtistSwitcher;
