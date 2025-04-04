import { createContext, useState, useEffect, useContext } from "react";

const BoolflixMovieContext = createContext()

function CustomBoolflixMovieContext({ children }) {

    const [movieList, setMovieList] = useState([])
    const [searchQuery, setSearchQeury] = useState('')

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery}`;

    useEffect(() => {

        fetch(base_movies_api_url)
            .then(res => res.json)
            .then(data => setMovieList(data))
            .catch(err => console.error(err))

    }, [searchQuery])

    return (
        <BoolflixMovieContext.Provider
            value={{
                movieList,
                setSearchQeury,
            }}
        >
            {children}
        </BoolflixMovieContext.Provider>
    )

}

function useCustomBoolflixMovieContextt() {
    const context = useContext(CustomBoolflixMovieContext);
    return context;
}

export default { CustomBoolflixMovieContext, useCustomBoolflixMovieContextt }