import React from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { motion } from "framer-motion";
import {useRef} from 'react'
import { useState } from "react";
import emailjs from 'emailjs-com'

const ContactUs = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vg9iva2', 'template_zua21zm', form.current, 'WKQI1AZALcoUj2hiX')

    form.current.reset();
    setIsFormSubmitted(true);

    // Reset success message after a delay (you can adjust the delay as needed)
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 6000);
  };
  return (
    <Container>
      <div className="items">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -500 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            bounce: 0.3,
            type: "spring",
          }}
          className="item"
        >
          <HiLocationMarker className="icon" />
          <h3>OUR MAIN OFFICE</h3>
          <p>
            Univeristy Way, CBD <br />
            Nairobi
          </p>
        </motion.div>
        
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -500 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            bounce: 0.3,
            type: "spring",
          }}
          className="item"
        >
          <BsFillTelephoneFill className="icon" />
          <h3>PHONE NUMBER</h3>
          <p>+254722636346</p>
        </motion.div>

        <a href="https:////wa.me/254722636346" target="_blank" rel="noreferrer">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -500 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              bounce: 0.3,
              type: "spring",
            }}
            className="item"
          >
            <BsWhatsapp className="icon" />
            <h3>WhatsApp</h3>
            <p>+254722636346</p>
          </motion.div>
        </a>

        <a href="mailto:info@africanoutbacksafaris.com" target='_blank' rel="noreferrer">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -500 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              bounce: 0.3,
              type: "spring",
            }}
            className="item"
          >
            <AiFillPrinter className="icon" />
            <h3>EMAIL</h3>
            <p>info@african <br/>outbacksafaris.com</p>
          </motion.div>
        </a>
        
        
      </div>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 500 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          bounce: 0.3,
          type: "spring",
        }}
      >
        <h2>CONTACT US</h2>
        <input type="text" name="name" placeholder="Enter Your Full Name..." />
        <input type="email" name="email" placeholder="Ener Your Email..." />
        <textarea
          cols="30"
          rows="10"
          name="message"
          placeholder="Enter Your Message or concern..."
        ></textarea>
        <button type="submit">SUBMIT</button>
      </motion.form>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--backgroundGradient3);
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    max-width: 440px;
    .item {
      width: 200px;
      height: 170px;
      background: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border: none;
      box-shadow: 7px 7px 12px -8px #388E3C, -7px -7px 12px -10px #388E3C;
      gap: 7px;
      border-radius: 20px;
      .icon {
        font-size: 3em;
        color: var(--primaryColor);
      }
      h3 {
        color: #5c5c5c;
      }
      p {
        color: gray;
      }
    }
  }
  form {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 480px;
    padding: 30px;
    h2 {
      font-size: 2em;
      font-weight: 400;
      margin-top: 1em;
      color: #575757;
    }
    input {
      margin-top: 12px;
      border-radius: 20px;
      border: 2px solid transparent;
      padding: 14px 20px;
      font-family: "Poppins", sans-serif;
      outline: none;
      font-size: 16px;
      width: 100%;
      box-shadow: 7px 7px 12px -8px #388E3C, -7px -7px 12px -10px #388E3C;
    }
    textarea {
      margin-top: 12px;
      border-radius: 20px;
      border: 2px solid transparent;
      box-shadow: 7px 7px 12px -8px #388E3C, -7px -7px 12px -10px #388E3C;
      padding: 14px 20px;
      font-family: "Poppins", sans-serif;
      outline: none;
      font-size: 16px;
      width: 100%;
    }
    button {
      margin-top: 20px;
      padding: 10px 14px;
      font-family: "Poppins", sans-serif;
      font-size: 17px;
      border: none;
      background: #FFEB3B;
      color: black;
      border-radius: 7px;
      :hover {
        background: var(--primaryColorDark);
        transition: 0.3s;
        cursor: pointer;
        :nth-child(2) {
          background-color: var(--secondaryBackgroundColor);
        }
      }
    }
  }
  @media (max-width: 870px) {
    padding: 7em 3%;
    .items {
      max-width: 400px;
      .item {
        width: 180px;
        height: 140px;
        .icon {
          font-size: 2em;
        }
        h3 {
          font-size: 17px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    form {
      padding: 10px;
    }
  }
  @media (max-width: 740px) {
    flex-direction: column;
  }
  @media (max-width: 530px) {
    padding: 7em 1%;
    form {
      width: 100%;
    }
    .items {
      max-width: 3870px;
      gap: 7px;
      .item {
        width: 170px;
        height: 140px;
        .icon {
          font-size: 2em;
        }
        h3 {
          font-size: 17px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
`;

export default ContactUs;
