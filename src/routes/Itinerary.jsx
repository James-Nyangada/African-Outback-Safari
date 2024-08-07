import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Itinerary = () =>{
    const [tripDetails, setTripDetails] = useState({
        name: "",
        emailaddress: "",
        phonenumber: "",
        address: "",
        city: "",
        nationality: "",
        touristattraction: "",
        activities: "",
        hotel: "",
        month: "",
        year: "",
        days: "",
        tourcategory: "",
        participants: "",
        additional: "",
        destination: "",
    })

    const changeHandler = (e) =>{
        setTripDetails({
            ...tripDetails,
            [e.target.name]: e.target.value
        })
    }

    const book_now = async () =>{
        console.log(tripDetails);
        try{
            const addTripResponse = await axios.post('http://localhost:4001/api/bookdestination', tripDetails)

            if(addTripResponse.data.success){
                alert("Trip booked successfully")
            }else{
                alert("Failed to book trip")
            }
        }catch(error){
            console.log('An error occured', error);
            alert("Failed to book trip")
        }
    }
    return(
        <Container>
            <div className="form">
                <div className="form-left">
                    <h1>Create your travel plan right now</h1>
                    <p className="text-[20px]">Empowering Journeys Enchanting Memories.</p>
                    <p className="text-[18px]">Plan your trip with the click of a button to any destionation in Kenya of your choice</p>
                </div>
                <div className="form-right">
                    <div>
                        <label className="block mb-2">Name</label>
                        <input value={tripDetails.name} onChange={changeHandler} name="name" required type="text" placeholder="Enter Your Full Name" className="w-full border border-zinc-300 rounded p-2 mb-4" />
                    </div>

                    
                    <div>
                        <label className="block mb-2">Email</label>
                        <input value={tripDetails.emailaddress} onChange={changeHandler} name="emailaddress" required type="text" placeholder="Enter Your email address" className="w-full border border-zinc-300 rounded p-2 mb-4" />
                    </div>

                    
                    <div>
                        <label className="block mb-2">Phone number</label>
                        <input value={tripDetails.phonenumber} onChange={changeHandler} name="phonenumber" required type="tel" placeholder="+254 123 435 789" className="w-full border border-zinc-300 rounded p-2 mb-4" />
                    </div>

                    <div>
                        <label className="block mb-2">Address</label>
                        <input value={tripDetails.address} onChange={changeHandler} name="address" required type="text" placeholder="Enter Your address info" className="w-full border border-zinc-300 rounded p-2 mb-4" />
                    </div>

                    <div>
                        <label className="block mb-2">City/State</label>
                        <input value={tripDetails.city} onChange={changeHandler} name="city" required type="text" placeholder="Enter city,state or province" className="w-full border border-zinc-300 rounded p-2 mb-4" />
                    </div>

                    <div>
                        <label className="block mb-2">Nationaility</label>
                        <input value={tripDetails.nationality} onChange={changeHandler} name="nationality" required type="text" placeholder="E.g kenyan" className="w-full border border-zinc-300 rounded p-2 mb-4" />
                    </div>

                    <div>
                        <label className="block mb-2">Select destination</label>
                        <select value={tripDetails.destination} onChange={changeHandler} name="destination" required className="w-full border border-zinc-300 rounded p-2 mb-4">
                            <option value="n/a"></option>
                            <option value="Kenya">Kenya</option>
                            <option value="Ethopia">Ethopia</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Angola">Angola</option>
                            <option value="Bostwana">Bostwana</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Tourist attration</label>
                        <select value={tripDetails.touristattraction} onChange={changeHandler} name="touristattraction" required className="w-full border border-zinc-300 rounded p-2 mb-4">
                            <option value="n/a"></option>
                            <option value="Mt Kenya">Mt Kenya</option>
                            <option value="Maasai Mara">Maasai Mara</option>
                            <option value="Lake Nakuru">Lake Nakuru</option>
                            <option value="Mombasa">Mombasa</option>
                            <option value="Lake Victoria">Lake Victoria</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Activities</label>
                        <select value={tripDetails.activities} onChange={changeHandler} name="activities" required className="w-full border border-zinc-300 rounded p-2 mb-4">
                            <option value="n/a"></option>
                            <option value="Activities 1">Activities 1</option>
                            <option value="Activities 2">Activities 2</option>
                            <option value="Activities 3">Activities 3</option>
                            <option value="Activities 4">Activities 4</option>
                            <option value="Activities 5">Activities 5</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Hotel and Lounges</label>
                        <select value={tripDetails.hotel} onChange={changeHandler} name="hotel" required className="w-full border border-zinc-300 rounded p-2 mb-4">  
                            <option value="n/a"></option>
                            <option value="Hotel 1">Hotel 1</option>
                            <option value="Hotel 2">Hotel 2</option>
                            <option value="Hotel 3">Hotel 3</option>
                            <option value="Hotel 4">Hotel 4</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Intended Month of Travel</label>
                        <select value={tripDetails.month} onChange={changeHandler} name="month" required className="w-full border border-zinc-300 rounded p-2 mb-4">
                            <option value="n/a"></option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>

                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Intended Year of Travel</label>
                        <select value={tripDetails.year} onChange={changeHandler} name="year" required className="w-full border border-zinc-300 rounded p-2 mb-4">
                            <option value="n/a"></option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Number of Days</label>
                        <input value={tripDetails.days} onChange={changeHandler} name="days" required type="number" placeholder="How many days is the trip to take" className="w-full border border-zinc-300 rounded p-2 mb-4" />
                    </div>

                    <div>
                        <label className="block mb-2">Tour Category</label>
                        <select value={tripDetails.tourcategory} onChange={changeHandler} name="tourcategory" required className="w-full border border-zinc-300 rounded p-2 mb-4">
                            <option value="n/a"></option>
                            <option value="Solo travel">Solo travel</option>
                            <option value="Group travel">Group travel</option>
                            <option value="Honeymoon">Honeymoon</option>
                            <option value="Family Travel">Family Travel</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2">Number of Participants</label>
                        <input value={tripDetails.participants} onChange={changeHandler} name="participants" required type="number" placeholder="Enter Total number of people travelling" className="w-full border border-zinc-300 rounded p-2 mb-4" />
                    </div>
                    <div className="mb-6">
                        <p className="text-lg font-medium mb-2">Description</p>
                        <textarea value={tripDetails.additional} onChange={changeHandler} name="additional" required  placeholder="Enter any additional information you feel is left out" className="w-full border border-zinc-300 rounded p-2 mb-4"></textarea>
                    </div>
                    
                </div>
                
            </div>
            <div style={{ position: 'relative' }}>
                <button onClick={book_now} className="bg-[#FFEB3B] text-black py-4 px-6 rounded-[15px] hover:bg-[#388E3C] book" style={{ position: 'absolute', right: 870 }}>Submit</button>
            </div>
           
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1700px;
    margin: 200px auto;
    .form{
      
        display: grid;
        grid-template-columns: 1.5fr 2fr;
        align-items: center;
    }
    .form-left{
        h1{
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
        }
    }
    .form-right{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
    .book{

    }
    @media (max-width: 1004px) {
        .form{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .form-right{
            display: flex;
            flex-direction: column;
        }
    }
    @media (max-width: 500px) {
        .form-left{
            h1{
                font-size: 1.5rem;
            }
        }
    
    }
    @media (max-width: 370px) {
        .form-left{
            h1{
                font-size: 1.2rem;
            }
        }
    }
`;
export default Itinerary