import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Meals from './pages/Meals';
import Order from './pages/Order';
import ConfirmationOrder from './pages/ConfirmationOrder';
import LandingPage from './pages/LandingPage/LandingPage';
import NavBar from './components/NavBar';
import SignInForm from './pages/SignInForm';
import MealsDetails from './pages/MealsDetails';
import Drinks from './pages/Drinks';
import DrinksDetails from './pages/DrinksDetails';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/meals' element={<Meals />} />
				<Route path='/meal/:mealDetails' element={<MealsDetails />} />
				<Route path='/Drinks' element={<Drinks />} />
				<Route path='/Drinks/DrinksDetails' element={<DrinksDetails />} />
				<Route path='/signin' element={<SignInForm />} />
				<Route path='/order' element={<Order />} />
				<Route
					path='/confirmationOrder/:orderId'
					element={<ConfirmationOrder />}
				/>
				<Route path='' element={<h1>404: Oops!</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
