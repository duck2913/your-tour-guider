import { useEffect, useState } from "react";
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import "./index.css";

function App() {
	const [coords, setCoords] = useState<any>(null);
	const [bounds, setBounds] = useState<any>({ ne: {}, sw: {} });

	useEffect(() => {
		console.log(
			navigator.geolocation.getCurrentPosition((pos) => {
				setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
			}),
		);
	}, []);

	useEffect(() => {
		getPlacesData(bounds.ne, bounds.sw).then((data) => {
			console.log(data);
		});
	}, [coords, bounds]);

	return (
		<div className="App">
			<Header />
			<div className="main">
				<List />
				<Map setCoords={setCoords} setBounds={setBounds} coordinates={coords} />
			</div>
		</div>
	);
}

export default App;
