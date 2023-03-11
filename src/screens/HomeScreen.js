import React, { useRef } from "react";
import { Meta } from "../components/Meta";
import Brandon from "../assets/profile.png"
import styled from "styled-components";
import {Link} from "react-router-dom";
//components
import {Names} from "../components/home/Names";

const HomeStyles = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  @media (hover: none) and (pointer: coarse){
      padding: 10vh;
  }
  .background{
      height: 100%;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (hover: none) and (pointer: coarse), (max-width: 500px){
          display: none;
      }
  }
`

export const HomeScreen = () => {
  return (
    <>
      <Meta title="Home | Brandon Shamoo" />
      <HomeStyles>
        <div className="background">
            <Names/>
        </div>
      </HomeStyles>
    </>
  );
};



// const HomeStyles = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: space-between;
//   padding: 2vw;
//   @media (hover: none) and (pointer: coarse){
//       padding: 10vh 5vw;
//   }
//   .left{
//       height: 100%;
//       width: 24%;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       @media (hover: none) and (pointer: coarse), (max-width: 500px){
//           display: none;
//       }
//       &-top{
//           .pic{
//               max-height: 50vh;
//               overflow: hidden;
//           }
//           .descriptions{
//               margin-top: 3vh;
//               text-align: justify;
//           }
//       }
//       &-bottom{
//           overflow: hidden;
//           a{
//               margin-right: 3vw;
//               display: inline-block;
//               svg{
//                   pointer-events: none;
//                   width: 2.5vw;
//                   height: 2.5vw;
//                   mix-blend-mode: normal;
//                   color: var(--black);
//                   background-color: var(--cultured-white);
//                   &:hover{
//                       color: var(--cultured-white);
//                       background-color:var(--eerie-black);
//                   }
//               }
//           }
//       }
//   }
//   .right{
//       height: 100%;
//       width: 76%;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       @media (hover: none) and (pointer: coarse), (max-width: 500px){
//           width: 100%;
//       }
//       &-descriptions{
//           display: none;
//           @media (hover: none) and (pointer: coarse), (max-width: 500px){
//               display: block;
//               text-align: justify;
//               width: 52%;
//               margin: 5vh 0;
//           }
//           @media (max-width: 500px){
//               width: 85%;
//           }
//       }
//       &-bottom{
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           flex-grow: 1;
//           max-height: 40vh;
//           position: relative;
//           top: 1%;
//           @media (hover: none) and (pointer: coarse), (max-width: 500px){
//               margin-top: 0;
//               margin-bottom: 5vh;
//           }
//           .link-container{
//               overflow: hidden;
//               text-align: right;
//               :nth-child(1){
//                   padding-right: 5vw;
//                   @media (hover: none) and (pointer: coarse), (max-width: 500px){
//                       padding-right: 0;
//                   }
//               }
//               :nth-child(3){
//                   padding-right: 10vw;
//                   @media (hover: none) and (pointer: coarse), (max-width: 500px){
//                       padding-right: 0;
//                   }
//               }
//               .link-wrapper{
//                   a{
//                       display: inline-block;
//                       font-size:calc(var(--VW)*7);
//                       line-height: calc(var(--VW)*6);
//                       height: calc(var(--VW)*6);
//                       @media (hover: none) and (pointer: coarse), (max-width: 500px){
//                           font-size:calc(var(--VW)*12);
//                           line-height: calc(var(--VW)*11);
//                           height: calc(var(--VW)*11);
//                       }
//                       .number{
//                           pointer-events: none;
//                           font-size:calc(var(--VW)*2);
//                           @media (hover: none) and (pointer: coarse), (max-width: 500px){
//                           font-size:calc(var(--VW)*3);
//                           }
//                       }
//                   }
//               }
//           }
//       }
//   }
// `

// export const HomeScreen = () => {
//   const profile = useRef(null);
//   return (
//     <>
//       <Meta title="Home | Brandon Shamoo" />
//       <HomeStyles>
//             <div className="left">
//                 <div className="left-top">
//                     <img className="pic" src={Brandon}></img>
//                     <div className="descriptions">
//                         <p>Full-Stack developer with a passion for the Front-End. Currently located in Seattle.</p>
//                     </div>
//                 </div>
//                 <div className="left-bottom">
//                     <a
//                     href="https://www.linkedin.com/in/brandonshamoo/" target="_blank" rel="noreferrer">
//                         LinkedIn
//                     </a>
//                     <a href="https://github.com/bshamoo" target="_blank" rel="noreferrer">
//                         GitHub
//                     </a>
//                 </div>
//             </div>
//             <div className="right">
//                 <Names/>
//                 <div className="right-descriptions">
//                     <p>Full-Stack developer with a passion for the Front-End. Currently located in Seattle.</p>
//                 </div>
//                 <div className="right-bottom">
//                     <div className="link-container">
//                         <div className="link-wrapper">
//                           <Link to="projects"><span className="number">01.</span>PROJECTS</Link>
//                         </div>
//                     </div>
//                     <div className="link-container">
//                         <div className="link-wrapper">
//                           <Link to="about"><span className="number">02.</span>ABOUT</Link>
//                         </div>
//                     </div>
//                     <div className="link-container">
//                         <div className="link-wrapper">
//                             <a href="mailto:bshamoo@icloud.com"><span className="number">03.</span>CONTACT</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </HomeStyles>
//     </>
//   );
// };