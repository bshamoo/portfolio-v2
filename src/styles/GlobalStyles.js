// Adapted from https://ronniefeng.com/

import {createGlobalStyle} from "styled-components";
import {Locomotive} from "./Locomotive";

const GlobalStyles = createGlobalStyle`
    ${Locomotive};

    :root{
        --cultured-white: #F1F1F1;
        --davys-gray: #4F4F4F;
        --eerie-black: #1f1f1f;
        --forest-green: #174e30;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p, a{
        color: var(--eerie-black);
    }

    h1, h2, h3, h4, a{
        font-family: "Ubuntu", sans-serif;
    }

    h6 {
       font-family: 'Roboto Mono', monospace;
    }

    li{
        list-style: none;
    }

    img{
        width: 100%;
        display: block;
    }

    html{
        overflow: hidden;
        min-height: -webkit-fill-available;
    }

    body{
        background-color: var(--cultured-white);
        cursor: none;
        isolation: isolate;
        min-height: 100vh;
        min-height: -webkit-fill-available;
    }

    p{
        font-family: 'Prompt', sans-serif;
        font-weight: 300;
        font-size: calc(var(--VW)*1.5);
        word-spacing: calc(var(--VW) *0.1);
        line-height: 120%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        @media (hover: none) and (pointer: coarse){
            font-size: calc(var(--VW)*3);
            word-spacing: calc(var(--VW) *0.5);
        }
        @media (hover: none) and (pointer: coarse) and (max-width: 500px), (max-width: 500px){
            font-size: calc(var(--VW)*5);
            word-spacing: calc(var(--VW) *0.5);
        }
    }

    a{
        color: inherit;
        text-decoration: none;
        font-weight: 800;
        text-transform: uppercase;
        mix-blend-mode: difference;
        outline: none;
        &:hover{
            -webkit-text-fill-color: var(--cultured-white);
            -webkit-text-stroke: calc(var(--VW)*0.14) var(--eerie-black);
        }
    }
`
export {GlobalStyles}