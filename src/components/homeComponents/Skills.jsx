import React from "react";
import OrbitingImages from "../OrbitingImages";
import TypingEffect from "../TypingEffect";

export default function Skills() {
	const textData = [
		{ text: "WEB Development" },
		{ text: "UI/UX Designing" },
		{ text: "Blockchain" },
		{ text: "Machine Learning" }, // This will use the default white color
	];
	return (
		<div className="hskills homebox relative overflow-hidden p-4 sm:p-6 md:p-8 flex flex-col justify-between">
			<div className="text-white text-xl sm:text-2xl md:text-3xl font-normal cristik">
				<TypingEffect textData={textData} />
			</div>
			<p className="text-base sm:text-lg md:text-xl text-yellow-300">
				<span className="cristik">
					View Skills <br />& technologies
				</span>

				<span className="opacity-75 text-sm sm:text-base md:text-[16px] leading-6 text-yellow-200 font-thin">
					See What all I can do →
				</span>
			</p>

			<OrbitingImages />
		</div>
	);
}
