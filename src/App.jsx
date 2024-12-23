import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";

function App() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		// Add a listener for changes to the screen size
		const mediaQuery = window.matchMedia("(max-width: 500px)");
		console.log("isMobile", isMobile);
		// Set the initial value of the `isMobile` state variable
		setIsMobile(mediaQuery.matches);

		// Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		// Add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// Remove the listener when the component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<>
			<Loader />
			<UI />
			<Canvas
				shadows
				camera={{
					position: isMobile ? [0, 4, 4] : [0, 1.6, 1.6],
					fov: 45,
				}}
			>
				<group position-y={0}>
					<Suspense fallback={null}>
						<Experience />
					</Suspense>
				</group>
			</Canvas>
		</>
	);
}

export default App;
