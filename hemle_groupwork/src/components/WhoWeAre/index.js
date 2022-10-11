import React from "react";

import foot0 from "../../assets/aside/foot0.png"
import foot1 from "../../assets/aside/foot1.png"
import foot2 from "../../assets/aside/foot2.png"
import bar from "../../assets/tools/bar.png"

import "./style.css"

const WhoWeAre = () => {
    return(
        <section id="WhoWeAre">
            
            <div class="article">
                <h2> Qui sommes-nous ? </h2>
                <img src={bar} alt='multicolor bar'/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit arcu nisl
                    erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                    blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                    Tortor, <span>dignissim blandit</span> dui. Velit praesent turpis quam nam magna.
                </p> <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit arcu nisl
                    erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                    blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                    Tortor, <span>dignissim blandit</span> dui. Velit praesent turpis quam nam magna.
                </p>
            </div>
            
            <div classe="images">
                <img src={foot0} alt=''/>
                <img src={foot1} alt=''/>
                <img src={foot2} alt=''/>
            </div>
        
        </section>
    )
}

export default WhoWeAre;