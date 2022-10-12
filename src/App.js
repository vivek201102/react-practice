// import { useState } from 'react';
import './App.css';
// import Car from './Components/Class-Components/Life-Cycle/Car.js';
// import Car from './Components/Class-Components/Props/Car.js';
// import Car from './Components/Function-Components/car.js'
import Form from './Components/Function-Components/form.js';

function App() {
  // const [carInfo, setCarInfo] = useState({ "name": "Seltos", "brand": "kia" });

  /*
  const changeInfo = () => {
    setCarInfo(previousState => {
      return { ...previousState, "brand": "KIA" };
    })
  }
  */

  // {cars.map((car) => <Car model={car.name} key={car.id} />)}
  // const cars = [{ id: 1, name: "Volvo" }, { id: 2, name: "Jaguar" }, { id: 3, name: "MG Hector" }];

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
