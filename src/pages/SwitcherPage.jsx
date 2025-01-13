import ArtistSwitcher from "../components/ArtistSwitcher";
import FrameSwitcher from "../components/FrameSwitcher";
import WishSwitcher from "../components/WishSwitcher";

const SwitcherPage = () => {
	return (
		<div className="switcher page">
			<h3>选择艺人</h3>
			<div className="switcher-container">
				<ArtistSwitcher />
			</div>
			<button className="next-btn">下一步</button>
		</div>
	);
};

export default SwitcherPage;
