import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/traveloLogo.png";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/subscribe", {
        email_address: email,
      });
      console.log(response.data);
      setSuccessMessage("Subscription successful");

      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    } catch (error) {
      console.error(error);

      // Check if the error is due to the member already existing
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.title === "Member Exists"
      ) {
        setErrorMessage(
          "Member already exists, please try another email"
        );
      } else {
        setErrorMessage("Subscription failed");
      }

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };



  return (
    <Container>
      <footer className="bg-[#388E3C]">
        <div className="container page-padding pb-[5rem] pt-[2rem]">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/3 gap-8 ml-8">
              <img src={logo} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[18px] font-medium text-[#FFFFFF]">
                Empowering Journeys, Enchanting Memories <br />Discover the Heartbeat of East Africa with Us!
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#FFFFFF] min540:justify-center">
                <a href="https://www.instagram.com/">
                  <AiFillInstagram className="text-[35px] hover:text-[#FFEB3B]"/>
                </a>

                <a href="https://www.instagram.com/">
                  <AiFillTwitterCircle className="text-[35px] hover:text-[#FFEB3B]" />
                </a>
                
                <a href="https://www.instagram.com/">
                  <BsFacebook className="text-[35px] hover:text-[#FFEB3B]" />
                </a>
                
                <a href="https://www.instagram.com/">
                  <SiGmail className="text-[35px] hover:text-[#FFEB3B]" />
                </a>
                
              </div>
              <p className="text-[16px] font-medium text-[#FFFFFF]">
                Privacy Policy | © {new Date().getFullYear()} African Outback Safaris <br />{" "}
                Designed by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://estetica-agency.vercel.app/"
                  class="text-[#FFEB3B] font-bold"
                >
                  ESTETICA AGENCY
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] text-[#FFFFFF] font-bold footer-main">African Outback Safaris</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#FFEB3B]"></span>
              
              <Link to={"/"}>
                <p className="text-[16px] hover:text-[#FFEB3B] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  Home
                </p>
              </Link>
              
              <Link to={"/destinations"}>
                <p className="text-[16px] hover:text-[#FFEB3B] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  Destinations
                </p>
              </Link>
              
              <Link to={"/holiday-types"}>
                <p className="text-[16px] hover:text-[#FFEB3B] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  Holiday Types
                </p>
              </Link>
              
              <Link to={"/about-us"}>
                <p className="text-[16px] hover:text-[#FFEB3B] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  About Us
                </p>
              </Link>
              
              <Link to={"/blog"}>
                <p className="text-[16px] hover:text-[#FFEB3B] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  Blog
                </p>
              </Link>
              
              <Link to={"/contact-us"}>
                <p className="text-[16px] hover:text-[#FFEB3B] cursor-pointer text-[#FFFFFF] font-medium hover:font-bold">
                  Contact Us
                </p>
              </Link>
            </div>

            {/* Subscription Div */}
            <div className="flex flex-col gap-8 relative">
      <p className="text-[22px] text-[#FFFFFF] font-bold footer-main">
        Subscribe to our Newsletter
      </p>

      <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#FFEB3B]"></span>

      <div className="flex flex-col gap-4">

  <label htmlFor="email" className="text-[16px] text-[#FFFFFF] font-medium">
    Email:
  </label>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email"
    className="border border-[#FFEB3B] rounded p-2 text-[16px] text-black" 
    onChange={handleEmailChange}
  />
</div>

      <button
        className="bg-[#FFEB3B] text-[16px] text-[#33333] py-2 px-4 rounded hover:bg-opacity-80"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Subscribe'}
      </button>

      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
      
  

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold text-[#FFFFFF] footer-main">Contacts</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#FFEB3B]"></span>

              <p className="text-[16px]  text-[#FFFFFF] font-bold">
                +254 722 636 346
              </p>
              <p className="text-[16px] text-[#FFFFFF] font-medium">
                info@africanoutbacksafaris.com
              </p>
              
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </Container>
  );
};
const Container = styled.div`

  .container {
    max-width: 124rem;
    margin: 0 auto;
  }
  &.email-text::placeholder {
    color: black;
  }

  &.email-text {
    color: black;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    gap: 4em;
  }
  @media (max-width: 597px) {
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .columns {
      flex-direction: column;
      text-align: center;
      .iconColumn {
        flex-direction: row;
      }
    }
  }
`;






export default Footer;
