import React from "react";
import styled from "styled-components";
import { SiYourtraveldottv } from "react-icons/si";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";


const SirimonFourDay = () => {
    return (
        <Container>
            <div className="day">
                <div className="heading">
                    <SiYourtraveldottv className="heading__icon mr-[1rem] text-[2rem] text-[#4FC0D6] font-bold"  />
                    <h1 className="text-[2rem] text-[#4FC0D6] font-bold">Day 1 :Nairobi-Samburu National Reserve</h1>
                </div>
                <div className="body flex">
                    <span className="line mr-[30px] ml-[14px]"></span>
                    <p>You'll be picked up at 6:00 am from Jomo Kenyatta International Airport and head to Buffalo Springs National Reserve via Nanyuki Isiolo Road. Arrive in time for lunch and check in to Ashnil Samburu Camp. Later, embark on the afternoon activities under the guidance of your assigned professional tour guide and driver. It is during your stay here that you will get the chance to experience unlimited game drives, visit Reteti Elephant Sanctuary, visit the Elephant Rock and swim in Buffalo Springs. Dinner and your overnight stay are at your lodge.</p>
                </div>
            </div>
    
           
            <div className="day">
                <div className="heading">
                    <MdOutlineModeOfTravel className="heading__icon mr-[1rem] text-[2rem] text-[#4FC0D6] font-bold"  />
                    <h1 className="text-[2rem] text-[#4FC0D6] font-bold">Day 2 :Samburu National Reserve</h1>
                </div>
                <div className="body flex">
                    <span className="line mr-[30px] ml-[14px]"></span>
                    <p>On this day, you'll have the option of an early morning game drive at 6:00 am with a picnic breakfast and an evening game drive at 4:00 pm. Alternatively, set out for a full-day game drive with a picnic lunch. Samburu National Reserve is well known to hold the special or unique six wild animals of Kenya namely; reticulated giraffe, gerenuk/giraffe gazelle, oryx gazelle, Grevy’s zebra, vulturine guinea fowl and Somali Ostrich. Other species of mammal include the African bush elephant, African buffalo, lion, leopard, cheetah, and hyena. Over 365 species of birds have been recorded in the reserve. The reserve also lies along River Ewaso Nyiro, a home to hippopotamuses and crocodiles. The river’s name is derived from the local community’s language meaning River of brown or muddy water. Enjoy lunch and dinner at your lodge.</p>
                </div>
            </div>
    
           
            <div className="day">
                <div className="heading">
                    <MdTravelExplore className="heading__icon mr-[1rem] text-[2rem] text-[#4FC0D6] font-bold"  />
                    <h1 className="text-[2rem] text-[#4FC0D6] font-bold">Day 3 :Samburu National Reserve-Nairobi</h1>
                </div>
                <div className="body flex">
                    <span className="line mr-[30px] ml-[14px]"></span>
                    <p>Set out for an early morning game drive before breakfast from 6:00 am to 8:00 am. Return to the camp for breakfast and to pack up your belongings. Leave for Nairobi at 10:00 am. Make stopovers en route, for use of restrooms, having lunch on request. Reach Nairobi by 3:00 pm to be dropped off at your accommodation or the airport with lots of memories to cherish.</p>
                </div>
            </div>
    
           
        </Container>
      );
    };
    const Container = styled.div`
    .day{
        margin: 40px;
        &:first-child {
            margin-top: 100px;
            padding-top: 70px;
          }
    }
    .heading{
        display: flex;
        align-items: center;
    }
    .line{
        display: inline-block;
        width: 2px;
        height: 130px;
        background-color: #4FC0D6; 
    }
    .body{
        align-items: center;
    }
    `;


export default SirimonFourDay