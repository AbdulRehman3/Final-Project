import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
	const { user } = useAuth();

	return (
		<NavbarWrapper>
			<Link to='/'>
				<LogoImage src='/assets/images/applogo.png' alt='Logo' />
			</Link>
			<NavigationLeft>
				<NavItem to='/meals'>MEALS</NavItem>
				<NavItem to='/Drinks'>DRINKS</NavItem>
			</NavigationLeft>

			<NavigationRight>
				{user ? (
					<>
						<p>Hi, {user.fullname}</p>
						<NavItem to='/signin'>LOGOUT</NavItem>
					</>
				) : (
					<NavItem to='/signin'>SIGN IN</NavItem>
				)}
				<NavItem to='/contactus'>CONTACT US</NavItem>
			</NavigationRight>
		</NavbarWrapper>
	);
};

const NavbarWrapper = styled.div`
	opacity: 0.8;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 0px; /* Adjusted padding */
`;

const NavigationBar = styled.div`
	display: flex;
	align-items: center;
`;

const NavigationLeft = styled(NavigationBar)`
	margin-right: auto;
	margin-left: 20px;
`;
const LogoImage = styled.img`
	width: 170px;
	height: 60px;
	object-fit: cover;
`;

const NavigationRight = styled(NavigationBar)`
	margin-left: auto;
	margin-right: 20px;
`;

const NavItem = styled(Link)`
	font-size: 14px; /* Slightly smaller font size */
	color: black;
	text-decoration: none;
	margin-left: 30px; /* Reduced margin */
	transition: color 0.3s, transform 0.3s;

	&:hover {
		color: Black;
		text-decoration: underline;
		transform: translateY(-2px) scale(1.1);
	}
`;

export default NavBar;
