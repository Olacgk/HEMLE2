import datas from "./data"
import Section from "./Section"
import "./style.css"

const page = () => datas.map(tmp => <Section section={tmp}/> )

export default page