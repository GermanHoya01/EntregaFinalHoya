const Item = ({ id, name, img, price, sotck }) => {

    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Precio: {price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <button>
                    <span>Ver Detalle</span>
                </button>
            </footer>
        </article>
    )
}

export default Item