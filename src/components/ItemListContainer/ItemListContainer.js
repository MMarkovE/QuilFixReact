import './ItemListContainer.css'

export const ItemListContainer = ({ greeting }) => {

    return (
        <div className="list-container">
            <h2 className="list-container__title">ItemListContainer</h2>
            <hr />

            <p>{greeting}</p>
        </div>
    )
}

