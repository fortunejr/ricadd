import React from 'react'
import "../styles/Packages.css"

const Packages = () => {
  return (
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

                <div className='packages-content'>
                    <div>
                        <img className='grid-img' src="/images/work-in-luxembourg.webp" alt="luxembourg" />
                    </div>
                    <div className='content'>
                        <h4>Work in Luxembourg</h4>
                        <p>Get a Schengen work visa and work permit to work and reside in Luxembourg or any other European country.</p>
                        <p>Total Cost: ₦14,000,000</p>
                    </div> 
                </div>

                <div className='packages-content'>
                    <div>
                        <img className='grid-img' src="/images/vacation-in-dubai.jpg" alt="dubai" />
                    </div>
                    <div className='content'>
                        <h4>Vacation in Dubai</h4>
                        <p>Take a little time to spoil yourself and your family this holiday, get a tour around Dubai and environs.</p>
                        <p>Total Cost: ₦4,000,000 per person</p>
                    </div> 
                </div>


                <div className='packages-content'>
                    <div>
                        <img className='grid-img' src="/images/study-in-australia.jpg" alt="australia" />
                    </div>
                    <div className='content'>
                        <h4>Study in Australia</h4>
                        <p>Apply for a study visa in Australia which can also comes with as tudy permit</p>
                        <p>Total Cost: ₦15,000,000</p>
                    </div> 
                </div>
                
            </div>
        </div>
  )
}

export default Packages