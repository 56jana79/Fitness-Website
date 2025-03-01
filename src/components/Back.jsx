import React from 'react'
import * as Icon from 'react-bootstrap-icons'


const Back = (props) => {
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
    
    
      const Backitems = props.item;
      const Backements = Backitems.map((item, index) => 
          <div key={index} className='chestcontainer1' >{item}</div>
      );

  return (
    <div>
       <div className='chest'>
      <div>
      <h3>An effective back workout involves a combination of compound and isolation exercises to target all major muscles in the back, promoting balanced strength and muscle development. Deadlifts are a foundational lift that engage the entire back, including the lower back, traps, and lats, enhancing overall power and stability. Pull-ups and lat pulldowns are crucial for building the lats and upper back, improving both width and definition.</h3>
          <h1>Youtubers you want to know...!</h1>
 <h3>
<Icon.Youtube className='youtube icoon' style={youtubecolor}/>
<br />
<h2>Tamil Youtubers</h2>
<div className='youtubers'>
 
 <a href="https://youtu.be/ppeeBffnk5g?si=lqHSXm8IcIaDdzDh"> <Icon.Youtube className='youtuber' style={Youtubers} /> <p>Tharun Kumar</p></a> 
 <a href="https://youtu.be/EupGh3ulYvk?si=j65p8IftXOOSpnZG"> <Icon.Youtube className='youtuber'  style={Youtubers}   /> <p>Biglee Tamil</p></a>  <p>©</p>
<a href="https://youtu.be/FHCoyighmKE?si=jvmh_Wc8tCEL4-dM"><Icon.Youtube className='youtuber' style={Youtubers} /> <p>1morep</p></a> 
 <a href="https://youtu.be/DXL18E7QRbk?si=5p7tPc29e_IoWIaN"><Icon.Youtube className='youtuber' style={Youtubers} /> <p>jeff Nippard</p></a> 
</div>

 </h3>
<div className='chestcontainer'>
{Backements}

</div>

          </div>
    </div>


    </div>
  )
}

export default Back
