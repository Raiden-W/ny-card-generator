import openningVideo from "../assets/videos/test_openning_video.mp4";

const OpenningPage = () => {
	return (
		<div className="openning page">
			<div className="openning-video-container">
				<video
					autoPlay
					muted // browsers usually require muted for autoPlay to work
					src={openningVideo}
				/>
			</div>
			<button className="skip-btn">跳过</button>
		</div>
	);
};

export default OpenningPage;
