import Card from "../Card"
import "./style.css"

const Section = ({section}) => (
    <section className="players_position">
        <h2> {section.position} </h2>
        <div className="asides">
            { section.players.map( (tmp, i) =>
                <Card player={tmp} key={i} />
            ) }
        </div>
    </section>
)

export default Section