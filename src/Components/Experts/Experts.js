import React from 'react';
import Expert from '../Expert/Expert';


const experts = [
    {
        img: 'https://thumbs.dreamstime.com/b/young-doctor-16088825.jpg',
        name: 'Dr.Alnav',
        expertize: '-Children specialised-'
    },
    {
        img:'https://st2.depositphotos.com/1005893/5711/i/600/depositphotos_57117135-stock-photo-indian-doctor.jpg',
        name: 'Dr.Levendaa',
        expertize: '-Cardiologist specialised-'
    },
    {
        img: 'https://www.woodlandshospital.in/images/doctor-img/arup-das-biswas.jpg',
        name: 'Dr.Pello',
        expertize: '-Brain And Mind Specialised-'
    },
    {
        img: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg',
        name: 'Dr.Zarkin',
        expertize: '-Altra specialist-'
    },
  ]

const Experts = () => {
    return (
<div className='container' id='Experts' >
            <marquee><h2 className='bg-success text-light text-center fw-bold'><i>Expert Doctors...</i></h2></marquee>
            <div className='row'>
                {
                    experts.map(expert=><Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;