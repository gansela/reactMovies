import React from "react"
import Header from "../Header/index"
import { connect } from "react-redux"


class Comments extends React.Component<any, any>{




    render() {
        if(!this.props.comments) return (<h1>No Comments</h1>)
        return (
            <div>
                <Header content="Comments" />
            {Object.keys(this.props.comments).map( ( key:string ) =>{
                return( <h3> Film : {key} - Comment: {this.props.comments[key]}</h3>)
            })}
            </div>

        )
    }
}

const mapToProps = (state: any) => {
    return state
}


export default connect(mapToProps, null)(Comments)