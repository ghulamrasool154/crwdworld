import React from "react";
import "./Home.css";
import logo from "../../assests/images/logo.png";
const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="logohome">
              <img src={logo} alt="logo" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 worldimg">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
