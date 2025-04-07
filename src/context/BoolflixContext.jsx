import { createContext, useState, useEffect, useContext } from "react";

const BoolflixContext = createContext()

function CustomBoolflixContextProvider({ children }) {

    const [movieList, setMovieList] = useState([])
    const [seriesList, setSeriesList] = useState([])
    const [searchQuery, setSearchQeury] = useState('')
    const [cast, setCast] = useState([])

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY
    const base_s_api_url_movie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery.replaceAll(" ", "+")}`;
    const base_s_api_url_series = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchQuery.replaceAll(" ", "+")}`;
    const base_s_api_url_popular_movie = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    const base_s_api_url_popular_series = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`


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

    useEffect(() => {

        //console.log(base_s_api_url);

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };


        fetch(base_s_api_url_popular_movie, options)
            .then(res => res.json())
            .then(data => setMovieList(data.results.splice(0, 10)))
            .catch(err => console.error(err))

        //console.log(movieList);

        fetch(base_s_api_url_popular_series, options)
            .then(res => res.json())
            .then(data => setSeriesList(data.results.splice(0, 10)))
            .catch(err => console.error(err))

    }, [])

    function getCast(id, type) {
        const url_s_api_movie_cast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`
        const url_s_api_series_cast = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${api_key}`

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        }

        fetch(type === 'Movie' ? url_s_api_movie_cast : url_s_api_series_cast, options)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (!data.status_code) {
                    //console.log(data.cast.splice(0, 5))
                    setCast(data.cast.splice(0, 5))
                } else {
                    setCast([])
                }

            })
            .catch(err => console.error(err))

    }

    return (
        <BoolflixContext.Provider
            value={{
                movieList,
                seriesList,
                setSearchQeury,
                getCast,
                cast
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