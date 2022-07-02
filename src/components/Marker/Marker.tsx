import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Marker.scss";

const Marker = ({ lat, lng, title }) => {
	return (
		<div className="marker">
			<p className="marker__title">{title}</p>
			<LocationOnIcon className="icon" />
		</div>
	);
};

export default Marker;
