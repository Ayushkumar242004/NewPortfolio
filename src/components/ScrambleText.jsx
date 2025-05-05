// src/components/ScrambleText.js
import React, { useState } from "react";

const ScrambleText = ({ children = "SAHIL", className = "" }) => {
	const [displayedText, setDisplayedText] = useState(children);
	const originalText = children;
	const chars = '!@#$%^&*()_+{}:"<>?';

	const scramble = (text, length) => {
		return text
			.split("")
			.map((char, i) =>
				i < length ? chars[Math.floor(Math.random() * chars.length)] : char
			)
			.join("");
	};

	const handleMouseEnter = () => {
		let counter = 0;
		const interval = setInterval(() => {
			setDisplayedText(scramble(originalText, counter));
			counter++;
			if (counter > originalText.length) {
				clearInterval(interval);
				setDisplayedText(originalText);
			}
		}, 100);
	};

	return (
		<p
			onMouseEnter={handleMouseEnter}
			className={`${className} cursor-pointer`}
		>
			{displayedText}
		</p>
	);
};

export default ScrambleText;
