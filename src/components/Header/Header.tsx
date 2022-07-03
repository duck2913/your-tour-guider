import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

export default function Header({ setCoords }) {
	const [searchTerm, setSearchTerm] = useState("");

	const [autoComplete, setAutoComplete] = useState<any>(null);

	function handleOnPlaceChange() {
		const lat = autoComplete.getPlace().geometry.location.lat();
		const lng = autoComplete.getPlace().geometry.location.lng();
		setCoords({ lat, lng });
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h5"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						TOUR BUDDY
					</Typography>
					<Typography variant="body1">Explore new places</Typography>
					<Autocomplete
						onLoad={(autoC) => setAutoComplete(autoC)}
						onPlaceChanged={handleOnPlaceChange}
					>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								placeholder="Search…"
								inputProps={{ "aria-label": "search" }}
							/>
						</Search>
					</Autocomplete>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
