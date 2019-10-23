import React from "react"
import Header from "../Header/index"
import axios from "axios"
import { connect } from "react-redux"
import LeaveComment from "../LeaveComment/index"
import { addToFavorites } from "../../redux/actions"


class Movie extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        // console.log(props)
        this.state = { movie: "null" }
    }

    componentDidMount() {
        const { code } = this.props.match.params
        axios.get(`http://www.omdbapi.com/?t=${code}&apikey=1fa83abf`).then(res => {
            this.setState({
                movie: res
            })
        }).catch(ex => {
            console.log(ex)
        })
    }

    render() {
        const { code } = this.props.match.params
        const { data } = this.state.movie
        const width = { width: "40rem", display: "inline-block", verticalAlign: "top", border: "solid black 5 px", backgroundColor: "lightYellow"}
        if (!data) return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
        return (
            <div className=" text-center" >
                <Header content={code} />
                <div className="card text-center" style={width}>
                    <img src={data.Poster} style={{width:"15rem"}} />
                    <div className="card-body">
                        <h6 className="card-text">{data.Year}</h6>
                        <h6 className="card-text">{data.Runtime}</h6>
                        <h6 className="card-text">{data.Country}</h6>
                        <h6 className="card-text">{data.Director}</h6>
                        <h6 className="card-text">{data.Actors}</h6>
                        <h6 className="card-text">{data.Genre}</h6>
                        <h6 className="card-text">{data.Writers}</h6>
                        <p className="card-text">{data.Plot}</p>
                        <h6 className="card-text">{data.imdbRating}</h6>
                        <button className="btn btn-warning" onClick={() => {
                    this.props.onFavorites(this.state.movie.data)
                }}>Add To Favorites</button>
                    </div>
                </div >
                {console.log(data)}
                <br />
                <br />
                <LeaveComment mov={code} oldComments={this.props.comments} />
                <h3>{this.props.comments[code]}</h3>
            </div>

        )
    }
}

const mapToProps = (state: any) => {
    return state
}

const mapDispatch = (dispatch: any) => {
    return {
        onFavorites: (movie: any) => {
            console.log(movie)
            dispatch(addToFavorites(movie))
        }
    }
}

export default connect(mapToProps, mapDispatch)(Movie)