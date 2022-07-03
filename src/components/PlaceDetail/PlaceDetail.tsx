import "./PlaceDetail.scss";
import Card from "@mui/material/Card";
import "./PlaceDetail.scss";
import Chip from "@mui/material/Chip";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const PlaceDetail = ({ data, refProp, selected }) => {
	if (selected) {
		refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	return (
		<div className="place-detail" ref={refProp}>
			<Card elevation={5}>
				<img src={data?.photo?.images?.large?.url} alt="place" />
				<div className="place-detail__content">
					<h2 className="place-detail__name">{data.name}</h2>
					<Rating
						name="read-only"
						value={+data.rating}
						readOnly
						className="place-detail__rating"
						precision={0.5}
					/>
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
					<div className="place-detail__tags">
						{data?.cuisine?.map((tag: any) => (
							<Chip key={tag.name} label={tag.name} />
						))}
					</div>
					<div className="place-detail__buttons">
						<Button variant="text" color="primary" href={data.web_url} target="_blank">
							Advisor
						</Button>
						<Button variant="text" color="primary" href={data.website} target="_blank">
							website
						</Button>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default PlaceDetail;
