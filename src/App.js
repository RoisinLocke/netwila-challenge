import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useParams,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

const MainPage = (props) => {
  let { id } = useParams();
  return (
    <div>
      <Main props={id} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/5e9deac67d3cb9a0a9d208ae" />;
            }}
          />
          <Route path="/:id" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
