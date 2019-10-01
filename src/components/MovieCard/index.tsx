import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from "../../assets/pics/no_poster.jpg"



export default class MovieCard extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = {}
    }
    render() {

        const width = { width: "15rem", display: "inline-block", verticalAlign: "top" }
        const { key, pic, year, title } = this.props
        const source: string = (pic === "N/A") ? pic1 : pic
        return (
            <div className="card" style={width}>
                <img src={source}  style={width} />
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text">{year}</p>
                </div>
            </div>
        )
    }
}