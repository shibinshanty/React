import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";
import { useState } from "react";

const Body=()=>{

 const [ListOfRestaurant,setListOfRestaurant]=useState(resList)



  return(
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{ 
        const filteresList=ListOfRestaurant.filter(
          (restaurant)=>restaurant.data.rating>4)
          console.log(filteresList)
          setListOfRestaurant(filteresList)
          }}>Top Rated Restaurants</button>  
      </div>
      <div className="res-container">
       {
         ListOfRestaurant.map((restaurant)=><RestaurantCard key={restaurant.data.name} resData={restaurant}/>)
       }
      </div>
    </div>
  )
 }
 export default Body;