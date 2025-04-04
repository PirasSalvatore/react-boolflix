import { createContext, useState, useEffect, useContext } from "react";

const BoolflixContext = createContext()

function CustomBoolflixContextProvider({ children }) {

    const [movieList, setMovieList] = useState([])
    const [seriesList, setSeriesList] = useState([])
    const [searchQuery, setSearchQeury] = useState('')

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY
    const base_s_api_url_movie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery.replaceAll(" ", "+")}`;
    const base_s_api_url_series = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchQuery.replaceAll(" ", "+")}`;


    useEffect(() => {

        //console.log(base_s_api_url);

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };


        fetch(base_s_api_url_movie, options)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
            .catch(err => console.error(err))

        //console.log(movieList);

        fetch(base_s_api_url_series, options)
            .then(res => res.json())
            .then(data => setSeriesList(data.results))
            .catch(err => console.error(err))

    }, [searchQuery])

    return (
        <BoolflixContext.Provider
            value={{
                movieList,
                seriesList,
                setSearchQeury
            }}>
            {children}
        </BoolflixContext.Provider>
    )

}

function useCustomBoolflixContext() {
    const context = useContext(BoolflixContext);
    return context;
}

export { CustomBoolflixContextProvider, useCustomBoolflixContext }