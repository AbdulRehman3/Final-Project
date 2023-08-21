import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FoodCard = ({
	_id,
	name,
	isVegetarian,
	foodType,
	postedBy,
	createdAt,
	description,
	price,
	isAvailable,
}) => {
	const parsedDateTime = useMemo(() => {
		const dateTime = new Date(createdAt);

		const formattedDate = dateTime.toLocaleString('en-CA', {
			dateStyle: 'medium',
			timeStyle: 'short',
		});

		return formattedDate;
	}, [createdAt]);
	return (
		<FoodItem>
			<FoodName>
				{name}{' '}
				{isVegetarian && foodType === 'meal' && (
					<VeganBadge>Vegan Friendly</VeganBadge>
				)}
			</FoodName>
			<Label>
				Posted By: <span>{postedBy?.fullname}</span>
			</Label>
			<Label>
				Posted On: <span>{parsedDateTime}</span>
			</Label>
			<FoodDescription>{description}</FoodDescription>
			<FoodPrice>Price: ${price}</FoodPrice>
			<ActionButtonContainer>
				<DetailButton to={`/foods/detail/${_id}`}>View Detail</DetailButton>
				{isAvailable && (
					<OrderButton to={`/order/${_id}`}>Order Now</OrderButton>
				)}
			</ActionButtonContainer>
			{!isAvailable && <SoldOutBadge>Sold Out</SoldOutBadge>}
		</FoodItem>
	);
};

const FoodItem = styled.div`
	padding: 16px;
	border: 1px solid #ccc;
	border-radius: 8px;
	position: relative;
	overflow: hidden;
	max-width: 250px;
`;

const FoodName = styled.h3`
	margin-top: 0;
	margin-bottom: 10px;
	font-size: 16px;
`;

const VeganBadge = styled.span`
	font-size: 10px;
	padding: 4px 8px;
	border-radius: 10px;
	line-height: 1;
	border: 1px solid #4caf50;
	color: #4caf50;
	white-space: nowrap;
`;

const FoodDescription = styled.p`
	margin: 8px 0;
	font-size: 14px;
`;

const FoodPrice = styled.p`
	margin: 4px 0;
`;

const Label = styled.p`
	font-size: 12px;
	color: #595959;
	margin: 4px 0;
`;

const ActionButtonContainer = styled.div`
	margin-top: 10px;
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;
`;
const DetailButton = styled(Link)`
	background-color: transparent;
	border: 1px solid #4caf50;
	padding: 4px 8px;
	color: #4caf50;
	cursor: pointer;
	text-decoration: none;
	margin-right: 10px;
`;

const OrderButton = styled(Link)`
	background-color: #4caf50;
	border: 1px solid #4caf50;
	padding: 4px 8px;
	color: #fff;
	cursor: pointer;
	text-decoration: none;
`;

const SoldOutBadge = styled.p`
	margin: 0;
	background-color: #f35050;
	color: #fff;
	font-size: 10px;
	padding: 4px 24px;
	font-weight: bold;
	position: absolute;
	top: 14px;
	right: -27px;
	transform: rotate(45deg);
	overflow: hidden;
`;

export default FoodCard;