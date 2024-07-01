import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
<>
<nav className='nav_conatainer'>
<div className='nav_logo'>
<img src="./assets/nexcent Logo.png" alt="" />
</div>

<div className="nav_links">
<ul>
<a href="/">Home</a>
<a href="#">Service</a>
<a href="#">Feature</a>
<a href="#">Product</a>
<a href="#">Testimonial</a>
<a href="#">FAQ</a>
</ul>

</div>

<div className="nav_buttons">
<button className='nav_buttons_login'>Login</button>
<button className='nav_buttons_signup'>Sign up</button>
</div>

</nav>









</>
  )
}

export default Navbar