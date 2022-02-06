import Movie from "./Movie";
import {NotFound} from "./NotFound";

export default function Movies(props){
    const {movies = []} = props;

    return (
        <div className="container">
            <div className="row">
                {movies.length ?
                    movies.map((movie) => {
                            return (
                                <Movie key={movie.imdbID} {...movie} />
                            )
                        })
                    : (
                        <>
                            <NotFound/>
                        </>
                    )
                }
            </div>
        </div>
    )
}