import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Columns from "./component/Columns";
import Bars from "./component/Bars";
import Linegraphs from "./component/Linegraphs";
import Groupcol from "./component/Groupcol";
import Question3 from "./component/Question3";
import { Bar } from 'react-chartjs-2';

import Graph from "./component/Graph";


const App = () => {
  const [user, setuser] = useState();
  const [que, setque] = useState();
  const [ans, setans] = useState();

  const send = () => {
    console.log("clicked")
    const question = { title: user };
    console.log(question)
    axios.post(`https://insights-portal.azurewebsites.net/postitems`, question).then((response) => {
      setque(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {




  }, [user])



  return (

    <div>
      <h1>Generate A GRAPH</h1>
      <div>
        <h1>
          <input
            className="text"
            placeholder="Enter your Question Here"
            value={user}
            onChange={(e) => {
              setuser(e.target.value);
            }}
          ></input>
          <button onClick={() => {
            send()
          }}>ANSWER</button>
        </h1>
      </div>

      {/* {  que !== undefined ? <div> <Graph response={que} /></div>  : <></>   } */}
      {  que !== undefined ? <div> <Bars response={que} /></div>  : <></>   }
      


    </div>

  );
};

export default App;
