import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/african-outback.webp";
import { Link, /* useLocation  */} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
/* import useLocalStorage from "use-local-storage"; */

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [activeTab, setActiveTab] = useState("home");
  const [pos, setPos] = useState("top");
 /*  const [ route,  setRoute] = useState("/"); */

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      // Clean up the event listener when the component unmounts
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const handleScroll = () => {
    let scrolled = window.scrollY;
    if (scrolled >= 5) {
      setPos("moved");
    } else {
      setPos("top");
    }
  };

 /*  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname;
    setRoute(pathName);
  }, [location]); */

  useEffect(() => {
    // Scroll to the top when the activeTab changes
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <Container
      style={{
        backgroundColor:
          pos === "top" ? "rgba(0, 0, 0, 0)" : "rgb(250, 239, 224)",
      }}
    >
      <Link to={"/"} className="link-styles">
        <img
          onClick={() => setActiveTab("home")}
          className="logo"
          width={250}
          height={250}
          src={logo}
          alt=""
        />
      </Link>

      <div className={toggle ? "blur active" : "blur"}></div>

      <ul
        onClick={handleToggle}
        className={toggle ? "nav-menu active" : "nav-menu"}
      >
        <Link to={"/"} className="link-styles">
          <li
            className={activeTab === "home" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("home")}
          >
            Home
          </li>
        </Link>
        <Link to={"/destinations"} className="link-styles">
          <li
            className={activeTab === "destinations" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("destinations")}
          >
            Destinations
          </li>
        </Link>
        <Link to={"/holiday-types"} className="link-styles">
          <li
            className={
              activeTab === "holiday-types" ? "activeTab" : "nonActive"
            }
            onClick={() => setActiveTab("holiday-types")}
          >
            Tour Category
          </li>
        </Link>
        <Link to={"/about-us"} className="link-styles">
          <li
            className={activeTab === "about-us" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("about-us")}
          >
            About Us
          </li>
        </Link>
        <Link to={"/blog"} className="link-styles">
          <li
            className={activeTab === "blog" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("blog")}
          >
            Blog
          </li>
        </Link>

        <Link to={"/contact-us"} className="link-styles">
          <li
            className={activeTab === "contact-us" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("contact-us")}
          >
            Contact Us
          </li>
        </Link>
        <div className="buttons">
           <Link
            to={"/create-booking"}
            className={activeTab === "book-now" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("book-now")}
          >
            <button>Book Now!</button>
          </Link>
          {/* <Link to={"/log-in"}>
            <button>Log In</button>
          </Link> */}
        </div>
      </ul>
      <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 4%;
  position: fixed;
  top: 0;
  height: 95px;
  width: 100%;
  z-index: 100;
  overflow-x: visible;
  transition: 0.2s;
  box-shadow: 0 2px 70px -20px rgb(56, 142, 60); /* Add this line for border bottom shadow */
  .logo {
    width: 200px;
    height: 200px;
    margin-bottom: -35px;
  }
  .nav-menu {
    display: flex;
    gap: 37px;
    list-style: none;
    align-items: center;
    li {
      transition: 0.3s;
      cursor: pointer;
    }
    .activeTab {
      color: var(--primaryColor);
      font-weight: 700;
    }
    .buttons {
      display: flex;
      gap: 7px;
      button {
        padding: 10px 14px;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        border: none;
        background: var(--primaryColorDark);
        color: white;
        border-radius: 7px;
        transition: all 0.3s ease-in;
        :hover {
          background: #FFEB3B;
          transition: 0.3s;
          color: black;
          cursor: pointer;
          :nth-child(2) {
            background-color: var(--secondaryBackgroundColor);
          }
        }
      }
    }
  }
  .mobile-menu {
    position: absolute;
    right: 5%;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    display: none;
    margin-top: 7px;
    color: var(--primaryColorDark);
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1004px) {
    .blur {
      width: 100%;
      height: 230vh;
      backdrop-filter: blur(10px);
      position: absolute;
      left: -100%;
      z-index: 9;
    }
    .blur.active {
      left: -1em;
      width: 70%;
    }
    .nav-menu {
      background-color: white;
      width: 70%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 10%;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 1%;
      right: -100%;
      transition: 0.3s;
      z-index: 99;
      box-shadow: -10px 10px 18px #bfbfbf, 10px -10px 18px #ffffff;
    }
    .mobile-menu {
      display: block;
      z-index: 99;
    }
    .nav-menu.active {
      right: 1%;
    }
  }

  @media (max-width: 500px) {
    .logo {
      width: 200px;
    }
  }
  @media (max-width: 370px) {
    .nav-menu {
      width: 98%;
    }
  }
`;

export default Navbar;
