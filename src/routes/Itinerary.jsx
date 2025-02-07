import axios from "axios";
import { useState,  useEffect } from "react";
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Calendar } from "../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { format } from "date-fns"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { CalendarIcon } from "lucide-react"


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
        children: "",
        adults: "",
        package: "",
        startdate: "",
        enddate: "",
    })
    const [allPackages, setAllPackages] = useState([])
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const changeHandler = (e) =>{
        setTripDetails({
            ...tripDetails,
            [e.target.name]: e.target.value
        })
    }
    const handleStartDateChange = (date) => {
        setStartDate(date);
        setTripDetails({
          ...tripDetails,
          startdate: format(date, "yyyy-MM-dd"), // Formatting the date to "yyyy-MM-dd"
        });
      };
    
      const handleEndDateChange = (date) => {
        setEndDate(date);
        setTripDetails({
          ...tripDetails,
          enddate: format(date, "yyyy-MM-dd"), // Formatting the date to "yyyy-MM-dd"
        });
      };
    

    const book_now = async () =>{
        console.log(tripDetails);
        try{
            const addTripResponse = await axios.post('https://african-outback-server.vercel.app/api/bookdestination', tripDetails)

          
            alert("Succesfully book a trip")
            
        }catch(error){
            console.log('An error occured', error);
            alert("Failed to book trip")
        }
    }
    

    const fetchPackages = async () => {
        try {
            const response = await axios.get('https://african-outback-server.vercel.app/api/getpackages');
            const data = response.data.packages; // Adjusted to access the destination array
            setAllPackages(data);
            console.log('Packages rendered successfully');
        } catch (error) {
            console.log('Error Fetching Property', error);
        }

    }

    useEffect(() => {
        fetchPackages();
    }, []);
    
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
                <Label htmlFor="city">City/State</Label>
                <Input value={tripDetails.city} onChange={changeHandler} name="city" required id="city" placeholder="City, State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input value={tripDetails.nationality} onChange={changeHandler} name="nationality" required  id="nationality" placeholder="Your nationality" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Select Package</Label>
                <Select value={tripDetails.destination} onValueChange={(value) => setTripDetails({...tripDetails, destination: value})} name="location" required>
                  <SelectTrigger id="destination">
                    <SelectValue placeholder="Select a Package" >{tripDetails.destination}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {allPackages.map((pkg) => (
                        <SelectItem key={pkg._id} value={pkg.name}>
                        {pkg.name}
                        </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

                <div className="space-y-2">
                    <Label htmlFor="adults">Number of Adults</Label>
                    <Input value={tripDetails.adults} onChange={changeHandler} name="adults" required id="adults" placeholder="Enter Total number of Adults travelling" />
                </div>
          
                <div className="space-y-2">
                    <Label htmlFor="children">Number of Children</Label>
                    <Input value={tripDetails.children} onChange={changeHandler} name="children" required id="children" placeholder="Enter Total number of Children travelling" />
                </div>
          
          
              
            </div>
            
           
            
          
            
           
            <div className="space-y-2">
            <Label>Travel Dates</Label>
            <div className="flex space-x-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-[240px] justify-start text-left font-normal ${
                      !startDate && "text-muted-foreground"
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : <span>Start date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={handleStartDateChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-[240px] justify-start text-left font-normal ${
                      !endDate && "text-muted-foreground"
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : <span>End date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={handleEndDateChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
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