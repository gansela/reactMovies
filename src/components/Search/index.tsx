import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Search extends React.Component<any, any>{

    constructor(props: any) {
        super(props)

        this.state = { searchValue: "" }
    }

    searchOperation = (searchText: string): void => {
        const searchSplit = searchText.split(" ")
        const searchToState = searchSplit.join("+")
        this.setState({ searchValue: searchToState})

    }
    render() {
        const { setApiSearch } = this.props
        const { searchValue } = this.state
        return (
            <div style={{ position: "relative", margin: "20px", left: "60%" }}>
                <TextField
                    id="movieSearch"
                    label="search"
                    variant="outlined"
                    style={{ padding: "0px" }}
                    onChange={(e) => {
                        this.searchOperation(e.target.value)
                    }}
                />
                <Button variant="contained" color="primary" size="large" style={{ padding: "15px" }} onClick={() => {
                    setApiSearch(searchValue)
                }}>Search</Button>
            </div>
            )
            
    }
}