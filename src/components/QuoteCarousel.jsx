import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const QuoteCarousel = ({ quotes }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [translateX, setTranslateX] = useState(0);

	useEffect(() => {
		setTranslateX(-currentIndex * 100); // Set the translateX based on currentIndex
	}, [currentIndex]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
		}, 5000); // Change quote every 5 seconds

		return () => clearInterval(interval);
	}, [quotes.length]);

	const handleSwipeLeft = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
	};

	const handleSwipeRight = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
		);
	};

	const handlers = useSwipeable({
		onSwipedLeft: handleSwipeLeft,
		onSwipedRight: handleSwipeRight,
		preventDefaultTouchmoveEvent: true,
		trackMouse: true, // Enable mouse tracking for desktop
	});

	return (
		<div
			{...handlers}
			className="relative overflow-hidden w-full h-full mx-auto p-4 sm:p-6 rounded-lg shadow-md cursor-pointer flex items-center justify-center select-none"
		>
			<div
				className="flex transition-transform duration-500"
				style={{ transform: `translateX(${translateX}%)` }}
			>
				{quotes.map((quote, index) => (
					<div
						key={index}
						className="cristik font-normal flex-shrink-0 w-full text-base sm:text-xl flex flex-col justify-center items-center p-2 sm:p-4 click-events-none"
					>
						<p className="italic text-sm sm:text-2xl max-w-[90%] text-center text-white">
							" {quote.quote} "
						</p>
						<div className="text-xs sm:text-sm text-yellow-300 mt-1 sm:mt-2">
							- {quote.author}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuoteCarousel;
