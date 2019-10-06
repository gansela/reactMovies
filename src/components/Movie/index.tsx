import React from "react"
import Header from "../Header/index"
import axios from "axios"
import { connect } from "react-redux"
import { saveNewComment } from "../../redux/actions"
import LeaveComment from "../LeaveComment/index"


class Movie extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        // console.log(props)
        this.state = { movie: "null" }
    }

    componentDidMount() {
        const { code } = this.props.match.params
        console.log(code)
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
        const { movie } = this.state
        console.log(this.props.comments[code])
        if (!movie) return (
            <div>
                <h1>Loading...</h1>
            </div>

        )
        return (
            <div>
                <Header content={code} />
                <span> This is movie: {JSON.stringify(this.state.movie)} </span>
                <br />
                <br />
                <LeaveComment mov={code} oldComments={this.props.comments}/>
                <h3>{this.props.comments[code]}</h3>
            </div>

        )
    }
}

const mapToProps = (state: any) => {
    return state
}


export default connect(mapToProps, null)(Movie)