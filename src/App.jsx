import React, { useEffect, useState } from "react";
import { fromEvent, of } from "rxjs";
import { debounceTime, map, switchMap, catchError } from "rxjs/operators";

// Mock API fetch function
const fetchResults = (query) => {
  console.log("Fetching for:", query);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([query + " 1", query + " 2", query + " 3"]);
    }, 500);
  });
};

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const input = document.getElementById("search");

    const subscription = fromEvent(input, "input")
      .pipe(
        map((event) => event.target.value),
        debounceTime(300),
        switchMap((query) =>
          query ? fetchResults(query).then(res => res) : of([])
        ),
        catchError((err) => {
          console.error(err);
          return of([]);
        })
      )
      .subscribe((res) => setResults(res));

    return () => subscription.unsubscribe();
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
    </div>
  );
}

export default App;
