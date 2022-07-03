import { useEffect, useState } from "react";
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import "./index.css";

function App() {
	const [coords, setCoords] = useState<any>(null);
	const [bounds, setBounds] = useState<any>({ ne: {}, sw: {} });
	const [places, setPlaces] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedPlaceIdx, setSelectedPlaceIdx] = useState(null);
	const [type, setType] = useState("restaurants");
	const [rating, setRating] = useState(0);

	// set initial place is da lat
	useEffect(() => {
		setCoords({ lat: 11.940419, lng: 108.458313 });
	}, []);

	//filter by rating
	useEffect(() => {
		setPlaces(places.filter((place: any) => place.rating >= rating));
	}, [rating, places]);

	// get data from api
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(true);
			getPlacesData(bounds.ne, bounds.sw, type).then((data) => {
				const placesData = data?.filter(
					(place: any) => place?.name && place?.photo?.images?.large?.url,
				);
				placesData && setPlaces(placesData);
				setIsLoading(false);
			});
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [bounds, type, coords]);

	return (
		<div className="App">
			<Header setCoords={setCoords} />
			<div className="main">
				<List
					places={places}
					isLoading={isLoading}
					selectedPlaceIdx={selectedPlaceIdx}
					setType={setType}
					type={type}
					setRating={setRating}
					rating={rating}
				/>
				<Map
					setCoords={setCoords}
					setBounds={setBounds}
					coordinates={coords}
					places={places}
					setSelectedPlaceIdx={setSelectedPlaceIdx}
					rating={rating}
				/>
			</div>
		</div>
	);
}

export default App;
