import React, { useContext, useEffect, useState } from "react";
import { fromEvent, of } from "rxjs";
import { debounceTime, map, switchMap, catchError, take } from "rxjs/operators";
import { AuthContext } from "./AuthProvider";

// Mock API fetch function



const fetchResults = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!query) {
        reject("Query is empty");
      } else {
        resolve([query + " 1", query + " 2", query + " 3"]);
      }
    }, 500);
  });
};


function App() {
  (function () {
  console.log("IIFE executed");
})();
setInterval(() => {
  console.log("Hi");
}, 100000);
const{user,setUser }= useContext(AuthContext);
  const[value, setValue] = useState(0);
  //create a state to hold search results
  const [results, setResults] = useState([]);


  useEffect(() => {
    const input = document.getElementById("search");

    const subscription = fromEvent(input, "input")
      .pipe(
        map((event) => event.target.value),
        debounceTime(300),
        switchMap((query) =>
          query ? fetchResults(query): of([])
        ),
        catchError((err) => {
          console.error(err);
          return of([]);
        }),
          take(1) 
      )
      .subscribe((res) => setResults(res));

  console.log("Start");
Promise.resolve({
  f:console.log("A")
}).then(() => {
  console.log("B");
});

// Microtask (Promise)
Promise.resolve().then(() => {
  console.log("Microtask: Promise.then()1");
  setTimeout(() => {
  console.log("Macrotask in MicroTask: setTimeout()");
}, 0);
 console.log("Microtask: Promise.then()2");
});

// Macrotask (setTimeout)
setTimeout(() => {
  console.log("Macrotask: setTimeout()");
}, 0);

// Another Promise (manual creation)
// eslint-disable-next-line no-unused-vars
const p = new Promise((resolve) => {
  console.log("Promise executor runs immediately (sync)");
  resolve("Done");
}
).then(msg => {
  console.log("Microtask: Promise.then() from new Promise →", msg);
});

console.log("End");


    return () => {subscription.unsubscribe()

                   remove

    };
  }, []);


  return (
    <div style={{ padding: "2rem" }}>
      <h2>RxJS Live Search Example</h2>
      <input id="search" placeholder="Type to search..." />
      <ul>
        {results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
  
      <h2 >From state{value}  
      <button onClick={() => setValue(value + 1)}>Increment</button>
         <button onClick={() => setUser(user + 1)}>Increment</button>
        {user} </h2>
    </div>
  );
}

export default App;
