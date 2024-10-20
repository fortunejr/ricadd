import React from 'react'
import "../styles/Home.css"
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials';


const Home = () => {
  return (
    <div className='home'>
        <div className='head'>
            <div className='head-text'>
                <h2>Planning to Travel? <br/>You've come to the right place.</h2>
                <h4>Your one stop for all things travel.</h4>
            </div>
            <div className='head-img'>
            <img className='smile-img' src="/images/smile.jpeg" alt="smile" />
            </div>
        </div>

        <div className='little-info'>
            <p>Ricadd Travels and Tours is travel agency dedicated to providing you with unforgettable experiences that will leave you craving for more.</p>
            <div className='little-info-icons'>
                <a className='whatsapp-icon' href='#'><img src="/images/whatsapp.png" alt="facebook icon"></img>Chat Us</a>
                <a className='mail-icon' href='#'><img src="/images/mail.png"/>Email Us</a>
            </div>
            
        </div>

        <div class="services">
            <h3 className='service-head'>Services we Offer</h3>
            <div className='service-inner'>
                <div class="service-card">
                    <div class="overlay">
                        <h3>Tour Packages</h3>
                        <p>We organise local & international group tours & staycations for organisations, families, individuals & groups.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="overlay">
                        <h3>Hotel Bookings</h3>
                        <p>We have resounding deals with hotels/apartments all over the world with different payment choices.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="overlay">
                        <h3>Air Tickets</h3>
                        <p>We provide regional and international flight tickets at reasonable rates as advertised by carriers and airlines.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="overlay">
                        <h3>Visa Processing</h3>
                        <p>We provide visa processing assistance when required (form filling, profiling, interview preparation, and application).</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='packages'>
            <h3>Our Packages</h3>
            <div className='grid-packages'>

                <div className='packages-content'>
                    <div>
                        <img className='grid-img' src="/images/study-in-usa.png" alt="usa" />
                    </div>
                    <div className='content'>
                        <h4>Study In USA</h4>
                        <p>Pursue your Undegraduate degree or Masters or  PhD in the United states.</p>
                        <p>Total Cost: ₦11,000,000</p>
                    </div>
                </div>
                
                <div className='packages-content'>
                    <div>
                        <img className='grid-img' src="/images/work-in-germany.jpg" alt="usa" />
                    </div>
                    <div className='content'>
                        <h4>Work In Germany</h4>
                        <p>Apply for a work visa and work permit in Germany with Secure jobs at your disposal</p>
                        <p>Total Cost: ₦8,600,000</p>
                    </div>
                </div>
                
                <div className='packages-content'>
                    <div>
                        <img className='grid-img' src="/images/study-in-canada.png" alt="usa" />
                    </div>
                    <div className='content'>
                        <h4>Study In Canada</h4>
                        <p>Pursue your Undegraduate degree or Masters or  PhD in Canada</p>
                        <p>Total Cost: ₦9,000,000</p>
                    </div> 
                </div>
                
            </div>
            <Link to ='/packages'><p className='see-more'>See more</p></Link>
        </div>

        <div className='testimonials'>
            <h3 className='testimonial-head'>What our clients say</h3>
            <Testimonials></Testimonials>
        </div>
    </div>
  )
}

export default Home