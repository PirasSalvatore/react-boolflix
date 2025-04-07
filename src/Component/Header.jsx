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
                <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                    <div className="container-fluid">
                        <h1><a className="navbar-brand text-danger">BOOLFLIX</a></h1>
                        <div className="d-flex" role="search">
                            <input type="text" value={textSearch} onChange={e => setTextSearch(e.target.value)} />
                            <button className="btn btn-danger" onClick={handleClickSearch}>
                                Search
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}