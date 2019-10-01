import React from 'react';
import Header from "../Header/index"
import Search from "../Search/index"
import MovileList from "../movieList/index"



export default class MoviesPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            moviesList: [],
            searchValue: "",
            searchToAxios: "batman",
            isSearchUpdate: false,
            size: false
        }
    }

    searchOperation = (searchText: string): void => {
        const searchSplit = searchText.split(" ")
        const searchToState = searchSplit.join("+")
        this.setState({ searchValue: searchToState, isSearchUpdate: false })

    }

    setApiSearch = (searchText: string): void => {
        this.setState({ searchToAxios: searchText, isSearchUpdate: true })
    }

    render() {
        const { searchValue, searchToAxios, isSearchUpdate } = this.state
        const searchProps = {searchOperation: this.searchOperation, setApiSearch: this.setApiSearch, searchValue }
        return (
            <div style={{ height: "100%", paddingBottom: "300px" }}>
                <Header content="Search Movies" />
                <Search {...searchProps} />
                {isSearchUpdate ? <MovileList searched={searchToAxios} /> : <div></div>}


            </div>
        )
    }
}