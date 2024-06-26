import React, { useState, useEffect, useContext } from "react";

import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

import { keyframes } from "@emotion/react";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const Image = styled("img")({
  width: 300,
  // height: auto,
  display: "block",
  marginInline: 55,
  // perspective: "800px",
  // transition: "transform 1s ease-in-out",
  animation: `${rotateAnimation} 5s ease-in-out`,
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: rgb(11, 37, 101);
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState("");
  const [account, toggleAccount] = useState("login"); // to toggle between login and signup

  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const imageURL = "./blog.png";

  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    // console.log(`name: ${e.target.name} value: ${e.target.value}`);
    // name is either username or password
    setLogin({ ...login, [e.target.name]: e.target.value });
    // ...login creates a shallow copy of the current state, so when we write password after username, username wouldn't went away.
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  // const loginUser = async () => {
  //   try {
  //     let response = await API.userLogin(login);
  //     if (response.isSuccess) {
  //       showError("");

  //       sessionStorage.setItem(
  //         "accessToken",
  //         `Bearer ${response.data.accessToken}`
  //       );
  //       sessionStorage.setItem(
  //         "refreshToken",
  //         `Bearer ${response.data.refreshToken}`
  //       );
  //       setAccount({
  //         name: response.data.name,
  //         username: response.data.username,
  //       });

  //       isUserAuthenticated(true);
  //       setLogin(loginInitialValues);
  //       navigate("/");
  //     } else {
  //       showError("Something went wrong! please try again later");
  //     }
  //   } catch (err) {
  //     console.error("An error occurred during login:", err);
  //     showError("An error occurred during login:", err);
  //   }
  // };

  const loginUser = () => {
    navigate("/");
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      showError("");
      setSignup(signupInitialValues);
      toggleAccount("login");
    } else {
      showError("Something went wrong! please try again later");
    }
  };

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };
  useEffect(() => {
    alert("Backend is not hosted yet, sorry for inconvenience");
    alert("Just click login, you will be logged in");
  }, []);

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              value={login.username}
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              value={login.password}
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
            />
            {error && <Error>{error}</Error>}

            <LoginButton variant="contained" onClick={() => loginUser()}>
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton
              onClick={() => toggleSignup()}
              style={{ marginBottom: 50 }}
            >
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              value={signup.name}
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter Name"
            />
            <TextField
              variant="standard"
              value={signup.username}
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              value={signup.password}
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />

            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
