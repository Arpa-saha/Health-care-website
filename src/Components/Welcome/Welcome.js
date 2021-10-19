import React from 'react';
import doctor from  '../../Images/Wellcome/doctorcouple.jpg'
import './Welcome.css'

const Welcome = () => {
    return (
<div>
    <h2 className='fw-bold mt-5 mb-5 text-success'><u>Pharmacy Medical Service</u></h2>
<div className='welcome mt-5 mb-5 responsive'>
            <div className="img" >
                <img  src={doctor} alt="" />
            </div>
            <div >
                <div className=' text-center m-5 p-3' >
                <h1 className='background m-2'><i>Doctor Appointment</i></h1>
                <h1 className='background m-3 '><i>Find Doctor</i></h1>
                 <h1 className='background m-4'><i>Contact</i></h1>
                </div>
                
            </div>
        </div>
</div>
    );
};

export default Welcome;