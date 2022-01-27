import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const theExpenses = [
  {
    id: "e1",
    date: new Date(2022, 1, 8),
    title: "Sijoittaminen",
    amount: "245"
  },
  {
    id: "e2",
    date: new Date(2022, 7, 1),
    title: "Loma",
    amount: "500"
  },
  {
    id:"e3",
    date: new Date(2022, 4, 5),
    title: "Auto",
    amount: "100"
  },
  {
    id: "e4",
    date: new Date (2022, 7, 6),
    title: "Ruoka",
    amount: "400"
  }
]

const App = (props) => {
  
  const[expenses, setExpenses] = useState(theExpenses)
  const addExpenseData = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseData}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
