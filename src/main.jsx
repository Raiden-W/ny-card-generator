// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";

// Add WeChat bridge listener before React renders
document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
	WeixinJSBridge.call("hideOptionMenu");
	WeixinJSBridge.call("hideToolbar");
});

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	<App />
	// </StrictMode>
);
