import React from "react";
import ScrambleText from "../components/ScrambleText";

export default function Experiments() {
	return (
		<article className="contact active" data-page="contact">
			<header>
				<h2 className="h2 article-title">Experiments</h2>
			</header>
			<div className="w-full h-[80vh] justify-center items-center flex flex-col text-white text-4xl ">
				<div className="flex justify-center gap-8 text-6xl text-yellow-300">
					<ion-icon name="flask-outline"></ion-icon>
					<span style={{ animationDuration: "3s" }} className="animate-spin">
						<ion-icon name="logo-react"></ion-icon>
					</span>
				</div>
				<p className="cristik text-center m-0 mt-8">
					<ScrambleText>Experiments</ScrambleText>
				</p>
				<p className="m-0 text-center text-xl opacity-40">
					<i>Some Cool Projects , Stuff and Experiments on the way</i>
					<br />
					<b>COMING SOON...</b>
				</p>
			</div>
		</article>
	);
}
