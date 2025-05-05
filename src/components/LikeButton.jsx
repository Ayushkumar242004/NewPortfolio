import React, { useState } from "react";

const LikeButton = () => {
	const [isLiked, setIsLiked] = useState(false);

	const handleClick = () => {
		setIsLiked(!isLiked);
	};

	const heartGrid = [
		[0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	];

	return (
		<button
			onClick={handleClick}
			className={`
         p-8 rounded-full border-2 border-black
        ${isLiked ? "bg-[#500606]" : "bg-[#313131]"}
        transition-[transform,background-color] duration-300 ease-in-out
        focus:outline-none shadow-lg
        transform hover:scale-110
	
      `}
		>
			<div className="grid grid-cols-10 gap-1 ">
				{heartGrid.map((row, rowIndex) =>
					row.map((cell, cellIndex) => (
						<div
							key={`${rowIndex}-${cellIndex}`}
							className={`
               w-[5px] h-[5px]
                ${
									cell === 1
										? isLiked
											? "bg-[#cf3333]"
											: "bg-gray-500"
										: "bg-transparent"
								}
                ${isLiked && cell === 1 ? "animate-pulse" : ""}
              `}
						/>
					))
				)}
			</div>
		</button>
	);
};

export default LikeButton;
