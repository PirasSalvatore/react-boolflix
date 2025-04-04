import { useState } from "react"

import { useBoolflixMovieContext } from "../contex/BoolflixMovieContext"


export default function Header() {

    const { setSearchQeury } = useBoolflixMovieContext()
    const [textSearch, setTextSearch] = useState('')



    return (
        <>
            <header>
                <nav>
                    <div className="Search container text-center">
                        <input type="text" value={textSearch} onChange={e => setTextSearch(e.target.value)} />
                        <button onClick={setSearchQeury(textSearch)}>
                            Search
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}