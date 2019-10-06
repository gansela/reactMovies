import React from 'react';
import Header from "../Header/index"
import store from "../../redux/store"


export default class HomePage extends React.Component<any, any> {
    render() {
      console.log(store.getState())
      return (
      <div style= {{height: "100vh"}}>
          <Header content="Home Page"/>
      </div>
      )
    }
  }