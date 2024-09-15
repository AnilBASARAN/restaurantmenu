
import './App.css';

import RestaurantItem from "./RestaurantItem.jsx";
import restaurants from "./restaurants.jsx"

const App = () => {

  const allRestaurants = restaurants.map((res, index) =>
    <RestaurantItem key={index} restaurant={res} />
  );

  return (
    <div className="m-4 p-4 flex justify-center flex-col items-center bg-stone-100 min-h-screen w-screen">

<div className="flex items-center mb-6 text-4xl font-medium text-stone-700">
          <img alt='Munch Central' src="https://static-task-assets.react-formula.com/996965.png" className="w-16 m-2" />
          New YorkeR
        </div>


      <div className="w-full max-w-4xl flex justify-center items-center flex-wrap">
        {allRestaurants}
      </div>
    </div>
  );
};

export default App;
