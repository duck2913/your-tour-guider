import "./PlaceDetail.scss";
import Card from "@mui/material/Card";
import "./PlaceDetail.scss";
import Chip from "@mui/material/Chip";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const PlaceDetail = ({ data }) => {
	return (
		<div className="place-detail">
			<Card elevation={5}>
				<img src={data?.photo?.images?.large?.url} alt="place" />
				<div className="place-detail__content">
					<h2 className="place-detail__name">{data.name}</h2>
					<p className="place-detail__address">
						<FmdGoodIcon />
						{data.address}
					</p>
					<h5 className="place-detail__phone">
						<LocalPhoneIcon />
						<a href="tel">{data.phone}</a>
					</h5>
					<p className="place-detail__ranking">
						<MilitaryTechIcon />
						{data.ranking}
					</p>
					<p className="place-detail__price">
						<AccountBalanceWalletIcon />
						{data.price_level}
					</p>
					{data?.cuisine.map((tag: any) => (
						<Chip key={tag.name} label={tag.name} />
					))}
				</div>
			</Card>
		</div>
	);
};

export default PlaceDetail;
