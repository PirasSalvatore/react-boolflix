
import Card from "./Card"

export default function SectionList({ type, list }) {


    return (
        <section className="my-3 p-1">
            {list.length !== 0 && (<h1 className="text-danger ms-4">{type}</h1>)}
            <div className="row row-cols-3 row-cols-md-4 row-cols-lg-5 row-gap-3 m-4">
                {
                    list.map(item => {
                        return (
                            <Card key={item.id} item={item} type={type} />
                        )
                    })
                }
            </div>
        </section>
    )
}