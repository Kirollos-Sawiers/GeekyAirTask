import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import usersData from "./Users/usersData";
import userPosts from "./userPosts/userPosts";
import Header from "./header/header";

function App() {

  return <>
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={usersData} />
          <Route path="/userPosts/:id" exact component={userPosts} />
        </Switch>
    </Router>
  </>;
}

export default App;
