import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    
    <section className="pre_footer">

    <div className='pre_footer_content'>
    <h1>Pellentesque suscipit fringilla libero eu.</h1>
    <button>Get a Demo</button>
    </div>

    </section>
    
    <footer>
    <div className="footer_column_one">
    <img src="./assets/footer_Logo.png" alt="" />
    <div className='footer_column_one_content'>
    <p>Copyright © 2020 Nexcent ltd.</p>
    <p>All rights reserved</p>
    </div>
    <div className="social_container">
    
    </div>
    </div>

    <div className="footer_column_two">
    <div className="footer_column_two_content">
    <h1>Company</h1>
    <ul>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact Us</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Testimonials</a></li>
    </ul>
    </div>
    </div>

    <div className="footer_column_three">
    <div className="footer_column_two_content">
    <h1>Support</h1>
    <ul>
    <li><a href="#">Help Center</a></li>
    <li><a href="#">Terms of Service</a></li>
    <li><a href="#">Legal</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Status</a></li>
    </ul>
    </div>
    </div>

    <div className="footer_column_four">
    <h1>Stay up to Date</h1>
    <form action="Post">
    <input type="email" name="" id="" placeholder='Your Email Address' />
    </form>
    </div>
    
    </footer>
    
    
    
    
    
    
    </>
  )
}

export default Footer