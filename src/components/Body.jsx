import React from 'react'
import '../styles/Body.css'
const Body = () => {
  return (
<>
<section className='body_container'>
<div className="body_container_image">
<img src="./assets/rafiki.png" alt="" />
</div>

<div className="body_container_content">
<h1>The unseen of spending three <br /> years at Pixelgrade</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
<button>Learn More</button>
</div>
</section>

<section className="achievement_wrapper">
<div className="achievement_heading">
<h1>Helping a local <br /> <span>business reinvent itself</span></h1>
<p>We reached here with our hard work and dedication</p>

</div>

<div className="achievement_counts">
 
<div className='achievement_counts_rows'>

<img src="./assets/Icon (4).png" alt="" />

<div>
<h1>2,245,341</h1>
<p>Members</p>
</div>

</div>
<div className='achievement_counts_rows'>

<img src="./assets/Icon (5).png" alt="" />

<div>
<h1>46,328</h1>
<p>Clubs</p>
</div>

</div>
<div className='achievement_counts_rows'>

<img src="./assets/Icon (6).png" alt="" />

<div>
<h1>828,867</h1>
<p>Event Bookings</p>
</div>

</div>
<div className='achievement_counts_rows'>

<img src="./assets/Icon (7).png" alt="" />

<div>
<h1>1,926,436</h1>
<p>Payments</p>
</div>

</div>
</div>
</section>

<section className='body_container'>
<div className="body_container_image">
<img src="./assets/pana.png" alt="" />
</div>

<div className="body_container_content">
<h1>How to design your site footer like we did</h1>
<p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
<button>Learn More</button>
</div>
</section>



</>  
  )
}

export default Body