
import React from 'react';
import { useParams } from 'react-router';


const Booking = () => {
 
    const {serviceid}=useParams();
    return (
        <div>
            <h2 className='text-primary'><u>Services Details</u></h2>
           <h1>{serviceid}</h1> 
      
        </div>
    );
};

export default Booking;