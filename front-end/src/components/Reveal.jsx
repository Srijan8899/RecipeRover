import React, { useState ,useEffect } from 'react'
import styled from 'styled-components'
import {gsap, CSSPlugin, Expo} from 'gsap'
import imagesLoaded from 'imagesloaded';
import LandingPage from '../pages/LandingPage';
gsap.registerPlugin(CSSPlugin);

function Reveal() {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll('.content img');
    // const backgroundimg = document.querySelectorAll('background-image');
    // const images = [...image, ...backgroundimg];


    const imgLoad = imagesLoaded(images);


    imgLoad.on('always', function() {
        const totalImages = imgLoad.images.length;
        const loadedImages = imgLoad.progressedCount;
        const loadingProgress = (loadedImages / totalImages) * 100;
      // All images have been loaded
    });

    return () => {
        imgLoad.off('always');
    }
    

  }, []);


  // Calculate loading progress as a percentage
  

        const reveal = () => {
            const tl = gsap.timeline({
                onComplete:()=>{
                    console.log("done");
                }
            })
            tl.to('.follow', {
                width: '100%',
                duration: 1.2,
                delay:0.7,
                ease: Expo.easeInOut,
            })
            .to('.hide', {
                opacity: 0,
                duration: 0.3,
            })
            .to('.hide', {
                display: 'none',
                duration: 0.3,
            })
            .to('.follow', {
                height: "100%",
                duration: 0.7,
                delay: 0.5, 
                ease: Expo.easeInOut,
            })
            .to('.content', {
                width: "100%",
                ease: Expo.easeInOut,
                duration: 0.7,
            })
        };
        
  return (
    <AppContainer> 
        <Loading>
            <Follow className="follow"></Follow>
            <ProgressBar className="hide" style={{width: progress + "%"}}></ProgressBar>
            <Count className="hide">{progress}%</Count>
        </Loading>
        <Content className="content">
            <LandingPage/>
        </Content>
    </AppContainer>
  )
}

export default Reveal

const AppContainer = styled.div`
height: 100vh;
width: 100vw;
color: #000000;
position: relative;
`;

const Loading = styled.div`
height: 100%;
width: 100%;
background-color: #121212;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
`;

const Follow = styled.div`
position: absolute;
background-color: #43766C;
height: 2px;
width: 0;
left: 0;
z-index: 2;
`;

const ProgressBar = styled.div`
position: absolute;
left: 0;
height: 2px;
width: 0;
background-color: #F8FAE5;
transition: 0.5s ease-out;
`;

const Count = styled.p`
position: absolute;
font-size: 9rem;
color: #F8FAE5;
font-weight: bold;
trasform: translateY(-15px);
`;

const Content = styled.div`
position: absolute;
width:0;
z-index: 2;
overflow: hidden;
`;

