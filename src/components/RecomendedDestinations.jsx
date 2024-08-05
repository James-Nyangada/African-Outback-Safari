import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import santorini from "../assets/homePageImages/santoriniImg.jpg";
import dubai from "../assets/homePageImages/dubaiImg.jpg";
import maldives from "../assets/homePageImages/maldives.jpg";
import hawaii from "../assets/homePageImages/hawaii.jpg";
import miami from "../assets/homePageImages/miamiImg.jpg";
import ksamil from "../assets/homePageImages/ksamil.png";
import mykonos from "../assets/homePageImages/mykonosImg.webp";
import bali from "../assets/homePageImages/bali.jpg";
import fiveStarIcon from "../assets/homePageImages/5starsIcon.png";
import { Link } from "react-router-dom";

const RecomendedDestinations = () => {

  const [activeTab,  setActiveTab]= useState("book-now")

  useEffect(() => {
    // Scroll to the top when the BookNow component mounts
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <Container>
      <h2 className="title">Recommended Destinations</h2>
      <div className="cards">
        <div className="card">
          <img src={santorini} alt="" />
          <div>
            <h2>Mombasa</h2>
            <h3>South coast</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
              The rare natural beauty of South Coat in Mombasa, the breathtaking caldera,
              the views, the extraordinary volcanic beaches and the lunar
              landscapes are the wondrous results of this eruption that can only
              be admired in Santorini.
            </p>
            <Link
            to={"/book-now"}
            className={activeTab === "book-now" ? "activeTab" : "nonActive" }
            onClick={() => setActiveTab("book-now")}
            >
            <button>Book Now!</button>
            </Link>   
          </div>
        </div>
        <div className="card">
          <img src={dubai} alt="" />
          <div>
            <h2>MassaiMara</h2>
            <h3>South Kenya</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
            Discover the iconic Masai Mara Situated in the southwest of Kenya, covering an area of 1,510 square km.
            The Masai Mara National Reserve is a land of breathtaking vistas, abundant wildlife and endless plains.
            The quintessential Masai Mara safari delivers many attractions, as the reserve is home to an excellent year-round concentration of game,
             including the more than two million wildebeest, zebras and other antelopes that make up the famous Great Migration. 
            </p>
            <Link
            to={"/book-now"}
            className={activeTab === "book-now" ? "activeTab" : "nonActive" }
            onClick={() => setActiveTab("book-now")}
            >
            <button>Book Now!</button>
            </Link>  
          </div>
        </div>
        <div className="card">
          <img src={maldives} alt="" />
          <div>
            <h2>Mt Kilimanjaro</h2>
            <h3>Tanzania</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
            Conquer Africa's rooftop, Mount Kilimanjaro, a legendary peak beckoning adventurers from around the globe. 
            Traverse diverse landscapes, from lush rainforests to alpine deserts, on your journey to the summit. 
            Witness breathtaking sunrises that paint the glaciers in hues of gold and pink.
            Stand in awe atop Uhuru Peak, the highest point in Africa, and savor the triumph of conquering this majestic mountain.           
             </p>
            <Link
            to={"/book-now"}
            className={activeTab === "book-now" ? "activeTab" : "nonActive" }
            onClick={() => setActiveTab("book-now")}
            >
            <button>Book Now!</button>
            </Link>  
          </div>
        </div>
        <div className="card">
          <img src={hawaii} alt="" />
          <div>
            <h2>Samburu</h2>
            <img src={fiveStarIcon} alt="" />
            <p>
            Experience the untamed beauty of Samburu on our packaged safaris. 
            Explore the rugged landscapes in search of the Samburu Special Five and other iconic wildlife.
            Immerse yourself in the vibrant culture of the Samburu people through village visits. 
            Relax in comfortable lodges and enjoy additional activities like bush walks and camel rides.
            </p>
            <Link
            to={"/book-now"}
            className={activeTab === "book-now" ? "activeTab" : "nonActive" }
            onClick={() => setActiveTab("book-now")}
            >
            <button>Book Now!</button>
            </Link>  
          </div>
        </div>
        <div className="card">
          <img src={mykonos} alt="" />
          <div>
            <h2>Lake Nakuru</h2>
            <h3>Rift Valley</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
             Journey through the heart of Africa's Great Rift Valley, a breathtaking natural wonder teeming with life.
             Witness a sea of pink at Lake Nakuru, where thousands of flamingos gather.
             Embark on thrilling game drives, encountering lions, leopards, and giraffes.
             Marvel at the dramatic landscapes of towering escarpments and dormant volcanoes, a testament to nature's raw power.            
             </p>
            <Link
            to={"/book-now"}
            className={activeTab === "book-now" ? "activeTab" : "nonActive" }
            onClick={() => setActiveTab("book-now")}
            >
            <button>Book Now!</button>
            </Link>  
          </div>
        </div>
        <div className="card">
          <img src={miami} alt="" />
          <div>
            <h2>Serengeti</h2>
            {/* <h3>Florida, USA</h3> */}
            <img src={fiveStarIcon} alt="" />
            <p>
            Venture into the vast plains of the Serengeti, a wildlife paradise where nature's drama unfolds. 
            Witness the epic spectacle of the Great Migration, millions of wildebeest and zebras traversing the grasslands. 
            Encounter prides of lions, herds of elephants, and elusive leopards amidst the acacia trees. 
            Capture breathtaking sunsets over the endless savannah, where every moment is a masterpiece.           
            </p>
            <Link
            to={"/book-now"}
            className={activeTab === "book-now" ? "activeTab" : "nonActive" }
            onClick={() => setActiveTab("book-now")}
            >
            <button>Book Now!</button>
            </Link>  
          </div>
        </div>
        <div className="card">
          <img src={ksamil} alt="" />
          <div>
            <h2>Tanzania</h2>
            <h3>Lake Manyara</h3>
            <img src={fiveStarIcon} alt="" />
            <p>
            Discover Lake Manyara, a scenic gem nestled in the Great Rift Valley. 
            Witness tree-climbing lions lounging in acacia branches, a sight unique to this park. 
            Marvel at the vast flocks of flamingos that grace the lake's shores, creating a breathtaking pink spectacle. 
            Explore the diverse habitats, from lush forests to open grasslands, teeming with elephants, giraffes, and zebras.            
            </p>
            <Link
            to={"/book-now"}
            className={activeTab === "book-now" ? "activeTab" : "nonActive" }
            onClick={() => setActiveTab("book-now")}
            >
            <button>Book Now!</button>
            </Link>  
          </div>
        </div>
        <div className="card">
          <img src={bali} alt="" />
          <div>
            <h2>Amboseli</h2>
            {/* <h3>Indonesia</h3> */}
            <img src={fiveStarIcon} alt="" />
            <p>
            Discover Amboseli, where majestic elephants roam freely against the backdrop of snow-capped Kilimanjaro. 
            Witness playful elephant families splashing in watering holes, their calves frolicking in the mud. 
            Capture stunning photographs of these gentle giants as they graze beneath the vast African sky. 
            Explore the diverse habitats, from swamps to acacia woodlands, teeming with zebras, giraffes, and predators like lions and cheetahs.            
            </p>
            <Link
            to={"/book-now"}
            className={activeTab === "book-now" ? "activeTab" : "nonActive" }
            onClick={() => setActiveTab("book-now")}
            >
            <button>Book Now!</button>
            </Link>  
          </div>
        </div>
        <div className="card">
          <Link to={"/destinations"} className={activeTab ==="book-now"} onClick={() => setActiveTab("book-now")} >
            <div>
              <button>SEE ALL</button>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  .title {
    text-align: center;
    font-size: 2.7em;
    font-weight: 500;
    background: var(--gradientBackground);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
    margin-top: 3em;
    .card {
      width: 80vw;
      height: auto;
      max-width: 1200px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow: 11px 11px 24px #d1d1d1, -11px -11px 24px #ffffff;
      border-radius: 2em;
      border: 1px solid #e0e0e0;
      position: sticky;
      top: 5em;
      :nth-child(2) {
        top: 7em;
      }
      :nth-child(3) {
        top: 9em;
      }
      :nth-child(4) {
        top: 11em;
      }
      :nth-child(5) {
        top: 13em;
      }
      :nth-child(6) {
        top: 15em;
      }
      :nth-child(7) {
        top: 17em;
      }
      :nth-child(8) {
        top: 19em;
      }
      :nth-child(9) {
        top: 21em;
        background: white;
        height: 400px;
        button {
          font-size: 30px;
          padding: 14px 30px;
        }
      }
      img {
        width: 50%;
        border-radius: 2em 0 0 2em;
      }
      div {
        display: flex;
        flex-direction: column;
        padding-right: 20px;
        align-items: flex-start;
        h2 {
          font-weight: 500;
        }
        h3 {
          font-weight: 400;
          color: gray;
          line-height: 10px;
        }
        img {
          width: 100px;
          margin: 10px 0;
        }
        p {
          color: gray;
        }
        button {
          padding: 10px 14px;
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          border: none;
          background: #333333;
          color: white;
          border-radius: 7px;
          margin-top: 10px;
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
    }
  }
  @media (max-width: 1180px) {
    .cards {
      .card {
        width: 94vw;
      }
    }
  }
  @media (max-width: 1120px) {
    .cards {
      .card {
        p {
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 950px) {
    .cards {
      .card {
        div {
          img {
            width: 70px;
          }
          h2 {
            font-size: 20px;
          }
          h3 {
            font-size: 17px;
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    .cards {
      .card {
        div {
          p {
            height: 40px;
            overflow-y: scroll;
          }
        }
      }
    }
  }
  @media (max-width: 650px) {
    .cards {
      gap: 7em;
      .card {
        flex-direction: column;
        gap: 0px;
        img {
          border-radius: 20px;
          width: 60%;
        }
        div {
          align-items: center;
          padding: 20px;
          p {
            text-align: center;
          }
        }
      }
    }
  }
  @media (max-width: 450px) {
    .cards {
      .card {
        img {
          border-radius: 20px;
          width: 100%;
        }
        div {
          align-items: center;
          padding: 20px;
          p {
            text-align: center;
            height: 40px;
            overflow-y: scroll;
          }
        }
      }
    }
  }
`;

export default RecomendedDestinations;
