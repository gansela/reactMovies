import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Search extends React.Component<any, any>{

    render() {
        const { searchValue, searchOperation, setApiSearch } = this.props
        return (
            <div style={{ position: "relative", margin: "20px", left: "60%" }}>
                <TextField
                    id="movieSearch"
                    label="search"
                    variant="outlined"
                    style={{ padding: "0px" }}
                    onChange={(e) => {
                        searchOperation(e.target.value)
                    }}
                />
                <Button variant="contained" color="primary" size="large" style={{ padding: "15px" }} onClick={() => {
                    setApiSearch(searchValue)
                }}>Search</Button>
            </div>

        )
    }
}