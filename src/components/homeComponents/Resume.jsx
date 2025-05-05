import React from "react";
import ZoomImg from "../ZoomImg";

export default function Resume() {
	return (
		<div className="hresume homebox p-4 sm:p-6 md:p-8 relative overflow-hidden">
			<div></div>
			<div className="font-regular font-thin text-base sm:text-lg md:text-xl text-white">
				<div className="cristik opacity-45 text-sm sm:text-base md:text-lg">
					Grab My
				</div>
				<div className="cristik text-xl sm:text-2xl md:text-4xl">Resume</div>
				<p className="opacity-75 text-sm sm:text-base md:text-lg leading-6 text-yellow-200 font-thin">
					View Complete Online <br />
					Resume →
				</p>

				<ZoomImg
					className="w-[70%] sm:w-[75%] md:w-[80%] absolute bottom-[-10px] sm:bottom-[-15px] md:bottom-[-20px] left-[10px] sm:left-[15px] md:left-[20px] z-10 rotate-12 hover:rotate-[16deg] hover:scale-[1.1] transition-transform peer cursor-pointer rounded-lg"
					src="resume1.png"
					alt="Resume"
				/>

				<img
					className="w-[70%] sm:w-[75%] md:w-[80%] absolute opacity-45 bottom-[-10px] sm:bottom-[-15px] md:bottom-[-20px] left-[10px] sm:left-[15px] md:left-[20px] rotate-16 peer-hover:rotate-4 peer-hover:scale-[1.1] rounded-lg transition-transform"
					src="resume.jpg"
					alt="Resume Background"
				/>
			</div>
		</div>
	);
}
