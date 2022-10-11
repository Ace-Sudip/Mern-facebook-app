import React from "react";
import { Link } from "react-router-dom";
import { Button, Center} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("currentUser"));

  function logout() {
    localStorage.removeItem("currentUser");
    navigate("/");
  }
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <span className="navbar-brand">
            <Link to="/dashboard">Facebook</Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="ml-auto">
              <div className="navbar-nav ">
                <div className="dropdown ">
                  <button
                    className="btn btn-white dropdown-toggle text-white"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style={{ fontSize: "20px" }}>
                      {user.firstname}&nbsp; {user.lastname}
                    </span>
                  </button>
                  <div className="dropdown-menu bg-transparent border-transparent">
                 
                    <span className="dropdown-items">
                      <Center>
                       
                        <Button
                          size="md"
                          colorScheme="facebook"
                          onClick={logout}
                          mt='1'
                        >
                          Logout
                        </Button>
                      </Center>
                    </span>
                    
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
