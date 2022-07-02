import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker";
import "./Map.scss";

const Map = ({ setCoords, setBounds, coordinates, places }) => {
	return (
		<div className="map__container">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyAMrJR4YazkuWANDBHczWxbchpgyYSPIPk" }}
				defaultCenter={{ lat: 11.940419, lng: 108.458313 }}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				onChange={(e) => {
					setCoords({ lat: e.center.lat, lng: e.center.lng });
					setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
				}}
			>
				{places.map((place) => (
					<Marker
						lat={+place.latitude}
						lng={+place.longitude}
						title={place.name}
					></Marker>
				))}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
