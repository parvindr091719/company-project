import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState([]);
  const [num, setNum] = useState();
  const [data, setData] = useState([]);

  const getData = async () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.data);
      });
  };

  const inPut = (event) => {
    const input_Data = +event.target.value;
    setNum(input_Data);
  };

  const handleSubmit = () => {
    const arr = url
      .filter((obj) => obj.id === num)
      .map((obj) => {
        return (
          <div key={obj.id} className="user-details">
            <p>
              <span>{obj.first_name}</span> <span>{obj.last_name}</span>
            </p>
            <img src={obj.avatar} alt="avatar" />
            <p>{obj.email}</p>
          </div>
        );
      });
    setData(arr);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="list-users">
        <h3 id="greet-users">Fetch API Data</h3>
        <div>
          <input type="text" value={num} onChange={inPut} />
          <br /> <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div id="users">{data}</div>
      </div>
    </>
  );
};
export default App;

