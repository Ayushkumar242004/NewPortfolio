import React from "react";

const Name = () => {
	const letters = [
		{
			// S
			points:
				"10,0 90,0 90,10 20,10 20,45 80,45 80,90 0,90 0,80 70,80 70,55 10,55 10,0",
			color: "hsl(0, 70%, 60%)",
		},
		{
			// A
			points:
				"0,90 35,0 65,0 100,90 90,90 80,65 20,65 10,90 0,90 M25,55 75,55 50,10 25,55",
			color: "hsl(60, 70%, 60%)",
		},
		{
			// H
			points:
				"0,0 20,0 20,40 80,40 80,0 100,0 100,90 80,90 80,50 20,50 20,90 0,90 0,0",
			color: "hsl(120, 70%, 60%)",
		},
		{
			// I
			points:
				"0,0 100,0 100,15 60,15 60,75 100,75 100,90 0,90 0,75 40,75 40,15 0,15 0,0",
			color: "hsl(180, 70%, 60%)",
		},
		{
			// L
			points: "0,0 20,0 20,75 90,75 90,90 0,90 0,0",
			color: "hsl(240, 70%, 60%)",
		},
	];

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<svg className="w-full max-w-3xl" viewBox="0 0 550 100">
				{letters.map((letter, index) => (
					<g key={index} transform={`translate(${110 * index}, 0)`}>
						<polygon points={letter.points} fill={letter.color} />
					</g>
				))}
			</svg>
		</div>
	);
};

export default Name;
