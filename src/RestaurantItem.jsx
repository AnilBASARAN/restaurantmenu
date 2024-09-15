const RestaurantItem =(props)=>{
    const {restaurant} = props;
  
    return(
  
  <div className=" bg-white shadow-md m-5 pt-4 px-3 pb-2 relative ">
  
    {restaurant.promotion && <div className="cupon bg-rose-400 absolute top-4 left-4 text-sm px-2 rounded-br-full" >Promotion</div>}
  
    
          <img src={restaurant.image} alt="" className="w-[220px] h-[200px] object-cover" />
    <div>
    <div className=" text-stone-600 text-xl">{restaurant.name}</div>
      <div className="flex justify-between">
  
    <div className=" text-stone-400"><i class="fa-solid fa-location-dot mr-1 "></i>{restaurant.location}</div>
    <div className="text-rose-400">{restaurant.rating} <i class="fa-solid fa-star"></i></div>
        
      </div>
    <div>{restaurant.promotion}</div>
    
    <div className="font-bold">{"$".repeat(restaurant.cost)}</div>
    </div>
  </div>
      
      
    );
  };
  
  export default RestaurantItem;