import axios from "axios";
import { useState } from "react";
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"


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
            const addTripResponse = await axios.post('https://african-outback-server.vercel.app/api/bookdestination', tripDetails)

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
        <div className="min-h-screen bg-gradient-to-br mt-[100px] from-amber-100 to-orange-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="px-8 py-6 bg-[#506d18] text-white">
            <h2 className="text-3xl font-bold text-center">Create your travel plan right now</h2>
          </div>
          <div className="px-8 py-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input value={tripDetails.name} onChange={changeHandler} id="name" name='name' placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input value={tripDetails.emailaddress} onChange={changeHandler} name="emailaddress" required id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input value={tripDetails.phonenumber} onChange={changeHandler} name="phonenumber" required  id="phone" type="tel" placeholder="+1234567890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input value={tripDetails.address} onChange={changeHandler} name="address" required id="address" placeholder="Your street address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City/State</Label>
                <Input value={tripDetails.city} onChange={changeHandler} name="city" required id="city" placeholder="City, State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input value={tripDetails.nationality} onChange={changeHandler} name="nationality" required  id="nationality" placeholder="Your nationality" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Select Destination</Label>
                <Select value={tripDetails.destination} onValueChange={(value) => setTripDetails({...tripDetails, destination: value})} name="location" required>
                  <SelectTrigger id="destination">
                    <SelectValue placeholder="Select a destination" >{tripDetails.destination}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="serengeti">Serengeti National Park</SelectItem>
                    <SelectItem value="maasai">Maasai Mara</SelectItem>
                    <SelectItem value="kruger">Kruger National Park</SelectItem>
                    <SelectItem value="okavango">Okavango Delta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="attraction">Tourist Attraction</Label>
                <Select value={tripDetails.touristattraction} onValueChange={(value)=> setTripDetails({...tripDetails, touristattraction: value})} name="touristattraction" required>
                  <SelectTrigger id="attraction">
                    <SelectValue placeholder="Select an attraction" >
                    {tripDetails.touristattraction}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wildlife">Wildlife Viewing</SelectItem>
                    <SelectItem value="cultural">Cultural Experiences</SelectItem>
                    <SelectItem value="scenic">Scenic Landscapes</SelectItem>
                    <SelectItem value="adventure">Adventure Activities</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="activities">Activities</Label>
                <Select   value={tripDetails.activities} onValueChange={(value) => setTripDetails({...tripDetails, activities: value})} name="activities" required>
                  <SelectTrigger id="activities">
                    <SelectValue placeholder="Select an activity" >
                    {tripDetails.activities}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="game-drives">Game Drives</SelectItem>
                    <SelectItem value="balloon">Hot Air Balloon Safaris</SelectItem>
                    <SelectItem value="walking">Walking Safaris</SelectItem>
                    <SelectItem value="bird-watching">Bird Watching</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotel">Hotel and Lounges</Label>
                <Select value={tripDetails.hotel} onValueChange={(value) =>  setTripDetails({...tripDetails, hotel:value})} name="hotel" required>
                  <SelectTrigger id="hotel">
                    <SelectValue placeholder="Select accommodation" >{tripDetails.hotel}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luxury">Luxury Lodge</SelectItem>
                    <SelectItem value="tented">Tented Camp</SelectItem>
                    <SelectItem value="treehouse">Treehouse</SelectItem>
                    <SelectItem value="eco">Eco-Lodge</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
            </div>
            <div className="space-y-2">
                <Label htmlFor="month">Intended Month of travel</Label>
                <Select value={tripDetails.month} onValueChange={(value) =>  setTripDetails({...tripDetails, month:value})} name="month" required>
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Select Month" >{tripDetails.month}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="January">January</SelectItem>
                    <SelectItem value="February">February</SelectItem>
                    <SelectItem value="March">March</SelectItem>
                    <SelectItem value="April">April</SelectItem>
                    <SelectItem value="May">May</SelectItem>
                    <SelectItem value="June">June</SelectItem>
                    <SelectItem value="July">July</SelectItem>
                    <SelectItem value="August">August</SelectItem>
                    <SelectItem value="September">September</SelectItem>
                    <SelectItem value="October">October</SelectItem>
                    <SelectItem value="November">November</SelectItem>
                    <SelectItem value="December">December</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            
            <div className="space-y-2">
                <Label htmlFor="year">Intended Year of travel</Label>
                <Select value={tripDetails.year} onValueChange={(value) =>  setTripDetails({...tripDetails, year:value})} name="year" required>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Select Year" >{tripDetails.year}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    
                  </SelectContent>
                </Select>
            </div>
            
            <div className="space-y-2">
                <Label htmlFor="days">Number of Days</Label>
                <Input value={tripDetails.days} onChange={changeHandler} name="days" required id="days" placeholder="How many days" />
            </div>
            
           
            
            <div className="space-y-2">
              <Label htmlFor="category">Tour Category</Label>
              <Select value={tripDetails.tourcategory} onValueChange={(value) => setTripDetails({...tripDetails, tourcategory:value})} name="tourcategory" required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" >
                    {tripDetails.tourcategory}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="family">Family Safari</SelectItem>
                  <SelectItem value="luxury">Luxury Safari</SelectItem>
                  <SelectItem value="adventure">Adventure Safari</SelectItem>
                  <SelectItem value="photography">Photography Safari</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="address">Number of Participants</Label>
                <Input value={tripDetails.participants} onChange={changeHandler} name="participants" required id="address" placeholder="Enter Total number of people travelling" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="info">More Information</Label>
              <Textarea id="info" placeholder="Any additional requests or information..." />
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={book_now}
                className="w-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Itinerary