import React from 'react'
import { BottomNavStyles } from './bottomnav.styles'
import {AiOutlineHome,AiOutlineMail,AiOutlineUser} from 'react-icons/ai'

const BottomNav = () => {

    return (
        <BottomNavStyles>
            <ul className='links'>
                <li className='home'><a href="a"><AiOutlineHome /></a></li>
                <li className='projects'><a href="a"> <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></a> </li>
                <li className='about'><a href="a"> <AiOutlineUser /> </a></li>
                <li className='connect'><a href="a"> <AiOutlineMail /> </a></li>
            </ul>
        </BottomNavStyles>
    )
}

export default BottomNav
