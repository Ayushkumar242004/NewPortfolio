import React, { useState, useEffect } from "react";

const TypingEffect = ({ textData }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const { text, color = "white" } = textData[currentIndex];

		const type = () => {
			if (!isDeleting && currentText.length < text.length) {
				setCurrentText(text.slice(0, currentText.length + 1));
			} else if (isDeleting && currentText.length > 0) {
				setCurrentText(text.slice(0, currentText.length - 1));
			} else if (currentText.length === text.length) {
				setTimeout(() => setIsDeleting(true), 1500);
			} else if (currentText.length === 0) {
				setIsDeleting(false);
				setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
			}
		};

		const typingSpeed = isDeleting ? 50 : 150;
		const timer = setTimeout(type, typingSpeed);

		return () => clearTimeout(timer);
	}, [currentText, currentIndex, isDeleting, textData]);

	const { color = "white" } = textData[currentIndex];

	return (
		<div className="">
			<span className={`text-${color}-500`}>{currentText}_</span>
		</div>
	);
};

export default TypingEffect;
