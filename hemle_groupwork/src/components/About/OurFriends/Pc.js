const pc = ({tab}) => {
    console.log( tab )
    return tab.map(img => <img src={img} alt=''/>)
}

export default pc;
