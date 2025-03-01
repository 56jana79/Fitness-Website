import React from 'react'
import * as Icon from 'react-bootstrap-icons'
var youtubecolor = {
    color:"red",
    width:'150px',
    height:"150px",
  
  }
  
  var Youtubers ={
    color:"red",
    width:"20px",
    height:"20px"
  }



const Mainby = (props) => {

    const Bycepsitems = props.item;
    const Bycepstelements = Bycepsitems.map((item, index) => 
        <div key={index} className='chestcontainer1' >{item}</div>
    );

  return (
    <div>
       <div className='chest'>
      <div>
      <h3>The biceps brachii muscle, located in the upper arm, is crucial for flexing the elbow and rotating the forearm.

Well-developed biceps not only enhance arm strength and aesthetics but also improve performance in various sports and daily activities involving pulling motions.. They can be performed using dumbbells, barbells, or resistance bands. When doing bicep curls, it's important to keep your elbows close to your torso and avoid swinging your arms to ensure you're fully engaging the biceps..</h3>
          <h1>Youtubers you want to know...!</h1>
 <h3>
<Icon.Youtube className='youtube icoon' style={youtubecolor}/>
<br />
<h2>Tamil Youtubers</h2>
<div className='youtubers'>
 
 <a href="https://youtu.be/2gockbsvHcg?si=bPSLt-Mfz_WqewtJ"> <Icon.Youtube className='youtuber' style={Youtubers} /> <p>Tharun Kumar</p></a> 
 <a href="https://youtu.be/RKBSouHB3RY?si=Q6JqcFPS5m9pYjo9"> <Icon.Youtube className='youtuber'  style={Youtubers}   /> <p>Biglee Tamil</p></a>  <p>©</p>
<a href="https://youtu.be/3DYMVE9dHwA?si=8yQH8TA9ge_doJ7T"><Icon.Youtube className='youtuber' style={Youtubers} /> <p>1morep</p></a> 
 <a href="https://youtu.be/_qTHxaUILmI?si=WlJaz0v5xOoDO79y"><Icon.Youtube className='youtuber' style={Youtubers} /> <p>Santhosh prem</p></a> 
</div>

 </h3>
<div className='chestcontainer'>
{Bycepstelements}

</div>

          </div>
    </div>


    </div>
  )
}

export default Mainby
