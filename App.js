
 import ReactDOM from "react-dom/client"

 const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
 }

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


 const resList = [
  {
    type: "restaurant",
    data: {
      name: "Meghana Foods",
      cuisine: ["Biriyani", "North-Indian", "Asian"],
      price: 40000,
      rating: "4.4*",
      time: "38 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5b33aad1677c59245cc68cb40bddacf6"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Empire Restaurant",
      cuisine: ["North-Indian", "Kebab", "Chinese"],
      price: 35000,
      rating: "4.2*",
      time: "30 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/clmsbrf7hlmvkxovqorp"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Truffles",
      cuisine: ["Continental", "American", "Desserts"],
      price: 45000,
      rating: "4.5*",
      time: "25 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/1/28/965888b6-22aa-466e-b966-f132413d39cb_a3fd877d-298c-4ce9-b619-62a7980333fc.jpg"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "A2B - Adyar Ananda Bhavan",
      cuisine: ["South Indian", "Sweets", "Snacks"],
      price: 30000,
      rating: "4.0*",
      time: "35 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/13/9bbba2aa-553f-4e53-80b8-401eeff3099c_01c568ae-222d-4a66-8712-feb582a03f3d.JPG"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "KFC",
      cuisine: ["Fast Food", "Fried Chicken", "Burgers"],
      price: 50000,
      rating: "4.1*",
      time: "28 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/30/84764d4b-652c-4b2d-91c6-ee65477a75f6_92fc3cb6-9016-462a-9255-09e29091d389.jpg"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Domino's Pizza",
      cuisine: ["Italian", "Pizzas", "Fast Food"],
      price: 40000,
      rating: "4.3*",
      time: "32 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/9/12/46af3931-59ad-400c-a607-1049cdad7985_ee8a7af2-b358-4329-becc-ee7998727fc4.jpg_compressed"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "McDonald's",
      cuisine: ["Burgers", "American", "Desserts"],
      price: 37000,
      rating: "4.2*",
      time: "29 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xoyegxqmuhjnjykxg4jn"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Andhra Gunpowder",
      cuisine: ["Andhra", "Biryani", "South Indian"],
      price: 42000,
      rating: "4.6*",
      time: "27 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/11/d3d7d21c-01a7-4c93-9392-ea861db82887_0e332a62-b2c6-4ed8-89ad-78365711ebe6.JPG"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Chickpet Donne Biryani",
      cuisine: ["Biryani", "Karnataka"],
      price: 38000,
      rating: "4.3*",
      time: "26 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/4/18/b3e4fe45-e59a-4e65-b959-7b7ba8a356a5_ee71af59-e335-4b0c-a4bd-78640f3504ee.jpg_compressed"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Samosa Party",
      cuisine: ["Street Food", "Snacks"],
      price: 20000,
      rating: "4.1*",
      time: "22 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/29/441e95bd-cd5d-44f3-ac00-d70736177d57_1071791.jpg"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Chai Point",
      cuisine: ["Tea", "Snacks", "Fast Food"],
      price: 15000,
      rating: "4.0*",
      time: "20 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/13/6c49270c-4acd-4384-b203-611f0c027928_8142b786-832b-4081-8b96-3382f7e38dc6.jpeg"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Paradise Biryani",
      cuisine: ["Biryani", "North Indian", "Mughlai"],
      price: 43000,
      rating: "4.3*",
      time: "34 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x9io7gors6ofint0hbbw"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Beijing Bites",
      cuisine: ["Chinese", "Asian", "Thai"],
      price: 37000,
      rating: "4.2*",
      time: "31 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x9io7gors6ofint0hbbw"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Nandhini Deluxe",
      cuisine: ["Andhra", "Biryani", "Indian"],
      price: 39000,
      rating: "4.1*",
      time: "29 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/28/a713a917-616e-4ac6-982c-70597ea97f9c_14f96786-5bef-4ee4-89ef-8befc294d958.jpg"
    }
  },
  {
    type: "restaurant",
    data: {
      name: "Sattvam",
      cuisine: ["Pure Veg", "North Indian", "Healthy Food"],
      price: 47000,
      rating: "4.5*",
      time: "33 mins",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2c10147521a2a8621a77faf2647be7b2"
    }
  }
];


 const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       {
        resList.map((restaurant)=><RestaurantCard key={restaurant.data.name} resData={restaurant}/>)
       }
      </div>
    </div>
  )
 }

const AppLayout=()=>{
  return(
    <div className='app'>
   <Header/>
   <Body/>
    </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>);


