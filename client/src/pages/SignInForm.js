import React from "react";
import { useState } from "react";
import styled from "styled-components";

const SignInForm  = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <FormContainer>
      <FormTitle>{isSignUp ? "Sign Up" : "Log In"}</FormTitle>
      <FormGroup>
    
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" placeholder="Enter your username" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </FormGroup>
      <SubmitButton type="submit">
        {isSignUp ? "Sign Up" : "Log In"}
      </SubmitButton>
      <ModeToggle onClick={toggleMode}>
        {isSignUp ? "Already have an account? " : "New user? "}
        <LoginText>Log In</LoginText>
      </ModeToggle>
      ;
    </FormContainer>
  );
};

const FormContainer = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh; 
`;
const FormTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 50px;
`;

const FormGroup = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const ModeToggle = styled.p`
  font-size: 14px;
  color: #888;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
`;
const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
  opacity: 0.7;
`;
const LoginText = styled.span`
  position: relative;
  display: inline-block;
  color: black;
  &:hover {
    color: #ffb700;
  }

  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ffb700;
    bottom: -5px;
    left: 0;
    transform-origin: center;
    transform: scaleX(1);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
    transform: perspective(500px) rotateX(30deg);
    transform-origin: top;
    opacity: 0.5;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  &:hover::after,
  &:hover::before {
    transform: scaleX(1);
  }
`;

const Input = styled.input`
  width: 140%;
  padding: 10px;
  margin-left: -40px;
  font-size: 15px;
  border: 3px solid #ccc;
  border-radius: 5px;
  &:hover {
    background-color: #d3d3d3;
    opacity: 0.7;
    color: white;
  }
`;

const SubmitButton = styled.button`
  background-color: #5cb85c;
  opacity: 0.8;
  color: black;
  border: none;
  padding: 10px 30px;
  font-size: 17px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4cae4c;
    color: white;
  }
`;

export default SignInForm ;
