import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker";
import "./Map.scss";

const Map = ({ setCoords, setBounds, coordinates, places, setSelectedPlaceIdx, rating }) => {
	return (
		<div className="map__container">
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY as string }}
				defaultCenter={{ lat: 11.940419, lng: 108.458313 }}
				center={coordinates}
				defaultZoom={17}
				margin={[50, 50, 50, 50]}
				onChange={(e) => {
					setCoords({ lat: e.center.lat, lng: e.center.lng });
					setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
				}}
			>
				{places?.map((place: any, idx: number) => (
					<Marker
						key={idx}
						lat={+place.latitude}
						lng={+place.longitude}
						title={place.name}
						idx={idx}
						setSelectedPlaceIdx={setSelectedPlaceIdx}
					></Marker>
				))}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
