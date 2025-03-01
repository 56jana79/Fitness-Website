import * as Icon from 'react-bootstrap-icons'

import React from 'react'

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


const Arms = (props) => {

  const chestitemlist = props.item;
  const chestelements = chestitemlist.map((item, index) => 
      <div key={index} className='chestcontainer1' >{item}</div>
  );

  return (
    <div className='chest'>
      <div>
      <h3>Chest workouts are essential for building strength and muscle mass in the upper arm, particularly targeting the biceps brachii muscle. These muscles play a crucial role in the flexion of the elbow and the rotation of the forearm. Incorporating a variety of exercises that challenge the biceps from different angles can help maximize growth and strength. Common biceps exercises include bicep curls, hammer curls, and chin-ups.

Bicep curls are a staple in any biceps workout routine. They can be performed using dumbbells, barbells, or resistance bands. When doing bicep curls, it's important to keep your elbows close to your torso and avoid swinging your arms to ensure you're fully engaging the biceps..</h3>
          <h1>Youtubers you want to know...!</h1>
 <h3>
<Icon.Youtube className='youtube icoon' style={youtubecolor}/>
<br />
<h2>Tamil Youtubers</h2>
<div className='youtubers'>
 
 <a href="https://www.youtube.com/watch?v=17WEFXKOljA&t=34s"> <Icon.Youtube className='youtuber' style={Youtubers} /> <p>Tharun Kumar</p></a> 
 <a href="https://youtu.be/y9oXLbf5wTI?si=1ihC8OF9rutXGqDx"> <Icon.Youtube className='youtuber'  style={Youtubers}   /> <p>Biglee Tamil</p></a>  <p>©</p>
<a href="https://youtu.be/h0BEv8ZlYQU?si=sWl_ILlfggSj6r1w"><Icon.Youtube className='youtuber' style={Youtubers} /> <p>1morep</p></a> 
 <a href="https://youtube.com/shorts/vzWsZtbhljU?si=YnBBG5-qryKCNv93"><Icon.Youtube className='youtuber' style={Youtubers} /> <p>Santhosh prem</p></a> 
</div>

 </h3>
<div className='chestcontainer'>
{chestelements}

</div>

          </div>
    </div>
  )
}

export default Arms
