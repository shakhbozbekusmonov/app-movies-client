import {Component} from "react";
import {TextField} from "@mui/material";

export class Search extends Component{

    state = {
        search: 'iron',
        type: 'all'
    }

    handleKey = (e) => {
        if (e.key === 'Enter'){
            this.props.searchMovie(this.state.search, this.state.type);
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })
    }

    render() {
        const {search} = this.state
        return (
            <div className="container">
                <div className="row my-3">
                    <TextField
                        className="search"
                        id="outlined-search"
                        label="Search"
                        type="search"
                        variant="standard"
                        value={search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        type="button"
                        className="btn btn-success rounded-0"
                        onClick={() => this.props.searchMovie(this.state.search, this.state.type)}
                    >
                        Search
                    </button>
                </div>
                <div className="row mt-2 align-items-center">
                    <label>
                        <input type="radio" name="type" data-type="all"
                               onChange={this.handleFilter}
                               checked={this.state.type === 'all'}
                        /> All
                    </label>
                    <label className="ml-2">
                        <input type="radio" name="type" data-type="movie"
                               onChange={this.handleFilter}
                               checked={this.state.type === 'movie'}
                        /> Movies
                    </label>
                    <label className="ml-2">
                        <input type="radio" name="type" data-type="series"
                               onChange={this.handleFilter}
                               checked={this.state.type === 'series'}
                        /> Series
                    </label>
                </div>
            </div>
        );
    }
}

