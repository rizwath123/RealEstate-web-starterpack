import React from 'react'
import "./Hero.css"
function Hero() {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
               {/* Left part */}
                <div className="hero-left">
                    Left Hero
                </div>

                {/* Right part */}
                
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="Hero Image" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero