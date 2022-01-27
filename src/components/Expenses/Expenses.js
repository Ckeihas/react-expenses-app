import React,{useState} from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {

  const [filter, setFilter] = useState("2022");
  const filterHandler = (selectedYear) => {
    setFilter(selectedYear);
  };

    const filteredYear = props.item.filter(f => {
      return f.date.getFullYear().toString() === filter;
    });
    return(
    <div>
     <Card className="expenses">

       <ExpenseFilter selected={filter} onChangeFilter={filterHandler}/>
      <h2>Lets go</h2>
      
      {filteredYear.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}

    </Card>
    </div>
    )
};

export default Expenses;