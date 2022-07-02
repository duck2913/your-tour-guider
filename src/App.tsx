import { useEffect, useState } from "react";
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import "./index.css";

function App() {
	const [coords, setCoords] = useState<any>(null);
	const [bounds, setBounds] = useState<any>({ ne: {}, sw: {} });
	const [places, setPlaces] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	console.log(places);
	console.log(places[0]);

	useEffect(() => {
		setCoords({ lat: 11.940419, lng: 108.458313 });
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(true);
			getPlacesData(bounds.ne, bounds.sw).then((data) => {
				data && setPlaces(data);
				setIsLoading(false);
			});
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [bounds]);

	return (
		<div className="App">
			<Header />
			<div className="main">
				<List places={places} isLoading={isLoading} />
				<Map setCoords={setCoords} setBounds={setBounds} coordinates={coords} />
			</div>
		</div>
	);
}

export default App;
