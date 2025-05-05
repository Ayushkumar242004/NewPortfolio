import React from "react";

const ImageMarquee = ({ images }) => {
	// Duplicate the images to create a seamless effect
	const duplicatedImages = [...images, ...images];

	return (
		<div className="relative  w-full lg:h-48 md:h-48 h-36">
			<div
				className="flex whitespace-nowrap"
				style={{
					animation: "marquee 15s linear infinite", // Inline CSS for animation
				}}
			>
				{duplicatedImages.map((src, index) => (
					<img
						key={index}
						src={src}
						alt={`Image ${index + 1}`}
						className="h-[200px] object-cover mr-4 transform transition-transform duration-300 hover:scale-[1.3] hover:-translate-y-[30px] hover:skew-y-4 hover:rotate-6 hover:shadow-2xl hover:z-50 lg:max-w-[240px] md:max-w-[240px] max-w-[120px]" // Tailwind CSS for styling
					/>
				))}
			</div>
		</div>
	);
};

export default ImageMarquee;
