import React from 'react'
import Chest from './Arms'
import Arms from './Arms'

const Biceps = () => {

var chestsitems = [
 <div key="1" className='chest'>
 <img src="./src/assets/PerfectPushup.gif" alt="" />
  <h1>Push 📈</h1>
<ul  className='ullist' >
<p>1️⃣ Push up is a most common workout for the chest muscle in world wide</p>
<p> 2️⃣ Push-ups are a fundamental bodyweight exercise that helps build upper body strength, focusing on the chest, shoulders, and triceps</p>
<p>3️⃣ For beginners, it's essential to maintain proper form by keeping the body in a straight line and engaging the core.</p>

</ul>

 </div>,

 <div key="2" className='chest'>
 <img src="./src/assets/barbell press.gif" alt="" />
 <h1>Barbell press </h1>
<ul  className='ullist'>
<p>1️⃣ The barbell press, particularly the bench press, is a fundamental compound exercise that targets the chest, shoulders, and triceps.</p>
<p> 2️⃣ This includes keeping your feet flat on the ground, lowering the bar to your mid-chest, and avoiding arching your back excessively.</p>
<p>3️⃣ There are several variations of the barbell press, such as the incline, decline, and close-grip bench press, each emphasizing different muscles.</p>

</ul>
 </div>,
 <div key="3" className='chest'>
 <img src="./src/assets/machine fly.gif" alt="" />
 <h1>Machine 🪽 </h1>
<ul  className='ullist'>
<p>1️⃣ The machine fly exercise isolates the chest muscles by allowing controlled, stable movements, making it ideal for targeted muscle activation.</p>
<p> 2️⃣ It's performed by sitting on a machine with arms extended out to the sides, then bringing them together in front of the chest.</p>
<p>3️⃣ This exercise helps improve muscle definition and strength without putting excessive strain on the shoulders.</p>

</ul>
 </div>

]



  return (
   <>
  
   <Arms  item={chestsitems} />
   
   </>
  )
}

export default Biceps
