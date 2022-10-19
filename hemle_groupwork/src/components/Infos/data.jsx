import theDrap from "../../assets/tools/teamLogo.png"
import playerImage from "../../assets/tools/player.png"

const data = {
    number: 1,
    picture: playerImage,
    team: {
        title: "Canon Sportif de Yaoundé",
        logo: theDrap,
    },
    infos: [
        {
            title: 'nom',
            content: "Hervé Fernand ELOUNDOU NGONO"
        }, {
            title: 'naissance',
            content: ""
        }, {
            title: 'nationalite',
            content: "Camerounaise"
        }, {
            title: 'mensuration',
            content: "74kg pour 179cm"
        }, {
            title: 'position',
            content: "Milieu de terrain droit"
        }
    ],
    description : {
        title: "Biographie",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when " +
            "an unknown printer took a galley of type and scrambled it to make a type specimen " +
            "book. It has survived not only five centuries, but also the leap into electronic " +
            "typesetting, remaining essentially unchanged. It was popularised in the 1960s with " + 
            "the release of Letraset sheets containing Lorem Ipsum passages, and more recently " +
            "with desktop publishing software like Aldus PageMaker including versions"
    }
}

export default data