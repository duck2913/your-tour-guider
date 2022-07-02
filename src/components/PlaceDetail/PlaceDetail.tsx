import "./PlaceDetail.scss";

interface Props {
	name: string;
}

const PlaceDetail = ({ name }: Props) => {
	return <div className="place-detail">{name}</div>;
};

export default PlaceDetail;
