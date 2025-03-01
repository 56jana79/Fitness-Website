import React, { useState , useEffect } from 'react';



const Food = () => {

var [contains , setcontains] = useState([]);
var [notcontain , setnotcontains] = useState('')
var [isfood ,setfood] = useState()


useEffect(()=>{
  document.getElementById('userbtn').addEventListener('click',()=>{
    var element = document.getElementById('userinput').value ;
    if(element){
      contains(element)
     setfood(true)
    } else{
      setfood(false)
      setnotcontains("please enter the food name")
    }
  })
  
  function contains(element){

    const apiurl =`https://api.edamam.com/api/food-database/v2/parser?ingr=${element}&app_id=155a5345&app_key=485ea0358c8efe6de70541560fe0f44e`
    fetch(apiurl)
    .then(response => response.json())
    .then(data => {
      if(data.hints && data.hints.length > 0 ){
        displayresult(data.hints.slice(0, 6))
      }
      else{
        setnotcontains('There is no element is there')
      }
    })
    .catch(error =>{
      console.error('there is an error accured')
    })
  }

  function displayresult(food){
    
    setcontains(food);
  }

},[])

var a= contains.map((item,index)=>
  (<div key={index} className='output'>
    <p> <h3>LABEL:</h3> {item.food.label}</p>
    <p> <h3>CATEGORY:</h3> {item.food.category}</p>
    <p> <h3>CATEGORY LABEL:</h3> {item.food.categoryLabel}</p>
    <p> <h3>CALORIES:</h3>{item.food.nutrients.ENERC_KCAL ? item.food.nutrients.ENERC_KCAL + ' kcal' : 'N/A'}</p>
    <p> <h3>PROTEIN:</h3>{item.food.nutrients.PROCNT ? item.food.nutrients.PROCNT + ' g' : 'N/A'}</p>
    <p> <h3>FAT:</h3>{item.food.nutrients.FAT ? item.food.nutrients.FAT + ' g' : 'N/A'}</p>
    <p> <h3>CARBS:</h3>{item.food.nutrients.CHOCDF ? item.food.nutrients.CHOCDF + ' g' : 'N/A'}</p>
    
  </div>)
  )  

  var b= <h1>{notcontain}</h1>

  return (
   
    <div className='itemcontainer'>
     <h1>Food And Nutriction</h1> 
     <input type="text" id='userinput' className='foodinput' />

     <button className='btn' id='userbtn'>click</button>
  <div className='result'>


  {/* {contains.map((item,index)=>
  (<div key={index} className='output'>
    <p> <h3>LABEL:</h3> {item.food.label}</p>
    <p> <h3>CATEGORY:</h3> {item.food.category}</p>
    <p> <h3>CATEGORY LABEL:</h3> {item.food.categoryLabel}</p>
    <p> <h3>CALORIES:</h3>{item.food.nutrients.ENERC_KCAL ? item.food.nutrients.ENERC_KCAL + ' kcal' : 'N/A'}</p>
    <p> <h3>PROTEIN:</h3>{item.food.nutrients.PROCNT ? item.food.nutrients.PROCNT + ' g' : 'N/A'}</p>
    <p> <h3>FAT:</h3>{item.food.nutrients.FAT ? item.food.nutrients.FAT + ' g' : 'N/A'}</p>
    <p> <h3>CARBS:</h3>{item.food.nutrients.CHOCDF ? item.food.nutrients.CHOCDF + ' g' : 'N/A'}</p>
    
  </div>)
  )  }  */}
{isfood ? a: b }
  

  </div>
 

    </div>

  );
};

export default Food;
