import bar from "../../assets/tools/bar.png"

const BuildTitle = (title) => {
    return (
        <div class="title">
            <h2> {title} </h2>
            <img src={bar} className="bar" alt='multicolor bar'/>
        </div>
    )
}

export function ChangeSlide(pos = 1) {
    let imgdiv = document.getElementById('scrollImg')
    let n = (pos > 0) ? imgdiv.children.length - 1 : 1;
    
    for (let i = 0; i < n; i++)
        imgdiv?.insertBefore(imgdiv.lastChild, imgdiv.firstChild)
}

export default BuildTitle