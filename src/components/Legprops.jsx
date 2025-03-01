import React from 'react'
import Leg from './Leg'
const Legprops = () => {
    var image={
        with:"500px",
        height:"500px"
    }
    
    var Backitems = [
        <div key="1" className='chest'>
        <img src="./src/assets/squarts.gif"  style={image} alt="" />
         <h1>Squarts💪</h1>
       <ul  className='ullist' >
       <p>1️⃣ Squats are a foundational lower body exercise that primarily target the quadriceps, hamstrings, glutes, and core.</p>
       <p> 2️⃣ By lowering your body into a sitting position and then returning to a standing position, you build strength, power, and muscle mass</p>
       <p>3️⃣ improve overall functional fitness, enhance athletic performance, and promote better posture and balance. 💪✨🏋️‍♂️</p>
       
       </ul>
       
        </div>,
       
        <div key="2" className='chest'>
        <img src="./src/assets/lunges.gif" style={image}  alt="" />
        <h1>Lunges 🏋️‍♀️</h1>
       <ul  className='ullist'>
       <p>1️⃣ 
       Lunges are a dynamic lower body exercise that target the quadriceps, hamstrings, glutes, and calves, promoting muscle growth and balance..</p>
       <p> 2️⃣ By stepping forward and lowering the hips, lunges enhance coordination and stability while also improving functional strength</p>
       <p>3️⃣ This versatile movement can be performed with or without weights, making it suitable for various fitness levels. 💪✨🏋️‍♂️</p>
       
       </ul>
        </div>,
        <div key="3" className='chest'>
        <img src="./src/assets/leg extension.gif"  style={image} alt="" />
        <h1>Leg extension 🦿 </h1>
       <ul  className='ullist'>
       <p>1️⃣ Leg extensions are an effective isolation exercise that targets the quadriceps muscles, strengthening and defining the front of the thighs.</p>
       <p> 2️⃣Performed on a leg extension machine, you lift a weighted pad with your shins while seated, fully extending your knees.</p>
       <p>3️⃣This exercise helps improve knee strength and stability, making it a valuable addition to any lower body workout routine. 💪✨🏋️‍♂️</p>
       
       </ul>
        </div>
       
       ]

       return(
 <Leg item={Backitems}/>

       )
}

export default Legprops
