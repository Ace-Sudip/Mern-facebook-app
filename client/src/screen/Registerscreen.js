import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Center, Heading } from "@chakra-ui/react";
import swal from "sweetalert";

function Registerscreen() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [efirstname, setefirstname] = useState("");
  const [elastname, setelastname] = useState("");
  const [eemail, seteemail] = useState("");
  const [epassword, setepassword] = useState("");
  const [ecpassword, setecpassword] = useState("");

  const [fcolor, setfcolor] = useState("");
  const [lcolor, setlcolor] = useState("");
  const [ecolor, setecolor] = useState("");
  const [pcolor, setpcolor] = useState("");
  const [cpcolor, setcpcolor] = useState("");

  function handleChange(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function register() {
    if (user.firstname.length > 2) {
      setefirstname("");
      setfcolor("rgb(24,119,242)");
    } else {
      setefirstname("Name must be 3 letter long");
      setfcolor("red");
    }
    if (user.lastname.length > 2) {
      setelastname("");
      setlcolor("rgb(24,119,242)");
    } else {
      setelastname("Letter must be 5 letter long");
      setlcolor("red");
    }

    if (user.email.includes(".com")) {
      seteemail("");
      setecolor("rgb(24,119,242)");
    } else {
      seteemail("Enter correct Email");
      setecolor("red");
    }
    if (user.password.length > 8) {
      setepassword("");
      setpcolor("rgb(24,119,242)");
    } else {
      setepassword("Password must be 8 letters long");
      setpcolor("red");
    }
    if (user.cpassword !== "" && user.cpassword === user.password) {
      setecpassword("");
      setcpcolor("rgb(24,119,242)");
    } else {
      setecpassword("Enter Correct password");
      setcpcolor("red");
    }

    if (
      user.firstname.length > 2 &&
      user.lastname.length > 2 &&
      user.email.includes(".com") &&
      user.password.length > 7 &&
      user.cpassword !== "" &&
      user.cpassword === user.password
    ) {
      let newuser = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
      };
      try {
        await axios.post("/api/users/register", newuser).data;
        swal("Account created Successfully", "","success");
      } catch (error) {
        console.log(error);
      }
    } else {
      swal("invalid detail","","error");
    }
  }

  useEffect(() => {
    function checkUser() {
      if (localStorage.getItem("currentUser")) {
        navigate("/dashboard");
      }
    }
    checkUser();
  }, [navigate]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row  mt-5 justify-content-center">
          <div className="col-md-8 align-items-center border border-dark rounded">
            <Heading align="center">Create Account</Heading>
            <input
              type="text"
              name="firstname"
              style={{ borderColor: fcolor }}
              placeholder="Firstname"
              className="form-control finp"
              value={user.firstname}
              onChange={handleChange}
            ></input>
            <p className="text-center font-italic">{efirstname}</p>
            <input
              type="text"
              name="lastname"
              style={{ borderColor: lcolor }}
              placeholder="Lastname"
              className="form-control finp"
              value={user.lastname}
              onChange={handleChange}
            ></input>
            <p className="text-center font-italic">{elastname}</p>
            <input
              type="email"
              name="email"
              style={{ borderColor: ecolor }}
              placeholder="Email"
              className="form-control finp"
              value={user.email}
              onChange={handleChange}
            ></input>
            <p className="text-center font-italic">{eemail}</p>
            <input
              type="password"
              name="password"
              style={{ borderColor: pcolor }}
              placeholder="Password"
              className="form-control finp"
              value={user.password}
              onChange={handleChange}
            ></input>
            <p className="text-center font-italic">{epassword}</p>
            <input
              type="password"
              name="cpassword"
              style={{ borderColor: cpcolor }}
              placeholder="Confirm Password"
              className="form-control finp"
              value={user.cpassword}
              onChange={handleChange}
            ></input>
            <p className="text-center font-italic">{ecpassword}</p>
            <br />
            <Center>
              <button  className="btn btn-xl btn-success bsbtn" onClick={register}>
                Sign Up
              </button>
              </Center>
              
              <Center>
            <span >Already created account. <Link style={{textDecoration: "none"}} to="/"><span style={{fontSize: "20px",fontWeight:"bold" }}>Sign in</span></Link> now.</span>
            </Center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
