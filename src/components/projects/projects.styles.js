import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectsStyles = styled(motion.div)`
    min-height: 60vh;
    background-color: #1B1E32;
    text-align: center;
    max-width: 100%;
    padding: 1rem 1rem;
    .content-slider{
        .swiper-container {
            padding-top: 6rem;
            max-width: 100%;
        }
        .swiper-button-prev,
        .swiper-button-next {
            position: absolute;
            height: 50px;
            width: 50px;
            background: #fe4370;
            z-index: 10;
            right: 80px;
            left: auto;
            top: 0;
            transform: translateY(50%);
            color: #fff;
            border-radius: 8px;
        }
        .swiper-button-next {
            right: 20px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 2rem;
        }
    }
`