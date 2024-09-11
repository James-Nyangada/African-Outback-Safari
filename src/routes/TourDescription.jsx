import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Star, Hotel } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { ToursContext } from '../context/ToursContext'
import { Link, useParams } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

const TourDescription = () =>{
    const {tours} = useContext(ToursContext);
    console.log(tours);
    const {packagesId} = useParams();
    const [tour, setTour] = useState(null)

    console.log('Package:', tour);

    useEffect(() =>{
        const selectedTour = tours.find((p) => p._id === packagesId);
        setTour(selectedTour);
        console.log('Selected Tour:', selectedTour);
    }, [tours, packagesId]);
  const [reviewName, setReviewName] = useState('')
  const [reviewContent, setReviewContent] = useState('')
  const [reviews, setReviews] = useState([
    { name: 'John Doe', content: 'Amazing experience! The wildlife was breathtaking.' },
    { name: 'Jane Smith', content: 'Unforgettable journey. Highly recommend!' }
  ])

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    if (reviewName && reviewContent) {
      setReviews([...reviews, { name: reviewName, content: reviewContent }])
      setReviewName('')
      setReviewContent('')
    }
  }
  if(!tour){
    return <h1>Loading...</h1>
}

  return (
    <div className="max-w-4xl mx-auto p-6 mt-[120px]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-96 rounded-xl overflow-hidden mb-8"
      >
        <img
          src={tour.imageUrls[0]}
          alt="African Safari"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{tour.location}</h1>
            <p className="text-xl"></p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-8"
      >
        <p className="text-lg mb-4">
            {tour.smalldescription}
        </p>
        <div className="flex items-center justify-between bg-primary/10 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Calendar className="text-primary" />
            <span>{tour.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-primary" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="text-primary" />
            <span>4.9 (120 reviews)</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>Package Price</CardTitle>
            <CardDescription>All-inclusive safari experience</CardDescription>
          </CardHeader>
          <CardContent>
          <Link to={'/contact-us'}>
                <Button size="lg" className="w-full">
                Get a Quote
                </Button>
          </Link>
        
          </CardContent>
   
        </Card>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
        <div className="space-y-4">
          
            <Card >
              <CardHeader>
                <CardTitle>Detail day Description</CardTitle>
              </CardHeader>
              <CardContent>
              <div dangerouslySetInnerHTML={{ __html: tour.destinationdescription }} />

              </CardContent>
            </Card>
          
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Inclusions & Exclusions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Inclusions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">{tour.inclusions}</li>
               
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Exclusions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">{tour.exclusions}</li>
                
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Accommodation</h2>
        <div className="space-y-4">
        {tour.hotels && tour.hotels.length > 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>Hotels/Accommodation</CardTitle>
              </CardHeader>
              {tour.hotels.map((hotelName, index) => (
              <CardContent className="flex justify-between items-center">
                <div className="flex items-center gap-2" key={index}>
                  <Hotel className="text-primary" />
                  <span>{hotelName.hotel}</span>
                </div>
                <div className="text-xl font-bold"  key={index}>
                <Link to={'/contact-us'}>
                <Button size="lg" className="w-full">
                  {hotelName.price}
                </Button>
                  
                </Link>
                 <span className="text-sm font-normal text-muted-foreground"></span>
                </div>
              </CardContent>
            ))}
            </Card>
            ) : (
                <p>No hotels added yet.</p>
            )}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <Tabs defaultValue="read" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="read">Read Reviews</TabsTrigger>
            <TabsTrigger value="write">Write a Review</TabsTrigger>
          </TabsList>
          <TabsContent value="read">
            <div className="space-y-4 mt-4">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{review.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{review.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="write">
            <form onSubmit={handleReviewSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="review">Your Review</Label>
                <Textarea
                  id="review"
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Submit Review</Button>
            </form>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
export default TourDescription