import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meals from "./Meals";
import Order from './Order';
import ConfirmationOrder from './ConfirmationOrder';
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import SignInForm from "./SignInForm";
import MealsDetails from "./MealsDetails";
import Drinks from "./Drinks";
import DrinksDetails from "./DrinksDetails";

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/meal/:mealDetails" element={<MealsDetails />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Drinks/DrinksDetails" element={<DrinksDetails />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/order" element={<Order />} />
        <Route path="/confirmationOrder/:orderId" element={<ConfirmationOrder />} /> 
        <Route path="" element={<h1>404: Oops!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

