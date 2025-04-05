
import FlagLanguage from "./FlagLanguage"

const base_url_img = "https://image.tmdb.org/t/p/"
const width_url_img = "w185"

export default function Card({ item }) {

    return (
        <div className="col">
            <div className="card">
                <div className="card-body " >
                    {
                        item.poster_path ?
                            (<img className="card-img-top" src={base_url_img + width_url_img + item.poster_path} alt={item.original_title || item.original_name} />)
                            :
                            (<img className="card-img-top" width="154px" src="https://www.avislivorno.it/wp-content/uploads/2016/01/ciak.png" alt="" />)
                    }
                    <ul className="list-unstyled">
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