import React from 'react';
import logo from './logo.svg';
import './App.css';

type Animal = {
  animal: string,
  description: string,
}

function examples () {
  fetch("https://get")
    .then(response => response.json())
    .then((json: Animal) => console.log(json))
    .catch(e => console.error(e));

  fetch("https://post", {
    method: "POST",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json())
    .then((json: Animal) => console.log(json))
    .catch(e => console.error(e));

  fetch("http://delete/1", { method: "DELETE" })
    .then(response => response.json())
    .then((json: Animal) => console.log(json))
    .catch(e => console.error(e));

  fetch("http://put/1", {
    method: "PUT",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json())
    .then((json: Animal) => console.log(json))
    .catch(e => console.error(e));
}

function fetchExample () {
  fetch("https://eoq2vuf7lltn3qi.m.pipedream.net/8")
    .then(response => {
      if (response.status !== 200) {
        throw response.status;
      }

      return response.json();
    })
    .then((json: Animal) => {
      console.log("Data", json);
      return fetch("https://eokz7vcsigzeiih.m.pipedream.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json)
      });
    }).then(response => response.json())
    .then((json) => {
      console.log("POST response", json)
    })
    .catch(e => {
      switch (e) {
        case 404: {
          console.error("Why is this happening someone fix your shit!");
          break;
        }

        case 401: {
          console.error("Nicht eingeloggt!!!!");
          break;
        }

        default: {
          alert("Whoops something went wrong!");
        }
      }
    });

  console.log("Hello");
}


function App() {
  fetchExample();

  return null;
}

export default App;
