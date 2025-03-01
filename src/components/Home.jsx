import React from 'react'
import Parts from './parts'
// import img1 from './assets/by1.png'


const Home = () => {
  
  const items = 
  [ <div key="1">  <a href="Byprops">  <img src='./src/assets/by1.png' alt="biceps imge" className='homeimg' />  <h1>Biceps</h1> <p>Biceps is a powerful muscle</p></a> </div> , 
    <div key="2">   <a href="Back"> <img src='./src/assets/lat muscle.jpg'  className='homeimg' alt="biceps imge" />      <h1>Back / Lat</h1> <p>Lat is a protective muscle</p> </a></div>,
    <div key="3">  <a href="Biceps"> <img src='./src/assets/chest img.jpg'  className='homeimg'  alt="biceps imge" />   <h1>Chest</h1> <p>Chest is an upper muscle</p>  </a>  </div>, 
    <div key="4">  <a href="Leg"> <img src='./src/assets/leg image.jpg'  className='homeimg'  alt="biceps imge" />   <h1>Leg</h1> <p>Leg is a lower muscle</p>  </a></div>
  ]

  return (
    <div>
      <div className='itemcontainer'>
 <Parts item={items} />
 



      </div>

    </div>
  )
}

export default Home
