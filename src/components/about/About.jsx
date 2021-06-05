import React from 'react'
import {motion} from 'framer-motion'
import {  fade, lineAnim, pageAnimation, textReveal } from '../../animations'
import { AboutStyles } from './about.styles'
import { Hide } from '../Hero/hero.styles'
import {useScroll} from '../../hooks/useScroll'

const About = () => {
    const [element,controls] = useScroll(0.5)
    return (
        <AboutStyles 
            className='section' 
            id='about'
            variants={pageAnimation}
            initial='hidden'
            animate={controls}
            ref={element}
        >
            <h1>About Me. </h1>
            <div className="content">
                <div className="left">
                    <div className="intro">
                        <div className="title" variants={textReveal}>
                            <motion.div className="line" variants={lineAnim}></motion.div>
                            <p className="sub-head" >Who am I</p>
                        </div>
                        <Hide>
                            <motion.p variants={textReveal}>
                            Hey, I am a Aaqib Rasool. A front-end web developer. I had started practicing web development
                            right after my graduation in 2021. I am quite comfortable with Css, JS,
                            React JS, Redux. Among the previously mentioned skills React is my core
                            specialty with all of it's modern approaches. Right Now, I am just focusing
                            on my front-end skills but I aspire to become a full stack developer in the
                            following year.
                            </motion.p>
                        </Hide>
                    </div>
                    <div className="skills">
                        <div className="title">
                            <motion.div className="line" variants={lineAnim}></motion.div>
                            <p className="sub-head">Skills & Tools</p>
                        </div>
                        <Hide><motion.p variants={textReveal}>Design: Figma</motion.p></Hide>
                        <Hide><motion.p variants={textReveal}>Developement: Javascript, React, Redux, HTML, CSS/SCSS, Firebase</motion.p></Hide>
                    </div>
                    <motion.button variants={fade}>Get in Touch</motion.button>
                </div>
                <div className="right">
                </div>
            </div>
        </AboutStyles>
    )
}

export default About
