import React from "react";
import {motion} from "framer-motion";
import styled from "styled-components";
import {Animations} from "../../Animations";

//styles
const NamesStyles = styled(motion.div)`
    text-align: center;
    .name-wrapper{
        overflow: hidden;
        li{
            font-family: "Ubuntu", sans-serif;
            font-weight: 700;
            display: inline-block;
            font-size:calc(var(--VW)*18);
            line-height: calc(var(--VW)*12);
            height: calc(var(--VW)*15);
            text-transform: uppercase;
            -webkit-text-fill-color: var(--forest-green);
            -webkit-text-stroke: calc(var(--VW)*0.14) var(--forest-green);
            @media (hover: none) and (pointer: coarse){
                font-size:calc(var(--VW)*17);
                line-height: calc(var(--VW)*16);
                height: calc(var(--VW)*16);
            }
        }
    }
`

//animations 

const titleParent = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0
        }
    }
}

const titleParent2 = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6
        }
    }
}

const titleTextReveal = {
    hidden: {
        y: "120%",
    },
    show: {
        y: "0%",
    }
}

//component
export const Names = () => {
    const firstName = ["B", "R", "A", "N", "D", "O", "N"];
    const lastName  = ["S", "H", "A", "M", "O", "O"];
    const {transition} = Animations();
    return(
        <NamesStyles>
            <motion.ol className="name-wrapper" variants={titleParent} initial="hidden" animate="show">
                {
                    firstName.map((letter, index)=>{
                        return(
                            <motion.li key={index} variants={titleTextReveal} transition={{...transition, duration: 2}}>{letter}</motion.li>
                        )
                    })
                }
                </motion.ol>
                <motion.ol className="name-wrapper" variants={titleParent2} initial="hidden" animate="show">
                {
                    lastName.map((letter, index)=>{
                        return(
                            <motion.li key={index} variants={titleTextReveal} transition={{...transition, duration: 2}}>{letter}</motion.li>
                        )
                    })
                }
                </motion.ol>
        </NamesStyles>
    );
};