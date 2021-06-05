import React from 'react'
import { useState, useRef, useEffect } from 'react'
import {motion} from 'framer-motion'
import emailjs from 'emailjs-com';
import { ConnectStyles, SocialLinks } from './connect.styles'
import {AiFillGithub,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import { useScroll } from '../../hooks/useScroll'
import {Hide} from '../Hero/hero.styles'
import { inputAnim, pageAnimation, textReveal, textAreaAnim, fade } from '../../animations'

const Connect = () => {
    const [characterCount,setCharacterCount] = useState('0')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [text,setText] = useState('')
    const [subject,setSubject] = useState('')
    const textRef = useRef()
    const nameRef = useRef()
    const subjectRef = useRef()
    const emailRef = useRef()
    const buttonRef = useRef()
    const [element,controls] = useScroll(0.1)

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const handleNameInput = e => {
        setName(e.target.value)
        if(e.target.value === ''){
            if(nameRef.current.classList.contains('correct')){ 
                nameRef.current.classList.remove('correct')
            }
            nameRef.current.classList.add('danger')
            nameRef.current.nextSibling.style.display= 'block' 
            return
        }
        if(e.target.value !== ''){
            if(nameRef.current.classList.contains('danger')){
                nameRef.current.classList.remove('danger')
                nameRef.current.nextSibling.style.display = 'none'
            }
            e.target.classList.add('correct')
            return
        }
    }
    const handleSubjectInput = e => {
        setSubject(e.target.value)
        if(e.target.value === ''){
            if(subjectRef.current.classList.contains('correct')){ 
                subjectRef.current.classList.remove('correct')
            }
            subjectRef.current.classList.add('danger')
            subjectRef.current.nextSibling.style.display= 'block' 
            return
        }
        if(e.target.value !== ''){
            if(subjectRef.current.classList.contains('danger')){
                subjectRef.current.classList.remove('danger')
                subjectRef.current.nextSibling.style.display = 'none'
            }
            e.target.classList.add('correct')
            return
        }
    }
    const handleEmailInput = e => {
        setEmail(e.target.value)
        if(e.target.value === ''){
            if(emailRef.current.classList.contains('correct')){
                emailRef.current.classList.remove('correct')
            }
            emailRef.current.nextSibling.textContent = 'Your email address is required.'
            return
        }
        if(!(validateEmail(e.target.value))){
            if(emailRef.current.classList.contains('correct')){
                emailRef.current.classList.remove('correct')
            }
            emailRef.current.classList.add('danger')
            emailRef.current.nextSibling.textContent = 'Please enter a vaild email address'
            emailRef.current.nextSibling.style.display = 'block'
            return
        }
        if(validateEmail(e.target.value)){
            if(emailRef.current.classList.contains('danger')){
                emailRef.current.classList.remove('danger')
                emailRef.current.nextSibling.style.display = 'none'
            }
            emailRef.current.classList.add('correct')
            return
        }
    }
    const handleTextarea = e => {
        if(e.target.value.length > 200){
            return
        }
        setText(e.target.value)
        setCharacterCount(e.target.value.length)
        
    }

    const sendMessage = (e) => {
        e.preventDefault()
        if(name === ''){
            nameRef.current.classList.add('danger')
            nameRef.current.nextSibling.textContent = 'Your name is required.'
            nameRef.current.nextSibling.style.display = 'block'
        }
        if(subject === ''){
            subjectRef.current.classList.add('danger')
            subjectRef.current.nextSibling.textContent = 'Subject is required.'
            subjectRef.current.nextSibling.style.display = 'block'
        }
        if(email === ''){
            emailRef.current.classList.add('danger')
            emailRef.current.nextSibling.textContent = 'Your email address is required.'
            emailRef.current.nextSibling.style.display = 'block'
        }
        if(text === ''){
            textRef.current.classList.add('danger')
            textRef.current.nextSibling.nextSibling.textContent = 'Your message is required.'
            textRef.current.nextSibling.nextSibling.style.display = 'block'
        }
        if( buttonRef.current.classList.contains('correct-btn')){
            buttonRef.current.textContent = 'Sending'
            buttonRef.current.classList.add('sending-btn')
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, e.target, process.env.REACT_APP_EMAILJS_ID)
            .then((result) => {
                buttonRef.current.textContent = 'Sent'
                buttonRef.current.classList.remove('sending-btn')
                setTimeout(()=>{
                    buttonRef.current.textContent = 'Send Message'
                    setName('')
                    setSubject('')
                    setEmail('')
                    setText('')
                    nameRef.current.classList.remove('correct')
                    subjectRef.current.classList.remove('correct')
                    emailRef.current.classList.remove('correct')
                    textRef.current.classList.remove('correct')
                    setCharacterCount('0')
                },2000)
            }, (error) => {
                alert(`Sorry! your message is not sent. Please try the other mentioned social links to approach me :) `)
                buttonRef.current.textContent = 'Send Message'
                buttonRef.current.classList.remove('sending-btn')
                setName('')
                setSubject('')
                setEmail('')
                setText('')
                nameRef.current.classList.remove('correct')
                subjectRef.current.classList.remove('correct')
                emailRef.current.classList.remove('correct')
                textRef.current.classList.remove('correct')
                setCharacterCount('0')

            });
        }
    }
    useEffect(()=>{
        if(typeof(characterCount) === 'string'){
            return
        }
        if(characterCount === 0) {
            if(textRef.current.classList.contains('correct')){
                textRef.current.classList.remove('correct')
            }
             textRef.current.classList.add('danger')
             textRef.current.nextSibling.nextSibling.textContent = 'Your message is required'
             return
        }
        if(characterCount < 10) {
            if(textRef.current.classList.contains('correct')){
                textRef.current.classList.remove('correct')
            }
            textRef.current.classList.add('danger')
             textRef.current.nextSibling.nextSibling.textContent = 'Your message requires a length of atleast 10 charachters.'
            textRef.current.nextSibling.nextSibling.style.display = 'block'
            return
        }
        if(characterCount >= 10){
            if(textRef.current.classList.contains('danger')){
                textRef.current.classList.remove('danger')
                textRef.current.nextSibling.nextSibling.style.display = 'none'
            }
            textRef.current.classList.add('correct')
            return
        }
    },[characterCount])
    useEffect(()=>{
        if(nameRef.current.classList.contains('correct') && 
            emailRef.current.classList.contains('correct') &&
            subjectRef.current.classList.contains('correct') &&
            textRef.current.classList.contains('correct')
        ){
            buttonRef.current.classList.add('correct-btn')
        } else {
            buttonRef.current.classList.remove('correct-btn')
        }
    },[name,email,subject,text])
    
    return (
        <ConnectStyles 
            className='section' 
            id='connect'
        >
            <motion.div
               ref={element}
               variants={pageAnimation}
               initial='hidden'
               animate={controls}   
            >
                <h1>Connect.</h1>
                <div className="container">
                    <motion.h1 id="sub" variants={textReveal}>
                        Interested in working with me or perhaps just talk?
                    </motion.h1>
                    <motion.p variants={textReveal}>Reach me on social media, by filling out the contact form or by sending an email to <span>aqibrasool10@gmail.com</span></motion.p>
                    <form onSubmit={sendMessage}>
                        <Hide>
                            <motion.div variants={inputAnim}>
                            <p>What's your name? </p>
                            <input 
                                type="text" 
                                ref={nameRef}
                                value={name}
                                name='name'
                                onChange={handleNameInput}
                            />
                            <p className="danger-p">Your name is required</p>
                        </motion.div>
                        </Hide>
                        <Hide>
                            <motion.div variants={inputAnim}>
                                <p>Your email address?</p>
                                <input 
                                    type="email" 
                                    ref={emailRef}
                                    value={email}
                                    name='email'
                                    onChange={handleEmailInput}
                                />
                                <p className="danger-p"></p>
                            </motion.div>
                        </Hide>
                        <Hide>
                            <motion.div variants={inputAnim}>
                            <p>Subject</p>
                            <input 
                                type="text" 
                                ref={subjectRef}
                                value={subject}
                                name='subject'
                                onChange={handleSubjectInput}
                            />
                            <p className="danger-p">Subject is required</p>
                        </motion.div>
                        </Hide>
                        <Hide>
                            <motion.div variants={textAreaAnim}>
                                <p>Type your message here</p>
                                <textarea 
                                    cols="30" 
                                    rows="7" 
                                    maxLength='250'
                                    name='message' 
                                    ref={textRef}
                                    value={text}
                                    onChange={handleTextarea}
                                ></textarea>
                                <p>{characterCount}/200</p>
                                <p className="danger-p">Your message requires a length of atleast 10 charachters. </p>
                            </motion.div>
                        </Hide>
                        <motion.button variants={fade} type='submit' ref={buttonRef}>Send Message</motion.button>
                    </form>
                </div>
                <SocialLinks>
                    <p>&copy; 2021 Aaqib Rasool</p>
                    <ul className="social-links">
                        <li><a href="https://github.com/aaqibrasool" target='#blank'> <AiFillGithub /> </a></li>
                        <li><a href="https://twitter.com/AaqibRasoolch" target='#blank'> <AiOutlineTwitter /> </a></li>
                        <li><a href="https://www.instagram.com/aqibrasul_" target='#blank'> <AiOutlineInstagram /> </a></li>
                    </ul>
                </SocialLinks>
            </motion.div>
        </ConnectStyles>
    )
}

export default Connect
