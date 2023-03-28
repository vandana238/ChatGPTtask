import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Columns from "./component/Columns";
import Bars from "./component/Bars";
import Pies from "./component/Pies";
import Linegraphs from "./component/Linegraphs";

const App = () => {
  const [user, setuser] = useState();
  const [que, setque] = useState();
  const [text, setText] = useState();
  const [ans, setans] = useState();
  const send = () => {
    const article = { title: user };
    axios.post(`http://localhost:8030/getdata`, article).then((response) => {
      setque(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    console.log(que);
  }, [que, ans]);

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([que], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.js";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <h1>Get Your Code From ChatGPT</h1>
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
          <button onClick={send}>ANSWER</button>
        </h1>
      </div>
      <div>
        {que !== undefined ? <div>{que}</div> : <div> not defined </div>}
      </div>
      <h1>Download The File</h1>
      <div>
      <button onClick={downloadTxtFile}>Download</button>
      </div>

      <h3>click here to get the pie chart</h3>
      <div>
      <button onClick={()=>{setans("pie")}}> PIE CHART</button>
      { ans==="pie"?<>  <Pies /></>:<></>}
      </div>
      <h3>click here to get bar graph</h3>
      <div>
      <button onClick={()=>{setans("chart")}}> BAR GRAPH</button>
      { ans==="chart"?<>  <Bars /></>:<></>}
      </div>
      <h3>click here to get line graph</h3>
      <div>
      <button onClick={()=>{setans("line") }}> LINE GRAPH</button>
      {ans==="line"?<>   <Linegraphs /></>:<></>}
      </div>
      <h3>click here to get columns grpah</h3>
      <div>
      <button onClick={()=>{setans("col")}}> COLUMNS GRAPH</button>
      {ans==="col"?<>      <Columns /></>:<></>}
      </div>
      
  
  
   
      
    </div>
  );
};

export default App;
