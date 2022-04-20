import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [Color, setColor] = useState("");
	//	const pickcolor = ["red", "yellow", "green"];
	return (
		<div className="trafficlight">
			<div
				onClick={() => setColor("red")}
				className={"red light" + (Color == "red" ? " on" : "")}></div>
			<div
				onClick={() => setColor("yellow")}
				className={
					"yellow light" + (Color == "yellow" ? " on" : "")
				}></div>
			<div
				onClick={() => setColor("green")}
				className={
					"green light" + (Color == "green" ? " on" : "")
				}></div>
			<button onClick={() => setColor("red")} class="btn btn-info">
				Press Me!
			</button>
		</div>
	);
};

export default Home;
