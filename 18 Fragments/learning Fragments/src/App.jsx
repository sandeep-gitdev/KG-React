


import './App.css'
import ErrorMsg from './components/ErrorMsg';
import FootItems from './components/FoodItems';

function App() {
   
   //   let foodItems = [];
   let foodItems = ["paneer","Green vegtable","Roti","Salad","Milk",]


    //      if else operator rendering

    // if (foodItems.length === 0) {
    //     return <h3>I am still hungry.</h3>
    // }



   
  return (
       <>
              {/* map method  */}
      {/* <h1>Healthy Food</h1>
        <ul className="list-group">
            {foodItems.map((item) => ( 
              <li key={item} className="list-group-item">{item} </li>
            ))}
        </ul> */}

          {/* Conditional Rendering */}
               
          {/* <h1>Healthy Food</h1>
               {/* tenary operator */}
          {/* {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}
        <ul className="list-group">
            {foodItems.map((item) => ( 
              <li key={item} className="list-group-item">{item} </li>
            ))}
        </ul> */} 
                  
              
            {/* <h1>Healthy Food</h1>
               {/* Logical operator */}
          {/* {foodItems.length === 0 && <h3>I am still hungry.</h3>}
        <ul className="list-group">
              {foodItems.map((item) => ( 
              <li key={item} className="list-group-item">{item} </li>
            ))}
        </ul>  */}
         
                 {/* Props */}
               <h1 className='food-heading'>Healthy Food</h1>
          <ErrorMsg items={foodItems} ></ErrorMsg>
          <FootItems items={foodItems} ></FootItems>
    </>
  );
}

export default App;
