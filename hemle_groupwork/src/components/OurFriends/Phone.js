const phone = (tab) => {
    let list = []
    while (tab) {
        let tmp = tab.splice(0, 3)
        let row = []
        for (let img in tmp)
            row.push( <img src={img} alt=""/> )
        list.push( <div className="column"> {row} </div> )
    }
    return list
}

export default phone;
