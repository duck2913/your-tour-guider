import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async function (ne: any = {}, sw: any = {}) {
	const options = {
		method: "GET",
		params: {
			//south-west
			bl_latitude: sw.lat,
			bl_longitude: sw.lng,
			//north-east
			tr_latitude: ne.lat,
			tr_longitude: ne.lng,
		},
		headers: {
			"X-RapidAPI-Key": "e5a0e50ddbmsh09d456ae545928ap1e085fjsn4cf30a7b8d04",
			"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
		},
	};
	try {
		const response = await axios.get(URL, options);
		const data = response.data;
		return data.data;
	} catch (error) {
		alert(error);
	}
};
