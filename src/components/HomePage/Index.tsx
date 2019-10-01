import React from 'react';
import Header from "../Header/index"


export default class HomePage extends React.Component<any, any> {
    render() {
        
      return (
      <div style= {{height: "100vh"}}>
          <Header content="Home Page"/>
      </div>
      )
    }
  }