import styled from "styled-components";

export const BottomNavStyles = styled.div`
    background-color: #111929;
    min-height: 5vh;
    position:fixed;
    z-index: 25;
    border-top: 1px solid #1C2338;
    bottom: 0;
    width: 100%;
    ul{
        max-width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    li{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
        color:#d1d5d8;
        &:hover{
            color:#fff;
        }
    }
    .current{
        color:#fff;
        border-top: 2px solid #fe4370;
    }
`