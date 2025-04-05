
import Card from "./Card"

export default function SectionList({ type, list }) {


    return (
        <section >
            {list.length !== 0 && (<h1 className="text-danger">{type}</h1>)}
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-gap-3">
                {
                    list.map(item => {
                        return (
                            <Card key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}