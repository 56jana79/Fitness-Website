import React from 'react'
import * as Icon from 'react-bootstrap-icons'

const Leg = (props) => {

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
    
    
      const Legitems = props.item;
      const Legements = Legitems.map((item, index) => 
          <div key={index} className='chestcontainer1' >{item}</div>
      );
  return (
    <div>
       <div className='chest'>
      <div>
      <h3>An effective leg workout combines compound and isolation exercises to target all major muscle groups in the lower body. Squats are a foundational movement that engage the quadriceps, hamstrings, glutes, and core, providing overall strength and power. Deadlifts focus on the hamstrings and glutes while also enhancing core stability. Lunges improve balance and coordination by targeting the quadriceps, hamstrings, and glutes through a dynamic movement.</h3>
          <h1>Youtubers you want to know...!</h1>
 <h3>
<Icon.Youtube className='youtube icoon' style={youtubecolor}/>
<br />
<h2>Tamil Youtubers</h2>
<div className='youtubers'>
 
 <a href="https://youtu.be/H6mRkx1x77k?si=BfRRi0169uVxA2sn"> <Icon.Youtube className='youtuber' style={Youtubers} /> <p>Jeff Nippard</p></a> 
 <a href="https://youtu.be/Ndkrh2k79mg?si=JbED2QCgWwlzPTzS"> <Icon.Youtube className='youtuber'  style={Youtubers}   /> <p>Biglee Tamil</p></a>  <p>©</p>
<a href="https://youtu.be/MgEvWpRBdNQ?si=NC3raw71cFs5Gy-r"><Icon.Youtube className='youtuber' style={Youtubers} /> <p>1morep</p></a> 
 <a href="https://youtu.be/3upx6bSFTSE?si=BJVT5yCiWrtWa8fJ"><Icon.Youtube className='youtuber' style={Youtubers} /> <p>Obi Vincent</p></a> 
</div>

 </h3>
<div className='chestcontainer'>
{Legements}

</div>

          </div>
    </div>


    </div>
  )
}

export default Leg
