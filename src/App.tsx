import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import HomePage from "./components/HomePage/Index"
import MoviesPage from "./components/MoviesPage/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux"
import store from "./redux/store"
import Movie from "./components/Movie"
import Comments from "./components/Comments/index"
import Favorites from "./components/Favorites/index"




class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props)
    this.state = {
    }
  }


  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        <Router>
          <div>
            <nav style={{ backgroundColor: "red", padding: "20px" }}>
              <Link to="/" style={{ margin: "10px" }}><Button variant="contained" >Home</Button></Link>
              <Link to="/movies"><Button variant="contained" >Movies</Button></Link>
              <Link to="/comments" style={{ margin: "10px" }}><Button variant="contained" >Comments</Button></Link>
              <Link to="/favorites"><Button variant="contained" >favorites</Button></Link>
            </nav>
            <Container maxWidth="md" style={{ backgroundColor: "lightblue", padding: "0px" }}>
              <Switch>
                <Route path="/movies" component={MoviesPage} />
                <Route path="/comments" component={Comments} />
                <Route path="/movie/:code" component={Movie} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/" component={HomePage} />
                <Route path="**" component={() => <h1> Not Found! </h1>} />
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider>

    );
  }
}




export default App;
