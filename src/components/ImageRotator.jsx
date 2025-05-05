import React, { useState, useEffect } from "react";
import "./ImageRotator.css";

const ImageRotator = ({ centralImage, orbits }) => {
	const [angles, setAngles] = useState(orbits.map(() => 0));

	useEffect(() => {
		const intervals = orbits.map((orbit, index) => {
			return setInterval(() => {
				setAngles((prevAngles) => {
					const newAngles = [...prevAngles];
					newAngles[index] = (newAngles[index] + 1) % 360;
					return newAngles;
				});
			}, orbit.speed);
		});

		return () => intervals.forEach(clearInterval);
	}, [orbits]);

	return (
		<div className="image-rotator ">
			{orbits.map((orbit, orbitIndex) => (
				<React.Fragment key={orbitIndex}>
					<div
						className="orbit-ring"
						style={{
							width: `${orbit.radius * 2}px`,
							height: `${orbit.radius * 2}px`,
						}}
					/>
					{orbit.images.map((image, imageIndex) => {
						const orbitAngle =
							angles[orbitIndex] + (imageIndex * 360) / orbit.images.length;
						const x = orbit.radius * Math.cos((orbitAngle * Math.PI) / 180);
						const y = orbit.radius * Math.sin((orbitAngle * Math.PI) / 180);

						return (
							<div
								className="orbiting-div flex items-center justify-center"
								key={`${orbitIndex}-${imageIndex}`}
								style={{
									transform: `translate(${x}px, ${y}px)`,
									width: `${orbit.imageSize}px`,
									height: `${orbit.imageSize}px`,
								}}
							>
								<img
									src={image}
									alt={`Orbiting ${orbitIndex}-${imageIndex}`}
									className="orbiting-image"
								/>
							</div>
						);
					})}
				</React.Fragment>
			))}
			<img src={centralImage} alt="Central" className="central-image" />
		</div>
	);
};

export default ImageRotator;
