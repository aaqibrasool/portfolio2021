import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroStyles = styled(motion.div)`
    min-height: 100vh;
    padding: 4rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .svg-container{
        flex:50;
        min-height: 400px;
        .svg{
            height: 100%;
        }
    }
    .content{
        flex: 50;
        //border:1px solid blue;
        h1{
            text-align:left;
            color:#fff;
            //font-size: 2.5rem;
            margin-bottom: 1rem;
        }
    }
    @media (max-width:1000px){
        .svg-container{
            display: none;
        }
    }
    @media(max-width: 550px){
        min-height:80vh;
        display:block;
    }
`
export const ReadMore = styled(motion.button)`
    background-color: transparent;
    border:2px solid #fe4370;
    color:#fe4370;
    &:hover,&:focus{
        background-color: #fe4370;
        color:#fff;
    }
`
export const Hide = styled.div`
    overflow: hidden;
`
