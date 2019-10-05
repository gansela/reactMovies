import React from "react"
import Header from "../Header/index"
import axios from "axios"


export default class Movie extends React.Component<any, any>{
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
        if (!movie) return (
            <div>
                <h1>Loading...</h1>
            </div>

        )
        return (
            <div>
                <Header content={code}/>
                <span> This is movie: {JSON.stringify(this.state.movie)} </span>
            </div>

        )
    }

}