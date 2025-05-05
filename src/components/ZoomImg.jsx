import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "../App.css";

import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ZoomImg = (props) => {
	const [isZoomed, setIsZoomed] = useState(false);

	const handleZoomChange = useCallback((shouldZoom) => {
		setIsZoomed(shouldZoom);
	}, []);

	return (
		<ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
			<img {...props} />
		</ControlledZoom>
	);
};

export default ZoomImg;
