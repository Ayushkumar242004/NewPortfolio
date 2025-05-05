import React from "react";
import ImageRotator from "./ImageRotator";

const OrbitingImages = () => {
	const orbits = [
		{
			radius: 110,
			imageSize: 40,
			speed: 30,
			images: [
				"tailwindcss.svg",
				"typescript.svg",
				"mongodb.svg",
				"expressjs.svg",
				"nodejs.svg",
				"reactquery.svg",
				"reactrouter.svg",
			],
		},
		{
			radius: 180,
			speed: 50,
			imageSize: 40,
			images: [
				"javascript.svg",
				"react.svg",
				"redux.svg",
				"tailwindcss.svg",
				"typescript.svg",
				"mongodb.svg",
				"expressjs.svg",
				"nodejs.svg",
				"reactquery.svg",
				"reactrouter.svg",
			],
		},
	];

	return (
		<div
			style={{ width: "400px", height: "400px", overflow: "hidden" }}
			className=" absolute bottom-[-140px] right-[-100px]"
		>
			<ImageRotator
				centralImage="https://e7.pngegg.com/pngimages/1010/961/png-clipart-white-and-red-next-and-previous-logo-computer-icons-source-code-html-coding-search-engine-optimization-text.png"
				orbits={orbits}
			/>
		</div>
	);
};

export default OrbitingImages;
