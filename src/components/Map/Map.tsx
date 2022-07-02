import GoogleMapReact from "google-map-react";
import "./Map.scss";

const Map = ({ setCoords, setBounds, coordinates }) => {
	return (
		<div className="map__container">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyAMrJR4YazkuWANDBHczWxbchpgyYSPIPk" }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				onChange={(e) => {
					setCoords({ lat: e.center.lat, lng: e.center.lng });
					setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
				}}
			></GoogleMapReact>
		</div>
	);
};

export default Map;
