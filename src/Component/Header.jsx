import { useState } from "react"

import { useCustomBoolflixMovieContext } from "../context/BoolflixMovieContext"


export default function Header() {

    const { setSearchQeury } = useCustomBoolflixMovieContext()
    const [textSearch, setTextSearch] = useState('')

    function handleClickSearch() {
        console.log(textSearch);

        setSearchQeury(textSearch)
    }

    return (
        <>
            <header>
                <nav>
                    <div className="Search container text-center">
                        <input type="text" value={textSearch} onChange={e => setTextSearch(e.target.value)} />
                        <button onClick={handleClickSearch}>
                            Search
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}