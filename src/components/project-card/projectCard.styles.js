import styled from "styled-components";

export const ProjectCardStyles = styled.div`
    max-width: 100%;
    overflow: hidden;
    background-color: #141628;
    padding: 1.5rem;
    border-radius: 16px;
    .img-container{
        max-width: 100%;
        height: 300px;
        overflow:hidden;
        cursor: pointer;
        border-radius: 12px;
    }
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        object-position: center;
        transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        &:hover,&:focus{
        transform:scale(1.1);
        }
    }
    .content{
        background-color: #141628;
        padding: 0.5rem;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
         span{
                font-family: 'Poppins', sans-serif;
                margin:0.5rem 1rem 0 0;
                //background-color: #D1D5E8;
                background: inherit;
                padding: 5px 10px;
                //color:#141628;
                color:#D1D5E8;
                border: 1px solid #d1d5e8;
                border-radius: 4px;
                font-size: 0.7rem;
            }
        .tech-used{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
        }
        .links{
            margin-top:1rem;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            span{
                background-color:inherit;
                font-size:0.9rem;
                color:#fe4375;
                border:1px solid #fe4375;
                display:flex;
                justify-content:space-between;
                align-items:center;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                svg{
                    margin-right:5px;
                }
                &:hover,&:focus{
                    background-color:#fe4375;
                    color:#141628;
                }
                
            }
        }
    }
    @media (max-width:600px){
        padding: 1rem;
    }
`