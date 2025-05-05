import React from "react";
import QuoteCarousel from "../QuoteCarousel";

export default function Quotes() {
	const quotes = [
		{
			quote: "The best way to predict the future is to invent it.",
			author: "Alan Kay",
		},
		{
			quote: "Life is 10% what happens to us and 90% how we react to it.",
			author: "Charles R. Swindoll",
		},
		{ quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
		{ quote: "Get busy living or get busy dying.", author: "Stephen King" },
	];
	return (
		<div className="hquotes homebox">
			<QuoteCarousel quotes={quotes} />
		</div>
	);
}
