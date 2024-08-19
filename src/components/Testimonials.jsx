import React, { useEffect, useState } from "react";
import styled from "styled-components";
import personPic1 from "../assets/homePageImages/person.png";
import personPic2 from "../assets/homePageImages/person.png";
import personPic3 from "../assets/homePageImages/person.png";
import { RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import axios from "axios"; // For making HTTP requests

const Testimonials = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [reviews, setReviews] = useState([]); // State to store the reviews

  useEffect(() => {
    // Fetch the latest three reviews when the component mounts
    const fetchReviews = async () => {
      try {
        const response = await axios.get("https://african-outback-server.vercel.app/api/getreviews");
        const allReviews = response.data.reviews;
        const latestReviews = allReviews.slice(-3).reverse(); // Get the last 3 reviews
        setReviews(latestReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated) {
      animation.start({
        opacity: 1,
        transition: { duration: 0.7, delay: 0.2 },
        y: 0,
      });
      setHasAnimated(true);
    }
    if (!inView && !hasAnimated) {
      animation.start({ opacity: 0, y: 100 });
    }
  }, [inView, hasAnimated, animation]);

  return (
    <Container>
      <div className="topSection">
        <h1>What people are saying about us</h1>
        <p>
          At African Outback Safari, client satisfaction is at the heart of everything we do.
          Your happiness and contentment are our top priorities, and we go above
          and beyond to ensure that every aspect of your travel experience is
          exceptional.
        </p>
      </div>
      <div className="bottomSection" ref={ref}>
        {reviews.map((review, index) => (
          <motion.div key={index} animate={animation} className="item">
            <RiDoubleQuotesR className="icon" />
            <p>{review.message}</p>
            <div>
              <img
                src={index === 0 ? personPic1 : index === 1 ? personPic2 : personPic3}
                alt={`Person ${index + 1}`}
              />
              <span>
                <h2>{review.name}</h2>
                <a href={`mailto: ${review.emailaddress}`}>{review.emailaddress}</a>
                <p>Client</p>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 7em 7%;
  background: var(--backgroundGradient2);
  .topSection {
    display: flex;
    justify-content: center;
    gap: 1em;
    h1 {
      font-size: 3em;
      font-weight: 600;
      max-width: 14em;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      margin-top: 20px;
      max-width: 30em;
      color: gray;
    }
  }
  .bottomSection {
    flex-wrap: wrap;
    margin-top: 3em;
    display: flex;
    justify-content: center;
    gap: 2em;
    .item {
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 1.4em;
      .icon {
        font-size: 3em;
        color: var(--fontPrimaryColor);
      }
      p {
        color: gray;
      }
      div {
        display: flex;
        align-items: center;
        gap: 1em;
        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
        }
        h2 {
          font-size: 17px;
          font-weight: 400;
        }
        p {
          color: var(--fontSecondaryColor);
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .topSection {
      h1 {
        width: 50%;
      }
      p {
        width: 50%;
      }
    }
  }
  @media (max-width: 940px) {
    padding: 0 3%;
    .bottomSection {
      .item {
        width: 300px;
      }
    }
  }
  @media (max-width: 740px) {
    padding: 0 7%;
    .bottomSection {
      gap: 5em;
      .item {
        width: 100%;
        text-align: center;
        align-items: center;
      }
    }
    .topSection {
      h1 {
        font-size: 2.7em;
      }
    }
  }
  @media (max-width: 672px) {
    .topSection {
      flex-direction: column;
      h1 {
        width: 100%;
      }
      p {
        width: 100%;
      }
    }
  }
  @media (max-width: 430px) {
    .topSection {
      flex-direction: column;
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

export default Testimonials;
