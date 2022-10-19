import React from "react";

import img1 from "../../../assets/home/person1.png"
import img2 from "../../../assets/home/person2.png"
import img3 from "../../../assets/home/person3.png"
import BuildTitle from "../Functions"

import "./style.css"

const WhoWeAre = ({whoWeAre}) => (
    <section id="WhoWeAre">
    
        { BuildTitle("Qui sommes-nous ?") }

        <div class="content">
                <div class="article">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href='/'> Dignissim blandit
                        </a> arcu nisl erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                        blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                        Tortor, <span>dignissim blandit</span> dui. Velit praesent turpis quam nam magna.
                    </p> <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href='/'> Dignissim blandit
                        </a> arcu nisl erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                        blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                        Tortor, <span>dignissim blandit</span> dui. Velit praesent turpis quam nam magna.
                    </p>
                </div>
                
                <div class="images">
                    <aside> <img src={img1} alt=''/> </aside>
                    <aside> <img src={img2} alt=''/> </aside>
                    <aside> <img src={img3} alt=''/> </aside>
                </div>
        </div>
        
    </section>
)

export default WhoWeAre;