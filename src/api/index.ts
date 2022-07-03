import axios from "axios";

export const getPlacesData = async function (ne: any = {}, sw: any = {}, type = "restaurants") {
	const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
	try {
		const response = await axios.get(URL, {
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
				// "X-RapidAPI-Key": "e5a0e50ddbmsh09d456ae545928ap1e085fjsn4cf30a7b8d04",
				"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY as string,
				"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
			},
		});
		const data = response.data;
		return data.data;
	} catch (error) {
		alert(error);
	}
};
