import { useCustomBoolflixContext } from "../context/BoolflixContext"
import { useEffect } from "react"

import FlagLanguage from "./FlagLanguage"
import Stars from "./Satrs"

const base_url_img = "https://image.tmdb.org/t/p/"
const width_url_img = "w500"

export default function Card({ item, type }) {

    const { getCast, getgenre, cast, genre } = useCustomBoolflixContext()

    useEffect(() => {
        getCast(item.id, type)
        getgenre(item.id, type)

    }, [item.id])

    //console.log(genre);



    return (
        <div className="col">

            <div className="card text-bg-dark">
                {
                    item.poster_path ?
                        (<img className="card-img " src={base_url_img + width_url_img + item.poster_path} alt={item.original_title || item.original_name} />)
                        :
                        (<img className="card-img " width="342px" src="https://www.avislivorno.it/wp-content/uploads/2016/01/ciak.png" alt="" />)
                }

                <div className="card-img-overlay overflow-y-scroll d-none" >

                    <h5 className="card-title">
                        Titolo: {item.title || item.name}
                    </h5>

                    {!(item.title || item.name === item.original_title || item.original_name) &&
                        (<h5 className="card-title">
                            Titolo originale: {item.original_title || item.original_name}
                        </h5>)
                    }

                    <p className="card-text">
                        Lingua: {
                            item.original_language ?
                                <FlagLanguage country={item.original_language.toUpperCase()} />
                                ||
                                (<p>{item.original_language.toUpperCase()}</p>)
                                :
                                (<p>Lingua non disponibile</p>)
                        }
                    </p>

                    <div className="card-text">
                        <Stars vote={item.vote_average} />
                    </div>

                    <p>
                        cast : {
                            cast.map(actor => `${actor.name} `)
                        }
                    </p>

                    <p className="card-text">
                        Descrizione: {item.overview}
                    </p>

                </div>

            </div>

        </div>
    )
}