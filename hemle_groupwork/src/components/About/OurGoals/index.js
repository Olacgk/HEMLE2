import React from "react";
import BuildTitle from "../Functions"

import goal from "../../../assets/home/goals.png"

import "./style.css"

const OurGoals = ({ourGoals}) => {
    return (
        <section id="ourGoals">
            
            { BuildTitle("Notre objectifs") }

            <div class="ourGoals-content">
                
                <div class="ourGoals-article">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit
                        arcu nisl erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                        blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                        Tortor, <a href='?a'>dignissim blandit </a> dui. Velit praesent turpis quam nam magna.
                    </p> <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit
                        arcu nisl erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                        blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                        Tortor, <a href='?a'>dignissim blandit </a> dui. Velit praesent turpis quam nam magna.
                    </p>
                </div>
                
                <div class="ourGoals-images">
                    <div class="img">
                        <img src={goal} alt=''/>
                    </div>
                </div>
            
            </div>
        
        </section>
    )
}

export default OurGoals;