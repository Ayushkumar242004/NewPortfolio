import React, { useState, useEffect } from "react";
// Import your CSS file

const Loader = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000); // Adjust the duration as needed

		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`fixed z-[50] w-full h-[100vh] top-0 transition-transform duration-1000 ${
				!loading && "slide-up"
			}`}
		>
			<div className="stripe">
				<div className="cristik stripe_inner">Loading....</div>
			</div>
		</div>
	);
};

export default Loader;
