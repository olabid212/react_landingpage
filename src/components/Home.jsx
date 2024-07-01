import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <>
    <section className="hero_wrapper">
    <div className="hero_wrapper_left">
    <h1>Lessons and insights <span> from 8 years</span></h1>
    <p>Where to grow your business as a photographer: site or social media?</p>
    <button>Register</button>
    </div>
    
    <div className="hero_wrapper_right">
    
    <img src="./assets/Illustration.png" alt="" />
    </div>
    </section>

    {/* Our Client section */}

<section className='clients_wrapper'>
<h1>Our Clients</h1>
<p>We have been working with some Fortune 500+ clients</p>

<div className="clients_wrapper_logo">
<img src="./assets/Clients Logos.png" alt="" />
</div>
</section>
    
    
<section className="communit_wrapper">
<div className='community_wrapper_title'>
<h1>Manage your entire community <br /> in a single system</h1>
<p>Who is Nextcent suitable for?</p>
</div>

<div className="community_wrapper_box_container">

<div className="community_wrapper_box">
<img src="./assets/Icon (1).png" alt="" />
<h1>Membership <br /> Organisations</h1>
<p>Our membership management software provides full automation of membership renewals and payments</p>
</div>

<div className="community_wrapper_box">
<img src="./assets/Icon (2).png" alt="" />
<h1>National <br /> Associations</h1>
<p>Our membership management software provides full automation of membership renewals and payments</p>
</div>

<div className="community_wrapper_box">
<img src="./assets/Icon (3).png" alt="" />
<h1>Clubs And <br /> Groups</h1>
<p>Our membership management software provides full automation of membership renewals and payments</p>
</div>



</div>
</section>    
    
    
    
    </>
  )
}

export default Home