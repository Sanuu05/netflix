import React from "react";
import { Route, Switch } from "react-router-dom";
import Banner from "./Banner";
import List from "./List";
import Navbar from "./Navbar";
import Trailer from "./Trailer";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Banner/>
          <List listtype="top_rated" title="Top Rated" />
          <List listtype="now_playing" title="Latest" />
          <List listtype="upcoming" title="Upcoming Movies" />
          <List listtype="popular" title="Popular Movies" />

        </Route>
        <Route path="/trailer/:mid">
          
          <Navbar />
          <Trailer />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
