import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./List.scss";
import { useState } from "react";
import PlaceDetail from "../PlaceDetail/PlaceDetail";
import { PacmanLoader } from "react-spinners";

const List = ({ places, isLoading }) => {
	const [type, setType] = useState("restaurants");
	const [rating, setRating] = useState(0);

	return (
		<div className="list__container">
			<div className="list__content">
				<Typography variant="h5" color="initial" sx={{ marginBottom: "1rem" }}>
					Restaurants, Hotels and Attractions around you
				</Typography>
				<FormControl>
					<InputLabel id="demo-simple-select-label">Type</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={type}
						label="Age"
						onChange={(e) => setType(e.target.value)}
						sx={{ width: "10rem" }}
					>
						<MenuItem value={"restaurants"}>Restaurants</MenuItem>
						<MenuItem value={"hotels"}>Hotels</MenuItem>
						<MenuItem value={"attractions"}>Attractions</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={{ marginLeft: "1rem" }}>
					<InputLabel id="demo-simple-select-label">Rating</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={rating}
						label="Age"
						onChange={(e) => setRating(+e.target.value)}
						sx={{ width: "8rem" }}
					>
						<MenuItem value={0}>All</MenuItem>
						<MenuItem value={3}>Above 3.0</MenuItem>
						<MenuItem value={4}>Above 4.0</MenuItem>
						<MenuItem value={4.5}>Above 4.5</MenuItem>
					</Select>
				</FormControl>
				{isLoading && (
					<PacmanLoader
						className="loader"
						loading={isLoading}
						size={50}
						color={"#36D7B7"}
					/>
				)}
				{!isLoading && (
					<div className="list__items">
						{places
							?.filter(
								(place: any) => place?.name && place?.photo?.images?.large?.url,
							)
							?.map((placeData: any, idx: number) => (
								<PlaceDetail key={idx} data={placeData} />
							))}
					</div>
				)}
			</div>
		</div>
	);
};

export default List;
