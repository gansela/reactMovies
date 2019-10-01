import React from 'react';
import axios from 'axios';
import MovieCard from "../MovieCard/index"

const SpinnerPage = () => {
    return (
        <>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </>
    );
}

export default class MovieList extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = { searchField: "", movieList: [] }
    }

    componentDidMount() {
        this.setState({ movieList: "" });
        const { searched } = this.props
        axios.get(`http://www.omdbapi.com/?s=${searched}&type=movie&apikey=1fa83abf`)
            .then(res => {
                let movies = res.data;
                this.setState({ movieList: movies.Search });
            })
    }

    render() {
        const { movieList } = this.state
        return (
            <div>
                {!movieList ? <SpinnerPage /> : movieList.map((item: any) => <MovieCard key={item.Title} title={item.Title} pic={item.Poster} year={item.Year} />)}
            </div>
        )
    }
}