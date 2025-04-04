import { createContext, useState, useEffect, useContext } from "react";

const BoolflixMovieContext = createContext()

function CustomBoolflixMovieContextProvider({ children }) {

    const [movieList, setMovieList] = useState([])
    const [searchQuery, setSearchQeury] = useState('')

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery}`;

    useEffect(() => {

        //console.log(base_movies_api_url);

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };


        fetch(base_movies_api_url, options)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
            .catch(err => console.error(err))

        //console.log(movieList);

    }, [searchQuery])

    return (
        <BoolflixMovieContext.Provider
            value={{
                movieList,
                setSearchQeury
            }}>
            {children}
        </BoolflixMovieContext.Provider>
    )

}

function useCustomBoolflixMovieContext() {
    const context = useContext(BoolflixMovieContext);
    return context;
}

export { CustomBoolflixMovieContextProvider, useCustomBoolflixMovieContext }