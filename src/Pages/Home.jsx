import { useCustomBoolflixContext } from "../context/BoolflixContext"

import SectionList from "../Component/SectionList"

export default function Home() {

    const { movieList, seriesList } = useCustomBoolflixContext()

    return (
        <>
            <main>
                <div className="container">
                    <SectionList type="Movie" list={movieList} />
                    <SectionList type="Series" list={seriesList} />
                </div>
            </main>
        </>
    )
}