import "./style.css"

const Section = (params) =>

    <section className="playerBiographie">
        <h2> {params.title} </h2>
        <p> {params.description} </p>
    </section>

export default Section