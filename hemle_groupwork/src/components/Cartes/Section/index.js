import Card from "../Card"
import "./style.css"

const Section = ({section}) => {
    let players = section.asides.map( tmp =>
        <Card player={tmp}/>
    )
    return (
        <section>
            <h2> {section.title} </h2>
            <div className="asides">
                {players}
            </div>
        </section>
    )
}

export default Section