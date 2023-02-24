import React, { useEffect, useRef } from 'react';
import Button from '@mui/material/Button'; //@ts-ignore
import { useSelector, useDispatch } from 'react-redux'
import { setLocation } from '../store/store'
import {useNavigate} from 'react-router-dom';
import { storeInterface } from '../store/store'
import cloudsBg from '../assets/backgroundImages/clouds.jpeg'

declare const google: any;

function SearchPage() {
  const autoCompleteRef = useRef();
  const inputRef = useRef<HTMLInputElement>(null);
  const options = {
    componentRestrictions: { country: "us" },
    fields: ["geometry", "name"]
   };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lat = useSelector((state:storeInterface) => state.location.lat);
  const long = useSelector((state:storeInterface) => state.location.long);

   useEffect(() => {
    autoCompleteRef.current = new google.maps.places.Autocomplete(
     inputRef.current,
     options,
    );
    if(typeof autoCompleteRef.current !== "undefined"){ //@ts-ignore
      autoCompleteRef!.current!.addListener("place_changed", async function () { //@ts-ignore
       const place = await autoCompleteRef!.current!.getPlace();
       dispatch(setLocation({
        lat: place.geometry.location.lat(),
        long: place.geometry.location.lng(),
        name: place.name
       }))
      });
    }
    
   }, []);

   const handleClick = ()=> {
      if(lat !== '' && long !== ''){
        navigate('/forecast');  
      } else {
        alert('Please enter a location :)');
      }
      
   }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5 bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage: `url(${cloudsBg})`
    }}
    >
      <input ref={inputRef} className="
        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
      "/>
      <Button variant="contained" size="large" onClick={handleClick}>Get Weather Forecast!</Button>
    </div>
  );
}

export default SearchPage;