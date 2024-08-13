import { useContext, useEffect, useState } from 'react'
import '../styles/tourdesc.css'
import { ToursContext } from '../context/ToursContext'
import { useParams } from 'react-router-dom';

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

    if(!tour){
        return <h1>Loading...</h1>
    }


    return (
        <div className="description-page">
            <div>
                <div className='heading'>
                    <h1>{tour.name}</h1>

                </div>
                <div className='image'>
                    <img src={tour.imageUrls[0]} alt='mount kenya' width={400} height={400}/>
                    <img src={tour.imageUrls[1]} alt='mount kenya' width={400} height={400}/>
                    <img src={tour.imageUrls[1]} alt='mount kenya' width={400} height={400}/>
                    <img src={tour.imageUrls[1]} alt='mount kenya' width={400} height={400}/>
                </div>
                <div className='location'>
                    <h2>Location: {tour.location}</h2>
                    <p>{tour.smalldescription}
                    </p>
                </div>
                <div className='price'>
                    <h3>Price: ${tour.price} <span>/Per Day</span></h3>

                </div>
                <div className='exclusions'>
                    <h3>Exclusions</h3>
                    <ul>
                       {tour.exclusions}
                    </ul>
                </div>
                <div className='inclusions'>
                    <h3>Inclusions</h3>
                    <ul>
                        {tour.inclusions}
                    </ul>
                </div>
                <div className='descriptiion'>
                    <h3>Special Notes</h3>
                    <p>{tour.speacialnotes}</p>
                </div>
                <div className='itinerary'>
                    <h3>Itinerary</h3>
                    <p>{tour.detaildescription}</p>
                </div>

            </div>
        </div>
    )
}
export default TourDescription