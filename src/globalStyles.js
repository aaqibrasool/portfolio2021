import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style: none;
    }
    :root{
        font-size: 16px;
    }
    body{
        min-height: 100vh;
        width:100%;
        background-color: #141628;
        color:#fff;
        overflow-x: hidden;
    }
    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 2.3rem;
        text-align:center;
        color:#fe4370;
        @media (max-width:550px){
            font-size: 2rem;
        }
        @media (max-width:375px){
            font-size: 1.5rem;
        }
    }
    li{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;

    }
    a{
        text-decoration: none;
        color:inherit;
    }
    p{
        font-family: 'Poppins', sans-serif;
        color: #D1D5E8;
    }
    span,h3{
        color:#fe4370;
        font-family: 'Reggae One', cursive;
    }
    button{
        display: inline-block;
        background-color: #fe4370;
        cursor: pointer;
        margin-right: 2rem;
        margin-top: 1rem;
        color:#fff;
        padding: 1rem 1.5rem;
        font-family: 'Poppins', sans-serif;
        border:none;
        border-radius: 5px;
        outline: none;
        transition: all 0.2s ease-in-out;
        &:hover{
            background-color: #383D5E;
        }
        @media (max-width: 500px){
            padding: 0.7rem 1rem;
        }
    }
`;
export default GlobalStyle;
