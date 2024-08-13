import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const ToursContext = createContext()

const ToursContextProvider = (props) =>{
    const [tours, setTours] = useState([]);

    useEffect(()=>{
        const fetchTours = async () =>{
            try{
                const response = await axios.get('https://african-outback-server.vercel.app/api/getpackages');
                const fetchedTours = response.data.packages
                setTours(fetchedTours)
                console.log('Packages', fetchedTours)
                console.log('success added packages');

            }catch(error){
                console.log('error fetching packages', error)
            }
        };
        fetchTours();
    }, []);

    const contextValue = {
        tours,
    };

    return <ToursContext.Provider value = {contextValue}>{props.children}</ToursContext.Provider>

}
export default ToursContextProvider;