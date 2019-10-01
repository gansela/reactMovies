import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import HomePage from "./components/HomePage/Index"
import MoviesPage from "./components/MoviesPage/index"
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <Router>
        <div>
          <nav style={{ backgroundColor: "red", padding: "20px"}}>
            <Link to="/" style={{margin: "10px"}}><Button variant="contained" >Home</Button></Link>
            <Link to="/movies"><Button variant="contained" >Movies</Button></Link>
          </nav>
          <Container maxWidth="md" style={{ backgroundColor: "lightblue", padding: "0px" }}>
            <Switch>
              <Route path="/movies">
                <MoviesPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}




export default App;
