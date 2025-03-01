import React from 'react'
import Back from './Back'

var image={
    with:"500px",
    height:"500px"
}
const Backprop = () => {
    var Backitems = [
        <div key="1" className='chest'>
        <img src="./src/assets/pullup.gif"  style={image} alt="" />
         <h1>Pull up 💪</h1>
       <ul  className='ullist' >
       <p>1️⃣ Pull-ups are a powerful upper-body exercise that primarily target the latissimus dorsi, as well as the biceps and shoulders.</p>
       <p> 2️⃣ By using an overhand grip on a bar and pulling your body up until your chin is above the bar, you can significantly build strength and muscle in the upper body.</p>
       <p>3️⃣ This compound movement also enhances core stability and overall functional fitness. 💪✨🏋️‍♂️</p>
       
       </ul>
       
        </div>,
       
        <div key="2" className='chest'>
        <img src="./src/assets/lat pulldown.gif" style={image}  alt="" />
        <h1>Lat pulldown 🔻</h1>
       <ul  className='ullist'>
       <p>1️⃣ 
       Lat pulldowns are a key exercise for developing the latissimus dorsi muscles, using a cable machine to pull a bar down towards your chest while seated.</p>
       <p> 2️⃣ This movement helps enhance upper body strength and improve back muscle definition.</p>
       <p>3️⃣ Lat pulldowns are an excellent alternative to pull-ups, especially for beginners or those working to build the necessary strength for unassisted pull-ups. 💪✨🏋️‍♂️</p>
       
       </ul>
        </div>,
        <div key="3" className='chest'>
        <img src="./src/assets/seated cable.gif"  style={image} alt="" />
        <h1>Seated cable rows </h1>
       <ul  className='ullist'>
       <p>1️⃣ Seated cable rows are an effective exercise for targeting the middle back, particularly the rhomboids, lats, and trapezius muscles</p>
       <p> 2️⃣Performed by pulling a cable handle towards your torso while keeping a straight back, this exercise enhances upper body strength and muscle definition.</p>
       <p>3️⃣ It's excellent for improving posture and developing a balanced, strong back. 💪✨🏋️‍♂️</p>
       
       </ul>
        </div>
       
       ]



  return (
    <div>
      <Back item={Backitems} />
    </div>
  )
}

export default Backprop
