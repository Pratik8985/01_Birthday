import React,{useState} from "react";
import List from "./List";
import data from "./data";
const App = () => {
  const [people, setPeople]=useState(data)

  const onChangeHandler =()=>
  {
    setPeople([])
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={onChangeHandler}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
