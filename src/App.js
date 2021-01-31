import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Navbar from "./Nav";
import Videos from "./Videos";
import requests from "./requests";

function App() {
  const [fetchUrl, setFetchUrl] = useState(requests.fetchTrending);
  return (
    <div className="App">
      {/* Header Component */}
      <Header />
      {/* Navigation Component */}
      <Navbar setFetchUrl={setFetchUrl} />
      {/* Videos */}
      <Videos fetchUrl={fetchUrl} />
    </div>
  );
}

export default App;
