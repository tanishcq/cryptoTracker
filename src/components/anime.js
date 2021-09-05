import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import '../App.css';
import './anime.css';
import './login.js';

import BitcoinSvg from '../images/bit.svg';
import EtherSvg from '../images/eth.svg';
import AdaSvg from '../images/ada.svg';
import DogeSvg from '../images/doge.svg';
import UsdtSvg from '../images/usdt.svg'
import XrpSvg from '../images/xrp.svg'
import BnbSvg from '../images/bnb.svg'
import EtcSvg from '../images/etc.svg'
import ShibSvg from '../images/shib.svg'
import UniSvg from '../images/uni.svg'
import DotSvg from '../images/dot.svg'


const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight - 1146, 
      behavior: 'auto'
    }); 
  }; 

const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #070707;
    width: 100%;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) / 2);

    @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
    }
`;

const ColumnnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;
    
    h1{
        color: #ac32e4;
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }
    
    p{
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;

const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #ac32e4;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
`;

const Image = styled(motion.img)`
    position: absolute;
    height: 100%;
    width: 100%;
    background: transparent;
    max-width: 250px;
    max-height: 250px;
`;

const IMAGE = styled(motion.img)`
    position: absolute;
    height: 100%;
    width: 100%;
    background: transparent;
    max-width: 100px;
    max-height: 100px;
`;

const ColumnnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: transparent;
    position: relative;

    ${Image}:nth-child(1){
        top: 10px;
        left: 10px;
    }
    ${Image}:nth-child(2){
        top: 170px;
        right: 10px;
    }
    ${Image}:nth-child(3){
        top: 350px;
        left: 50px;
    }
    ${Image}:nth-child(4){
        bottom: 100px;
        right: 75px;
    }
    ${Image}:nth-child(5){
        bottom: 100px;
        left: 75px;
    }
    ${Image}:nth-child(6){
        bottom: 100px;
        left: 125px;
    }
    ${Image}:nth-child(7){
        bottom: 100px;
        left: 175px;
    }
    ${Image}:nth-child(8){
        bottom: 100px;
        left: 530px;
    }
    ${Image}:nth-child(9){
        bottom: 100px;
        left: 355px;
    }
    ${Image}:nth-child(10){
        bottom: 100px;
        right: 275px;
    }
    ${Image}:nth-child(11){
        bottom: 100px;
        left: 175px;
    }
    ${Image}:nth-child(12){
        bottom: 100px;
        left: 470px;
    }
`;

const anime = () => {
    const fadeLeft = {
        hidden: {opacity: 0, x: -100},
        partly: {opacity: 0.5, x: 20},
        visible: {opacity: 1, x: 0}
    }

    return (
        <Section>
            <Container>
                <ColumnnLeft>
                    <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1}}>Welcome to <span id="logo1">crypto</span><span className="logo2">Rich</span></motion.h1>
                    <motion.p variants={fadeLeft} initial='hidden' animate='visible' transition={{duration: 2}}>Let's become <span className="logo2">rich</span> together</motion.p>
                    <Button onClick={scrollToBottom} whileHover={{ scale: 1.05, backgroundColor: '#ac32e4'}} whileTap={{scale: 0.95, backgroundColor: '#4801ff', border: 'none', color: '#ffcc00'}} initial={{opacity:0}} animate={{opacity:1, transition: {duration: 2}}}>Become <span className="logo2">Rich</span></Button>
                </ColumnnLeft>
                <ColumnnRight>
                    <Image src={BitcoinSvg} alt='coin' 
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0, transition: {duration:1}}} />
                    <Image src={EtherSvg} alt='coin'
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0, transition: {duration:1}}}
                    />
                    <Image src={AdaSvg} alt='coin'
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0, transition: {duration:1}}}
                    />
                    <Image src={DogeSvg} alt='coin' 
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0, transition: {duration:1}}}
                    />
                    {/* <IMAGE src={DotSvg} alt='coin' 
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 1, y: -500}}
                    animate={{opacity: 0, y: 9500, transition: {duration: 4}}}
                    />
                    <IMAGE src={XrpSvg} alt='coin' 
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 1, y: -550}}
                    animate={{opacity: 0, y: 9500, transition: {duration: 4}}}
                    />
                    <IMAGE src={XrpSvg} alt='coin' 
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 1, y: -250}}
                    animate={{opacity: 0, y: 9500, transition: {duration: 4}}}
                    />
                    <IMAGE src={ShibSvg} alt='coin' 
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 1, y: -350}}
                    animate={{opacity: 0, y: 9500, transition: {duration: 4}}}
                    />
                    <IMAGE src={BnbSvg} alt='coin' 
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 1, y: -125}}
                    animate={{opacity: 0, y: 9500, transition: {duration: 4}}}
                    />
                    <IMAGE src={UniSvg} alt='coin' 
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 1, y: 100}}
                    animate={{opacity: 0, y: 9500, transition: {duration: 4}}}
                    />
                    <IMAGE src={EtcSvg} alt='coin' 
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 1, y: -110}}
                    animate={{opacity: 0, y: 9500, transition: {duration: 4}}}
                    />
                    <IMAGE src={UsdtSvg} alt='coin' 
                    whileTap={{scale:0.9}}
                    drag={true}
                    initial={{opacity: 1, y: -227}}
                    animate={{opacity: 0, y: 9500, transition: {duration: 4}}}
                    /> */}
                </ColumnnRight>
            </Container>
        </Section>
    );
};

export default anime;
