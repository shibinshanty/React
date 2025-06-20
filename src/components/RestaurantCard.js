 const RestaurantCard=(props)=>{
  const{resData}=props;
  const{name,cuisine,price,rating,time,img}=resData?.data;
   
  return(
  <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
    <img className="res-logo" alt="res-logo" src={img}/>
    <h3>{name}</h3>
    <h4>{cuisine.join(",")}</h4>
      <h4>{price/100}</h4>
    <h4>{rating}</h4>
    <h4>{time}</h4>
  </div>
  )
 }

 export default RestaurantCard;