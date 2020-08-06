import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero-image">
                <div className="hero-text">
                    <h2>Research courts in South Sudan and Somalia</h2>
                    <p>What happens in local courts matters not only for individuals or families but also for communities and nations</p>
                    <button type="button"> <Link to='/courts'> Court cases </Link></button>
                </div>
            </div>
    )
} 

export default Hero
