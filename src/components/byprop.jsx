import Mainby from "./Mainby"

var image={
    with:"500px",
    height:"500px"
}

function Byprop(){

    var Bycepsitem = [
        <div key="1" className='chest'>
        <img src="./src/assets/Barbell.gif"  style={image} alt="" />
         <h1>Barbell curls 💪</h1>
       <ul  className='ullist' >
       <p>1️⃣  Barbell curls are a fundamental exercise targeting the biceps, involving lifting a barbell with an underhand grip to flex the elbow</p>
       <p> 2️⃣ They help in building strength and muscle mass in the upper arms, promoting overall upper body power</p>
       <p>3️⃣ Performing barbell curls with proper form ensures maximum biceps activation and reduces the risk of injury</p>
       
       </ul>
       
        </div>,
       
        <div key="2" className='chest'>
        <img src="./src/assets/hammer.gif" style={image}  alt="" />
        <h1>Barbell press </h1>
       <ul  className='ullist'>
       <p>1️⃣ 
       Hammer curls are an effective exercise that targets both the biceps and the brachialis muscle, promoting overall arm thickness and strength.</p>
       <p> 2️⃣ By maintaining a neutral grip with palms facing each other, this exercise reduces strain on the wrists and allows for a natural range of motion.</p>
       <p>3️⃣ Hammer curls are a great addition to any arm workout routine for balanced muscle development.</p>
       
       </ul>
        </div>,
        <div key="3" className='chest'>
        <img src="./src/assets/chinup.gif"  style={image} alt="" />
        <h1>chin up ☝️ </h1>
       <ul  className='ullist'>
       <p>1️⃣ Chin-ups are a powerful upper-body exercise that primarily targets the biceps and latissimus dorsi muscles..</p>
       <p> 2️⃣ Using an underhand grip on a bar, you pull your body up until your chin is above the bar, promoting strength and muscle growth</p>
       <p>3️⃣ This compound movement also engages the core and improves overall upper body coordination and stability.</p>
       
       </ul>
        </div>
       
       ]



return(

    <Mainby item={Bycepsitem}/>
)
    
}
export default Byprop