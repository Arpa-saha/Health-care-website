import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id='About' className='About-us'>

<div className='bg-secondary text-warning'>
<h1 className='bg-success p-5'><marquee><h2 className='text-light fw-bold'><i>Information Details:</i></h2></marquee></h1>

      <h1><u>Contact US:</u></h1>
       <h1> Information:</h1>
       <h3>Name: Arpa Saha</h3>
       <h3>phone:017xxxxxxx</h3>
       <h3>E-mail:arpa35-2676@diu.edu.bd</h3>
       
</div>

            
<form class="row g-3 container mt-5">

  <h1 className='text-success'> Infomation Here:</h1>
    
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder='Email'/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder='password'/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="122,Dhaka"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Dhaka</option>
      <option>Narsingdi</option>
      <option>Noakhali</option>
      <option>Barisal</option>
      <option>Mymensignh</option>
      <option>Rajshahi</option>
    </select>
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me
      </label>
    </div>
  </div>
 
  <div class="col-12">
    <button type="submit" class="btn btn-success">Submit</button>
  </div>
</form>
</div>
    );
};

export default About;