
import React,{ useState } from 'react';
function Bmi(){

    var [weight,setweight] = useState(0);
    var [height,setheight] = useState(0);
    var [bmi,setbmi] = useState('');
    var [message,setmessage] = useState('');

   

let calcbmi = (event)=>{

    event.preventDefault()
    if(weight ===0 || height===0){
        alert('please enter a vlid input')
    }else{
        let bmi=(weight / (height * height) *703)
        setbmi(bmi.toFixed(1))

        if(bmi<25){
            setmessage("you need to gain weight 🏋️‍♀️")
        }
        else if(bmi>= 25 && bmi<31){
            setmessage('you weight is good 🏋️‍♀️')
        }
        else{
            setmessage('You need to lose weight 🏋️‍♀️')
        }
    }
}

 let imgsrc;
 if(bmi<1){
    imgsrc = null
 }else{
    if(bmi<25){
        imgsrc= './src/assets/dhanush.jpg'
    }else if(bmi >=25 && bmi <30){
        imgsrc = './src/assets/vikram.jpg'
    }else{
        imgsrc='./src/assets/yogi.jpg'
    }
 }

let reload =()=>{
    window.location.reload()
}

    return(
        <div className="bmicontainer">
<div className="bmicontainer2">

    <h2 className="center">BMI CALCULATOR</h2>
    <form onSubmit={calcbmi}>
        <div className='bmicontainer3'>
   <label htmlFor="">Weight (lbs):</label>
<input type="text" className='bmiinput' value={weight} onChange={(event)  => setweight(event.target.value)} />
        </div>
        <div className='bmicontainer3'>
   <label htmlFor="">Height (inches):</label>
<input type="text" className='bmiinput' value={height}  onChange={(event)  => setheight(event.target.value)} />
        </div>
        <div className='bmibtn'>
            <button className="bmibtn" type="submit">Submit</button>
            <button className="bmibtn"  onClick={reload} type="Reload">Reload</button>
        </div>
    </form>

    <div className="center">
<h3>YOUR BMI IS:{bmi}</h3>
<h2>{message}</h2>
{/* <div className="srccontainer"> */}
{imgsrc && <img src={imgsrc} className="bmiimage" alt="BMI result"/>}
{/* </div> */}
    </div>


</div>
        
        </div>
    )
}
export default Bmi;