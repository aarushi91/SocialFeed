import "./Features.css";

import {

FaBolt,

FaUsers,

FaComments,

FaShieldAlt

}

from "react-icons/fa";

function Features(){

return(

<section className="features">

<div className="features-heading">

<h2>Why Choose SocialFeed?</h2>

<p>

Everything you need to build a modern social media platform.

</p>

</div>

<div className="features-grid">

<div className="feature-card">

<div className="feature-icon">

<FaBolt/>

</div>

<h3>Real-Time Updates</h3>

<p>

Receive instant updates without refreshing the page.

</p>

</div>

<div className="feature-card">

<div className="feature-icon">

<FaUsers/>

</div>

<h3>User Profiles</h3>

<p>

Create beautiful personal profiles and connect with everyone.

</p>

</div>

<div className="feature-card">

<div className="feature-icon">

<FaComments/>

</div>

<h3>Instant Chat</h3>

<p>

Communicate instantly with secure messaging.

</p>

</div>

<div className="feature-card">

<div className="feature-icon">

<FaShieldAlt/>

</div>

<h3>Secure Login</h3>

<p>

Authentication powered with modern security.

</p>

</div>

</div>

</section>

)

}

export default Features;