import React, { useContext} from "react";
import {ToursContext } from "../context/ToursContext"
import { Link } from "react-router-dom";
import Item from './Item'
import '../../src/styles/packages.css'

const Package = ()=>{
    const {tours} = useContext(ToursContext)
   
    return (
        <div className="packages">
            {tours.map((item, i)=>(
            <Item 
                key={i}
                id={item._id}
                imageUrls={item.imageUrls}
                name={item.name}
                price={item.price}
                location={item.location}
                className='package'
            />
            ))}
        </div>
    )
}
export default Package