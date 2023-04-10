import React from 'react';
import Corousel from "./Corousel";

const ConfirmedBooking = ()=>{
  <section>
      <Corousel />
      <article className="container">
      <h1>Success! <span><i class="bi bi-check-circle"></i></span></h1>
      <p>Your Table Reservation was successful, your invoice was sent via your email address.</p>  
      <p>Thank you for choosing us</p>          
      </article>
    </section>

};

export default ConfirmedBooking;