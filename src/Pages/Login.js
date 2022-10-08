import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import usernameIcon from "../Images/Icons/Vector.png";
import passwordIcon from "../Images/Icons/PasswordIcon.png";
import rectangle from "../Images/Icons/Rectangle269.png";
import rectangle2 from "../Images/Icons/Rectangle 268.png";
import "./Login.css";

const background = {
  background: `url(${rectangle2})`,
  backgroundRepeat: "no-repeat",
};

const Login = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeBlocked);
  const [massage, setMassage] = useState();
  const [error, setError] = useState();

  const handle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeBlocked);
      setType("password");
    }
  };
  const loginUsingApi = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = "https://reqres.in/api/login";
    const data = JSON.stringify({ email, password });
    console.log(data);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setMassage(data.token);
      setError(data.error);
      console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "-16px",
            backgroundColor: "#F5F5F5",
          }}
          style={{ height: "100vh" }}
        >
          <Box sx={{ marginTop: "300px" }}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "4px",
                fontSize: "32px",
                color: "#030037",
                fontWeight: "800",
              }}
              variant="h5"
            >
              Welcome
            </Typography>
            <Typography
              variant="p"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "24px",
                fontSize: "14px",
                color: "#686687",
                fontWeight: "400",
              }}
            >
              Enter your Username and Passoword
            </Typography>
            <form onSubmit={loginUsingApi}>
              <TextField
                sx={{
                  minWidth: { md: "567px", xs: "300px" },
                  marginBottom: "12px",
                  fontSize: "16px",
                  color: "#939596",
                  fontWeight: "400",
                }}
                id="email"
                type="email"
                defaultValue={""}
                placeholder="Username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={usernameIcon} alt="" />
                    </InputAdornment>
                  ),
                }}
              />
              <br />
              <OutlinedInput
                sx={{
                  minWidth: { md: "567px", xs: "300px" },
                  marginBottom: "16px",
                  fontSize: "16px",
                  color: "#939596",
                  fontWeight: "400",
                }}
                id="password"
                type={type}
                defaultValue={""}
                placeholder="Password"
                startAdornment={
                  <InputAdornment position="start">
                    <img src={passwordIcon} alt="" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <span onClick={handle}>
                        <Icon icon={icon}></Icon>
                      </span>
                    </IconButton>
                  </InputAdornment>
                }
              />
              <br />
              {massage ? <Alert severity="info">{massage}</Alert> : <></>}
              {error ? <Alert severity="error">{error}</Alert> : <></>}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#1334b3",
                  textTransform: "none",
                  ":hover": { backgroundColor: "#1334b3" },
                  minWidth: { md: "567px", xs: "300px" },
                  fontSize: "16px",
                  color: "#FFFFFF",
                  fontWeight: "700",
                }}
              >
                Login
              </Button>
            </form>
            <a href="" style={{ textDecoration: "none" }}>
              <Typography
                variant="p"
                sx={{
                  marginBottom: "15px",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "14px",
                  color: "#686687",
                  fontWeight: "700",
                }}
              >
                Forgot Password?
              </Typography>
            </a>
            <Box sx={{ marginTop: "150px" }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "14px",
                    color: "#233244",
                    fontWeight: "400",
                    marginRight: { md: "20px", sm: "10px" },
                  }}
                >
                  Terms of Use
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontSize: "14px", color: "#233244", fontWeight: "400" }}
                >
                  Privacy Policy
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="p"
                  sx={{ fontSize: "12px", color: "#233244", fontWeight: "400" }}
                >
                  © Punctualiti 2022. All rights reserved
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "#1334B3" }}
          style={{ height: "100vh" }}
        >
          <Box
            style={background}
            className="rectangle"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img src={rectangle} alt="" style={{}} />
          </Box>

          <Box sx={{}}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  maxWidth: { md: "656px", xs: "300px" },
                  color: " #FFFFFF",
                  fontWeight: "800",
                  fontSize: "32px",
                  marginTop: "81px",
                }}
              >
                360° Solution for Asset Management
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  maxWidth: { md: "700px", xs: "300px" },
                  color: " #FFFFFF",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
