import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'

// Aggiungi le icone alla libreria
library.add(faStarSolid, faStarRegular)

export default function Stars({ vote }) {

    const number = Math.ceil(vote / 2)

    const starFull = <FontAwesomeIcon icon={faStarSolid} />
    const starEmpty = <FontAwesomeIcon icon={faStarRegular} />

    const Stars = generateStars()

    function generateStars() {
        const items = []

        for (let i = 0; i < 5; i++) {
            i < number ? items.push(starFull) : items.push(starEmpty)
        }
        return items
    }

    console.log(Stars);


    return (
        <>
            <div className="row no-wrap">
                {
                    Stars.map((star, index) => {
                        return (
                            <div key={`Star-${index}`} className="col">
                                {
                                    star
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}