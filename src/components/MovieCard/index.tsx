import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from "../../assets/pics/no_poster.jpg"
import { Link } from "react-router-dom"
// import Movie from "../Movie/index"




export default class MovieCard extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = {}
    }
    render() {

        const width = { width: "15rem", display: "inline-block", verticalAlign: "top", border: "solid black 5 px" }
        const { pic, year, title } = this.props
        const source: string = (pic === "N/A") ? pic1 : pic
        const linkTitle = title.toLowerCase()
        return (
            <div className="card" style={width}>
                <Link to={`/movie/${linkTitle}`}>
                    <img src={source} style={width} />
                </Link >
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text">{year}</p>
                </div>
            </div >

        )
    }
}