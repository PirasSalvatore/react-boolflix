import { useCustomBoolflixMovieContext } from "../context/BoolflixMovieContext"


export default function Home() {

    const { movieList } = useCustomBoolflixMovieContext()

    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        {
                            movieList.map(movie => {
                                return (
                                    <div key={movie.id} className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <ul>
                                                    <li>
                                                        {movie.title}
                                                    </li>
                                                    <li>
                                                        {movie.original_title}
                                                    </li>
                                                    <li>
                                                        {movie.original_language}
                                                    </li>
                                                    <li>
                                                        {movie.vote_average}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}