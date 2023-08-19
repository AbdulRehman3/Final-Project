
import './LandingPage.css'; 
import styled from "styled-components";


const LandingPage =() => {

    return (
        <Wrapper>
  
        <div className="landing-container">
        <h1 className="title">Welcome to Food Eats</h1>
        <p className="subtitle">Discover our Fresh meals Today</p>
        <a href="/FoodList" className="get-started-button">Get Started</a>
      </div>
      </Wrapper>
    )
}



const Wrapper = styled.div``;



export default LandingPage;