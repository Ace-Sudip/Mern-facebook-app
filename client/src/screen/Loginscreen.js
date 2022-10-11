import {
  Box,
  Center,
  Divider,  
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Loginscreen() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function login() {
    if (email.includes(".com") && password.length > 7) {
      const newuser = {
        email,
        password,
      };
      const temp = (await axios.post("/api/users/login", newuser)).data;
      localStorage.setItem("currentUser", JSON.stringify(temp));
      navigate("/dashboard");
    } else {
      swal("Invalid Details","","error")
    }
  }

  useEffect(() => {
    function checkUser() {
      if (localStorage.getItem("currentUser")) navigate("/dashboard");
    }
    checkUser();
  }, [navigate]);

  return (
    <div className="container-fluid">
      <div className="mt-5"></div>
      <div className="row justify-content-center  paddimp ">
        <div className=" col-lg-4 col-sm-4 col-md-4 col-8 mt-4">
          <Box boxSize="110%" mt="1" fontWeight="semibold">
            <Image
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="facebook logo"
            />
            <Text
              visibility={{
                base: "hidden",
                sm: "visible",
                md: "visible",
                lg: "visible",
                xl: "visible",
              }}
              margin="auto"
              fontSize={["24px", "26px", "28px", "28px"]}
              width="290px"
            >
              Facebook helps you connect and share with the people in your life.
            </Text>
          </Box>
        </div>

        <div className="col-lg-2 col-sm-2 col-md-2 "></div>

        <div className=" col-sm-7 col-md-5 col-lg-5  mt-5  justify-content-center bxshadow1 rounded">
          <input
            type="email"
            placeholder="Email"
            className="form-control finp "
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="form-control finp"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          ></input>

          <br />
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block bsbtn"
            onClick={login}
          >
            Login
          </button>
          <Divider orientation="horizontal" />
          <br />
          <Center>
            <Link to="/register">
              <button className="btn btn-success p-2 mb-2 finp2 ">
                Create new Account{" "}
              </button>
            </Link>
          </Center>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
