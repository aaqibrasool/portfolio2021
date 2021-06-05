import React from 'react'
import { HeaderStyles } from './header.styles'

const Header = () => {
    return (
        <HeaderStyles>
            <div className="content">
                <div className="logo"><h1>AR</h1></div>
                <ul className='links'>
                    <li className='projects'> <a href="#projects">Projects</a></li>
                    <li className='about'> <a href="#about">About</a></li>
                    <li className='connect'> <a href="#connect">Connect</a></li>
                </ul>
            </div>
        </HeaderStyles>
    )
}

export default Header
