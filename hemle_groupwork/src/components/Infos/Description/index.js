import "./style.css"

const Section = ({desc}) =>
    <section id="playerDescription">
        
        <h2> {desc.title} </h2>
        
        <p id="descriptionBody">
            {desc.content}
        </p>

    </section>

export default Section