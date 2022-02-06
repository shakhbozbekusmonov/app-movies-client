import {Component} from "react";
import Movies from "../componenets/Movies";
import Loader from "../componenets/Loader";
import {Search} from "../componenets/Search";

export class Main extends Component{
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=22b81ece&s=iron")
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=22b81ece&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const {movies, loading} = this.state;
        return (
            <>
                <main className="main">
                    <Search searchMovie={this.searchMovies}/>
                    {loading ? (
                        <Loader/>
                    ) : (
                        <Movies movies={this.state.movies} />
                        )}
                </main>
            </>
        )
    }
}