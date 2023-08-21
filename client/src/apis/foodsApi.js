import { API_URL } from '../utils/constants';

export const listedMealsService = (foodType, authToken) => {
	const headers = {
		'Content-Type': 'application/json',
	};
	if (authToken) {
		headers['Authorization'] = `Bearer ${authToken}`;
	}
	return fetch(`${API_URL}/foods/others-listing/${foodType}`, {
		method: 'GET',
		headers: headers,
	});
};

export const myPostedFoodsService = (foodType, authToken) => {
	const headers = {
		'Content-Type': 'application/json',
	};
	if (authToken) {
		headers['Authorization'] = `Bearer ${authToken}`;
	}
	return fetch(`${API_URL}/foods/my-listings/${foodType}`, {
		method: 'GET',
		headers: headers,
	});
};
