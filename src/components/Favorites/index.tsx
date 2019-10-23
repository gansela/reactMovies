import React from "react"
import Header from "../Header/index"
import { connect } from "react-redux"


class Favorites extends React.Component<any, any>{




    render() {
        if (!this.props.favoritesList) return (<h1>No Favorites Selected</h1>)
        const { favoritesList } = this.props
        console.log( this.props)
        return (
            <div>
                <Header content="Favorites" />
                <ul className="list-group list-group-flush">
        {favoritesList.map((film: any) => {return (<li className="list-group-item">{film.Title}</li>)})}
                </ul>
            </div>

        )
    }
}

const mapToProps = (state: any) => {
    return state
}


export default connect(mapToProps, null)(Favorites)