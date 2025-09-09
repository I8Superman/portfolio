"use strict"

import './sass/style.scss'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

document.addEventListener('DOMContentLoaded', init);

function init() {
  animateName();
  animateLogos();
  animateScrollArrow();
  animateAttentionArrow()
  // txtAnimate();
};

// Hide scroll arrow when scrolling down
function animateScrollArrow() {
  const plScroll = document.querySelector('#please_scroll');
  const scrollContainer = document.querySelector('main');
  scrollContainer.addEventListener('scroll', cont => {
    if (cont.target.scrollTop > 200) {
      plScroll.classList.add('fade');
    } else {
      plScroll.classList.remove('fade');
    }
  });

  gsap.to('#please_scroll', { duration: 1, yoyo: true, repeat: -1, ease: 'power1.inOut', y: '1vh' });
}

function animateAttentionArrow() {
  gsap.set('#attention_pointer', { rotation: 90 });
  gsap.to('#attention_pointer', { duration: 0.5, yoyo: true, repeat: -1, ease: 'power1.inOut', x: '-5rem' });
}

// function txtAnimate() {
//   const txtChange = gsap.timeline({ paused: true });
//   txtChange.to('.name_part', {
//     duration: 1, fontSize: '2.5rem', lineHeight: '110%', fontWeight: '700', text: {
//       value: "Hi there!<br>I'm a 4th semester Multimedia design student looking for a part time job / internship / trainee position where I can sharpen my coding skills"
//     }
//   })

//   const nameObj = document.querySelector('.name_part');
//   const attentionArrow = document.querySelector('#attention_pointer');
//   nameObj.addEventListener('mouseenter', () => {
//     txtChange.play();
//     attentionArrow.classList.add('fade');
//   });
//   nameObj.addEventListener('mouseleave', () => {
//     const plBack = txtChange.reverse();
//     attentionArrow.classList.remove('fade');
//   });

// }

function animateName() {
  // gsap.set('.flip-box', { transformOrigin: 'center center' });
  let namePath = gsap.timeline();
  // namePath.set('.flip-box', { x: -10 })
  namePath.to('.flip-box', { duration: 3, x: 10, ease: "power1.inOut", repeat: -1, yoyo: true, opacity: 1 })
  // namePath.to('.flip-box', { duration: 4, x: -20, opacity: 1 })
  // namePath.to('.flip-box', { duration: 2, x: 10, opacity: 1 })
  // .to('.flip-box', { duration: 2, x: -10, yoyo: true, opacity: 1 })
}

function animateLogos() {
  const toolValues = {
    css: { zMod: 0, skillLvl: 6 },
    html: { zMod: 0, skillLvl: 6 },
    js: { zMod: 0, skillLvl: 6 },
    ai: { zMod: 0, skillLvl: 3 },
    ps: { zMod: 0, skillLvl: 3 },
    figma: { zMod: 0, skillLvl: 3 },
    affinity: { zMod: 0, skillLvl: 3 },
    react: { zMod: 0, skillLvl: 4 },
    sass: { zMod: 0, skillLvl: 4 },
    wp: { zMod: 0, skillLvl: 3 },
    vue: { zMod: 0, skillLvl: 5 }
  }

  const htmlLogo = document.querySelector('.html');
  const cssLogo = document.querySelector('.css');
  const jsLogo = document.querySelector('.js');
  const psLogo = document.querySelector('.ps');
  const aiLogo = document.querySelector('.ai');
  const affinityLogo = document.querySelector('.affinity');
  const reactLogo = document.querySelector('.react');
  const figmaLogo = document.querySelector('.figma');
  const sassLogo = document.querySelector('.sass');
  const wpLogo = document.querySelector('.wp');
  const vueLogo = document.querySelector('.vue');

  const getPosition = () => {
    const randomTimeScale = Math.floor(Math.random() * (8 - 1) + 1);
    console.log(randomTimeScale);
    return randomTimeScale;
  }
  let logoMaster = gsap.timeline();

  logoMaster.add(logoPath(htmlLogo)) // Combine all the logo timelines
    .add(logoPath(cssLogo).timeScale((Math.random() * (0.7 - 0.4) + 0.4).toFixed(1)), Math.floor(Math.random() * (8 - 1) + 1) * -1)
    .add(logoPath(jsLogo).timeScale((Math.random() * (0.7 - 0.4) + 0.4).toFixed(1)), Math.floor(Math.random() * (8 - 1) + 1) * -1)
    .add(logoPath(psLogo).timeScale((Math.random() * (0.7 - 0.4) + 0.4).toFixed(1)), Math.floor(Math.random() * (8 - 1) + 1) * -1)
    .add(logoPath(aiLogo).timeScale((Math.random() * (0.7 - 0.4) + 0.4).toFixed(1)), Math.floor(Math.random() * (8 - 1) + 1) * -1)
    .add(logoPath(vueLogo).timeScale((Math.random() * (0.7 - 0.4) + 0.4).toFixed(1)), Math.floor(Math.random() * (8 - 1) + 1) * -1)
    .add(logoPath(affinityLogo).timeScale((Math.random() * (0.7 - 0.4) + 0.4).toFixed(1)), Math.floor(Math.random() * (8 - 1) + 1) * -1)
    .add(logoPath(reactLogo).timeScale((Math.random() * (0.7 - 0.4) + 0.4).toFixed(1)), Math.floor(Math.random() * (8 - 1) + 1) * -1)
    .add(logoPath(sassLogo).timeScale((Math.random() * (0.7 - 0.4) + 0.4).toFixed(1)), Math.floor(Math.random() * (8 - 1) + 1) * -1)
    .add(logoPath(figmaLogo).timeScale((Math.random() * (0.7 - 0.4) + 0.4).toFixed(1)), Math.floor(Math.random() * (8 - 1) + 1) * -1)
    .add(logoPath(wpLogo).timeScale((Math.random() * (0.7 - 0.4) + 0.4).toFixed(1)), Math.floor(Math.random() * (8 - 1) + 1) * -1)

  function logoPath(logo) { // Set randomized timeline for each logo
    const tool = logo.dataset.name;
    logo.style.width = `calc(50px + ${toolValues[tool].skillLvl}vw`; // Set size based on skill lvl
    logo.style.height = `calc(50px + ${toolValues[tool].skillLvl}vw`;
    logo.style.backgroundImage = `url(${tool}_logo.svg)`;

    const zOffsetModifier = (Math.random() * (1 - 0.5) + 0.5).toFixed(1); // Variable rotation radius
    toolValues[tool].zMod = zOffsetModifier; // Update appValues obj with zMod
    const zOffset = "-" + (Math.round((Math.sqrt(window.innerWidth) * 10)) * zOffsetModifier) + "px"; // Adjust radius according to screen width
    //console.log(zOffset);
    const xDir = Math.random() < 0.5 ? 'left' : 'right'; // Clockwise or anti clockwise y-axis rotation
    const yDir = Math.random() < 0.5 ? 'up' : 'down'; // y translate up/down or down/up
    const yTransform = Math.floor(Math.random() * (20 - 2) + 2); // Degree of y-translate
    // Adjust z-axis rotation according to y rotation and y translate
    const angle = xDir === 'left' && yDir === 'down' || xDir === 'right' && yDir === 'up' ? -(yTransform * 2) : yTransform * 2;

    const yFirst = yDir === 'up' ? `-${yTransform}vw` : `${yTransform}vw`; // Set 1st y translate according to yDir
    const ySecond = yDir === 'up' ? `${yTransform}vw` : `-${yTransform}vw`;
    const rotateDir = xDir === 'left' ? -360 : 360; // Replace left and right with number values

    // GSAP Timeline for the logo animations
    const pathTl = gsap.timeline({ repeat: -1 });
    pathTl.set(logo, { transformOrigin: `center center ${zOffset}`, rotation: angle })
      .to(logo, { duration: 8, ease: "none", rotationY: rotateDir })
      //.to(logo, { duration: 4, ease: "none", yoyo: true, repeat: 1, scale: 0.8 }, 0)
      .to(logo, { duration: 2, yoyo: true, repeat: 1, y: yFirst }, 0)
      .to(logo, { duration: 2, yoyo: true, repeat: 1, y: ySecond }, 4)
    return pathTl // Return the single logo with its timeline animation
  }

}

// Animate project image and text:

document.addEventListener('DOMContentLoaded', () => {
  // Set color change animation on scroll:
  const bgObjs = gsap.utils.toArray('.pr');
  bgObjs.forEach((obj) => {
    const bgCol = obj.dataset.color;
    ScrollTrigger.create({
      scroller: 'main',
      trigger: obj,
      start: 'top 1px',
      onEnter: () => gsap.to('main', { duration: 2, backgroundColor: bgCol, overwrite: 'auto' }),
      onEnterBack: () => gsap.to('main', { duration: 2, backgroundColor: bgCol, overwrite: 'auto' })
    });
  });
  // Animate fade in/out project img and text:
  const fadeInObjs = gsap.utils.toArray('.fade_in');
  fadeInObjs.forEach((obj) => {

    const grandParentElem = (obj.parentNode).parentNode; // Get the parent of the parent of the elem to animate (used as the trigger for the scroll)
    const fadeInDir = obj.className.includes('text') ? '200' : '-200';
    const fadeOutDir = obj.className.includes('text') ? '200' : '-200';
    const bgCol = grandParentElem.dataset.color;

    gsap.set('.perspective', { perspective: '50vw' });
    gsap.set(obj, { transformOrigin: 'center center -50vw', opacity: 0 });

    const fadeAnim = gsap.timeline();

    fadeAnim.fromTo(obj, { rotationY: fadeInDir, scale: 0.4 }, { ease: 'power1.out', duration: 0.8, rotationY: 0, scale: 1 })
    fadeAnim.fromTo(obj, { opacity: 0 }, { duration: 0.8, opacity: 1 }, 0)
    // fadeAnim.fromTo(obj, { rotationY: 0, scale: 1 }, { ease: 'power1.in', duration: 1, rotationY: fadeOutDir, scale: 0.4 }),
    //   fadeAnim.fromTo(obj, {}, { duration: 0.5, opacity: 0 }, 1.2);

    ScrollTrigger.create({
      scroller: 'main',
      trigger: grandParentElem,
      start: 'top bottom',
      //markers: true,
      //scrub: true,
      animation: fadeAnim,
      toggleActions: 'restart complete restart none'
    });
  });
});

