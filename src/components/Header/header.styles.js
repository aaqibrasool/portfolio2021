import styled from "styled-components";

export const HeaderStyles = styled.div`
    min-height: 80px;
    /* position: fixed;
    top:0;
    left:0; */
    position:fixed;
    top:0;
    background-color: #141628;
    z-index:20;
    width:100%;
    .content{
        max-width: 100%;
        margin: 0 3rem;
        padding:1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ul{
            //flex:30;
            display: flex;
            li{
                color: #D1D5E8;
                cursor: pointer;
                margin-left: 2rem;
                &:hover{
                    color:#fff;
                }
            }
            .current{
                color:#fff;
                position: relative;
                &::before{
                    content:'';
                    position:absolute;
                    bottom:10px;
                    left:-10px;
                    height:6px;
                    width:6px;
                    border-radius: 50%;
                    background-color: #FE4370;
                }
            }
        }
        h1{
            font-family: 'Reggae One', cursive;
            color:#FE4370;
            text-align: left;
        }
        .logo{
            //flex:70;
        }
    }
    @media (max-width:650px){
        position: static;
        .content{
            ul{
                display: none;
            }
        }
    }
`