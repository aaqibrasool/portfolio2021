import { motion } from "framer-motion";
import styled from "styled-components";

export const ConnectStyles = styled(motion.div)`
    min-height: 100vh;
    background-color: #1b1e32;
    padding: 0 3rem 1rem 3rem;
    overflow: hidden;
    .container{
        max-width: 500px;
        overflow: hidden;
        h1{
            color:#fff;
            text-align: left;
            margin-bottom: 1.5rem;
        }
        form{
            margin-top: 4rem;
            p{
                margin: 1rem 0;
            }
            input,textarea{
                width:100%;
                background-color: #141628;
                color:#fff;
                border: none;
                outline: none;
                font-family: 'Poppins', sans-serif;
                border-left: 4px solid #383D5E;
            }
            input{
                height:3rem;
                padding: 5px 10px;
            }
            textarea{
                resize: none;
                padding: 10px;
            }
            button{
                margin-top: 1rem;
            }
            .correct{
                border-left: 4px solid #10B981;
            }
            .danger{
                border-left: 4px solid #EF4444;
            }
            .danger-p{
                display: none;
                color:#EF4444;
                margin-top: 0.5rem;
                font-size: 0.8rem;
            }
            .correct-btn{
                background-color: #10B981;
                &:hover{
                    background-color: #383D5E;
                }
            }
            .sending-btn{
                background-color: #ffa500;
            }
        }
    }
    @media (max-width:550px){
        padding: 1rem 2rem 2rem 1.5rem;
    }
`
export const SocialLinks = styled.div`
    min-height: 10vh;
    margin: 3rem 0 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        color:#4b5563;
        transition: all 0.2s ease-in-out;
        &:hover{
            color:#d1d5e8;
        }
    }
    .social-links{
        display: flex;
        align-items: center;
    }
    a{
        background-color: #262a43;
        padding: 1rem;
        margin-left: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background-color: #fe4370;
        }
    }
    @media (max-width:550px){
        flex-direction: column-reverse;
    }
`