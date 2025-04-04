import { useState } from "react"

import { useCustomBoolflixContext } from "../context/BoolflixContext"


export default function Header() {

    const { setSearchQeury } = useCustomBoolflixContext()
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