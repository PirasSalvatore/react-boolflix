
import FlagLanguage from "./FlagLanguage"

export default function Card({ item }) {

    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <ul>
                        <li>
                            {item.title || item.name}
                        </li>
                        <li>
                            {item.original_title || item.original_name}
                        </li>
                        <li>
                            {
                                item.original_language ?
                                    <FlagLanguage country={item.original_language.toUpperCase()} />
                                    ||
                                    (<p>{item.original_language.toUpperCase()}</p>)
                                    :
                                    (<p>Lingua non disponibile</p>)
                            }
                        </li>
                        <li>
                            {item.vote_average}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}