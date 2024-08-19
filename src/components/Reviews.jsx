"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import '../styles/item.css'
import axios from "axios"

export default function Component() {

    const [review, setReview] = useState({
        name: '',
        emailaddress: '',
        message: ''
    })

    const changeHandler = (e)=> {
        setReview({...review, [e.target.name]: e.target.value})
    }

    const Submit_Review = async () =>{
        console.log(review);
        

        try{
            const reviews = {...review}
            console.log(reviews)

            const addReviewResponse = await axios.post ('https://african-outback-server.vercel.app/api/addreviews', reviews);

            if(addReviewResponse.data.success){
                alert('Review posted succesfully');

            }else{
                alert('Failed to post review');
            }
        }catch(error){
            console.log('Error adding review',error);
            alert('An error occured')
        }
    }
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle>Leave a review</CardTitle>
        <CardDescription>
          Rate your experience of the tour
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value= {review.name}
              onChange={changeHandler}
              name= 'name'
              type="text"
              className="w-50"
              placeholder="Enter your Name"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="emailaddress">Email</Label>
            <Input
                id="emailaddress"
                type="email"
                name = "emailaddress"
                value= {review.emailaddress}
                onChange={changeHandler}
                className="w-50"
                placeholder="Enter your email"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="message">Leave a comment</Label>
            <Textarea
                id="message"
                value= {review.message}
                name = "message"
                onChange={changeHandler}
                className="min-h-32"
            />
          </div>
        </div>
        <Button onClick={Submit_Review} className="mt-5 bg-[#506d18] hover:bg-[#ffeb3b] hover:text-[black]">Submit Review</Button>
      </CardContent>
    </Card>
  )
}
