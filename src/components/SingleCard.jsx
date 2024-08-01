// single card design component
export default function SingleCard({details}) {
    return (
        <div className="card card-compact card_basic bg-base-100 shadow-md m-3 hover:shadow-2xl">
            <figure>
                <img className="card_image"
                    src={details.imageUrl}
                    alt={details.alt} />
            </figure>
            <div className="card-body">
                <div className="title_container">
                <h2 className="card-title card_title">{details.title}</h2>
                </div>
                <p><span className="by">By </span>{details.author}</p>
                <div className="card_bottom_info">
                    <p>{details.date}</p>
                    <p className="right_align">{details.duration}</p>
                </div>
            </div>
        </div>
    )
}