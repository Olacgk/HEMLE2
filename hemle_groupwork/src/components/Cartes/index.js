import datas from "./data"
import Section from "./Section"
import "./style.css"

const page = () => {
    let tab = []
    for (let lab in datas)
        tab.push({title: lab, asides: datas[lab]})
    return tab.map(tmp => <Section section={tmp}/> )
}

export default page