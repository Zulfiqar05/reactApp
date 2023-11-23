import React from 'react'
import img1 from '../components/Image-1.png'

function Header() {
  return (
    <div className="main-container">
    <div className="img-tag">
      <img src={img1} alt='a' />
    </div>

    <div className="text-container">
      <h2>Turn Your Website</h2>

      <h2>Into Your Best Sales</h2>

      <h2>Person</h2>

      <div className="para-section">
        <p>
          Triple your sales with a pixel-perfect website.
        </p> 
        
           <p>
            At SmartSite Studio,
          we don’t just design and write code,

           </p>
           
          <p>
            we build a revenue-driving
            machine for your business.
          </p>
      </div>

     

        <div className="buttons">
          <button className="button-1">Talk to Us</button>

      <button class="button-2">See Portfolio</button>

        </div>
      
      
    </div>
  </div>
  )
}

export default Header
