import React from 'react';
import Header from "../Header/index"
import Search from "../Search/index"
import MovileList from "../movieList/index"




export default class MoviesPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            moviesList: [],
            searchToAxios: "batman",
            isSearchUpdate: false,
            size: false
        }
    }

    setApiSearch = (searchText: string): void => {
        this.setState({ searchToAxios: searchText, isSearchUpdate: true })
    }

    render() {
        const { searchToAxios, isSearchUpdate } = this.state
        const searchProps = { setApiSearch: this.setApiSearch }
        return (
            <div style={{ height: "100%", paddingBottom: "300px" }}>
                <Header content="Search Movies" />
                <Search {...searchProps} />
                {isSearchUpdate ? <MovileList searched={searchToAxios}  /> : <div></div>}
            </div>
        )
    }
}