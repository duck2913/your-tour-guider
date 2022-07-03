import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Marker.scss";

const Marker = ({ lat, lng, title, idx, setSelectedPlaceIdx }) => {
	return (
		<div
			className="marker"
			onClick={() => {
				setSelectedPlaceIdx(idx);
			}}
		>
			<p className="marker__title">{title}</p>
			<LocationOnIcon className="icon" />
		</div>
	);
};

export default Marker;
