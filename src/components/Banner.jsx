import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/african-outback.webp";
/* import { BsSearch } from "react-icons/bs"; */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Container>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.7, delay: 0.3, bounce: 0.3, type: "spring" }}
        className="leftSide"
      >
        <h1>
          African Outback <br />safaris
        </h1>
        <p>Travel far, travel wide, and let your soul dance with giraffes. <br />No apologies just wild fun ahead</p>
        <Link
            to={"/create-booking"}
            className="book-now"
            
            >
            <button>Plan your own trip!</button>
        </Link> 
        {/* <div>
          <input type="text" placeholder="Choose Your Destination..." />
          <button>
            <BsSearch className="icon" />
          </button>
        </div> */}
      </motion.div>
      <motion.img
        animate={{ x: 0 }}
        initial={{ x: 500 }}
        transition={{ duration: 0.7, delay: 0.3, bounce: 0.3, type: "spring" }}
        className="bannerImg"
        src={bannerImg}
        alt=""
      />
    </Container>
  );
};
const Container = styled.div`
  padding: 0 4%;
  margin-top: 8.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  .leftSide {
    h1 {
      font-size: 3em;
      font-weight: 600;
      background: var(--gradientBackground2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      color: gray;
      margin-top: 10px;
      font-weight: 500;
      font-size: 18px;
    }
    div {
      display: flex;
      margin-top: 1.3em;
      input {
        width: 20em;
        font-size: 17px;
        padding: 15px 20px;
        box-shadow: 10px 10px 34px -20px #388E3C, -10px -10px 34px -20px #388E3C;
        border: none;
        border-radius: 20px 0 0 20px;
        outline: none;
      }
      button {
        padding: 0 14px;
        border: none;
        background-color: var(--primaryColor);
        border-radius: 0 20px 20px 0;
        .icon {
          font-size: 1.7em;
          color: white;
        }
      }
    }
  }
  .bannerImg {
    width: 500px;
    height: 500px;
    max-width: 720px;
    border-radius: 40px;
  }
  button {
          padding: 15px 18px;
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          border: none;
          background: var(--primaryColorDark);
          color: white;
          border-radius: 7px;
          margin-top: 10px;
          transition: all 0.3s ease-in;
          :hover {
            background: #FFEB3B;
            color: black;
            transition: 0.3s;
            cursor: pointer;
            :nth-child(2) {
              background-color: var(--secondaryBackgroundColor);
            }
          }
        }
  @media (min-width: 1440px) {
    margin-top: 10em;
    .leftSide {
      h1 {
        font-size: 4em;
      }
    }
  }
  @media (max-width: 1048px) {
    margin-top: 7em;
    gap: 1em;
  }
  @media (max-width: 980px) {
    .leftSide {
      h1 {
        font-size: 2.7em;
      }
    }
  }
  @media (max-width: 880px) {
    .leftSide {
      h1 {
        font-size: 2.4em;
      }
    }
  }
  @media (max-width: 788px) {
    .leftSide {
      h1 {
        font-size: 2.4em;
      }
    }
  }
  @media (max-width: 740px) {
    .leftSide {
      h1 {
        font-size: 2.2em;
      }
    }
  }
  @media (max-width: 710px) {
    flex-direction: column;
    padding: 4em 2%;
    margin-top: 3em;
    gap: 3em;
    .leftSide {
      width: 100%;
      text-align: center;
      h1 {
        font-size: 2.2em;
      }
      div {
        margin-left: 20%;
      }
    }
    .bannerImg {
      width: 70%;
    }
  }
  @media (max-width: 655px) {
    .leftSide {
      h1 {
        font-size: 1.8em;
      }
      div {
        margin-left: 14%;
      }
    }
  }
  @media (max-width: 555px) {
    .leftSide {
      div {
        input {
          width: 100%;
        }
        margin-left: 0;
      }
    }
  }
`;

export default Banner;
