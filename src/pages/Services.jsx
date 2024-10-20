import React from 'react'
import "../styles/Services.css"

const Services = () => {
  return (
    <div>
      <div className='service-head'>
        <img className='plane-img' src="/images/plane.jpg" alt="plane"/>
        <h2 className='plane-text'>The Services we offer</h2>
      </div>

      <div className='service-3'>
        <div className='tour'>
          <div className='tour-text'>
            <h3>Tour handling</h3>
            <p>At Ricadd Travel & Tours, we carefully organize memorable trips so you can relax and enjoy your vacation. Whether you're traveling with family, a company group, as a solo traveler, or with a partner, we've got everything covered. We offer personalized plans, safe and comfortable travel, unique experiences, team-building activities, kid-friendly trips, romantic getaways, and more.

            Our mission is to provide an amazing travel experience for everyone, no matter the type of trip. Let us handle the details while you focus on creating lasting memories.</p>
          </div>
          <img className='tours-img' src="/images/tours.jpg" alt="tours"/>
        </div>

        <div className='flight'>
        <h3 className='first-h3'>Electronic Flight Ticketing</h3>
          <img className='flight-img' src="/images/flight.jpeg" alt="flight"/>
          <div className='flight-text'>
          <h3 className='second-h3'>Electronic Flight Ticketing</h3>
            <p>Ricadd Travel & Tours connects you to a broad network of airlines and travel partners, offering a variety of flight options to match your budget and preferences. Whether you're seeking economy seats, business class upgrades, or premium services, we provide customized recommendations to suit your needs. We handle both domestic and international flights, including SOTO (Sold Outside Ticketed Outside) and SOTI (Sold Outside Ticketed Inside) tickets.</p>
          </div>
          
        </div>

        <div className='visa'>
          <div className='visa-text'>
            <h3>Visa Procurement</h3>
            <p>With our seasoned visa experts, you are in good hands throughout your visa application process. Our dedicated team specializes in facilitating visa applications, ensuring your travel plans proceed smoothly and efficiently. We take pride in our high success rate for visa approvals and specialize in securing visas for various countries.</p>
          </div>
          <img className='visa-img' src="/images/visa.png" alt="visa"/>
        </div>


      </div>

      
    </div>
  )
}

export default Services