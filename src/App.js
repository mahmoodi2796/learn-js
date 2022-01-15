import "./App.css";
import React, { useState } from "react";

let rows = [
  {
    name: "dsfs",
    value: "1",
  },
  {
    name: "sdf",
    value: "3",
  },
  {
    name: "sdfsdf",
    value: "4",
  },
  {
    name: "sdf",
    value: "5",
  },
];

function App() {
  const [rows, setRows] = useState([
    {
      name: "dsfs",
      value: "mahdi",
    },
    {
      name: "sdf",
      value: "ali",
    },
    {
      name: "sdfsdf",
      value: "sdfsdf",
    },
    {
      name: "sdf",
      value: "dfds",
    },
  ]);
  let testpop = ["apple", "orange", "banana"];
  let mahdi = ["ali", "hasan", "hossein", 2];
  const handlePop = () => {
    console.log(testpop.pop());
    console.log(testpop);
  };
  const handlepush = () => {
    mahdi.push(testpop.pop());
    console.log(mahdi);
  };
  const handlepull = () => {
    console.log(mahdi.toString());
  };

  const handleshift = () => {
    mahdi.shift();
    console.log(mahdi);
  };
  let handleslice = () => {
    let newslice = mahdi.slice(1);
    console.log(newslice);
  };
  let handlerevers = () => {
    let revers = mahdi.reverse();
    console.log(revers);
  };
  let handlejoin = () => {
    let revers2 = mahdi.reverse();
    let join = mahdi.join();
    console.log(revers2, join);
  };
  let handlefind = () => {
    let find = mahdi.find((element) => element == 2);
    console.log(find);
  };
  return (
    <div className="App">
      <div className="box-rows">
        {rows.map((row, index) => (
          <div key={index} className="mamad">
            <div className="">{row.name}</div>
            <div className="">{row.value}</div>
            <button
              className="plus"
              onClick={() => {
                setRows(rows.filter((item) => item == rows[index]));
              }}
            >
              +
            </button>
          </div>
        ))}
      </div>
      <button onClick={handlePop}>pop</button>
      <button onClick={handlepush}>push</button>
      <button onClick={handlepull}>pull</button>
      <button onClick={handleshift}>shift</button>
      <button onClick={handleslice}>slice</button>
      <button onClick={handlerevers}>revers</button>
      <button onClick={handlejoin}>join</button>
      <button onClick={handlefind}>find</button>
    </div>
  );
}
export default App;
function generatChart(rows) {
  let newGargh = rows.map((gragh) => ({
    label: gragh.name,
    value: gragh.value,
  }));
  return newGargh;
}
function generatChartone(rows) {
  let newGargh = rows.map((item) => item.value * 100);
  return newGargh;
}
