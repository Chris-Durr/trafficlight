import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="trafficlight ">
			<div className="redlight"></div>
			<div className="redlight"></div>
			<div className="redlight"></div>
		</div>
	);
};

export default Home;
