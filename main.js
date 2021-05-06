"use strict"

import './sass/style.scss'


console.log('Js runninz');
gsap.registerPlugin(ScrollTrigger);

// const field = document.querySelector('#field');
// console.log(field);
// const box1 = document.querySelector('.box1');

// gsap.set(field, { perspective: 200 });


// const zOffset = "-" + Math.floor(window.innerWidth / 3) + "vw";
// console.log(zOffset)

// gsap.set(box1, { transformOrigin: `center center ${zOffset}` }); // Set z value relative to screen width: window width (px) / 3 > value in

// Testing background img change animation

window.bgchange = () => {
  const bg = document.querySelector('main');
  bg.style.backgroundImage = 'url(../public/img/background_modes_large.jpg)';
  bg.style.backgroundColor = 'red';
}


// LOGO ANIMATIONS
const htmlLogo = document.querySelector('.html');
const cssLogo = document.querySelector('.css');
const jsLogo = document.querySelector('.js');
const psLogo = document.querySelector('.ps');
const aiLogo = document.querySelector('.ai');
const xdLogo = document.querySelector('.xd');
const affinityLogo = document.querySelector('.affinity');
const reactLogo = document.querySelector('.react');
const figmaLogo = document.querySelector('.figma');
const sassLogo = document.querySelector('.sass');



Math.floor(Math.random() * 3) + 1;

const appValues = {
  css: { zMod: 0, skillLvl: 5 },
  html: { zMod: 0, skillLvl: 5 },
  js: { zMod: 0, skillLvl: 5 },
  ai: { zMod: 0, skillLvl: 5 },
  ps: { zMod: 0, skillLvl: 5 },
  xd: { zMod: 0, skillLvl: 5 },
  figma: { zMod: 0, skillLvl: 5 },
  affinity: { zMod: 0, skillLvl: 5 },
  react: { zMod: 0, skillLvl: 5 },
  sass: { zMod: 0, skillLvl: 5 }
}

function logoPath(logo) { // Set randomized timeline for each logo
  console.log(logo)
  const tool = logo.dataset.name;
  logo.style.backgroundImage = `url(${tool}_logo.svg)`;

  const zOffsetModifier = (Math.random() * (3.5 - 1.5) + 1.5).toFixed(2); // Variable rotation radius
  appValues[logo.dataset.name].zMod = zOffsetModifier; // Update appValues object for later use
  const zOffset = "-" + Math.floor(window.innerWidth / zOffsetModifier) + "px"; // Adjust radius according to screen width
  console.log(zOffset);
  const xDir = Math.random() < 0.5 ? 'left' : 'right'; // Clockwise or anti clockwise y-axis rotation
  const yDir = Math.random() < 0.5 ? 'up' : 'down'; // y translate up/down or down/up
  const yTransform = Math.floor(Math.random() * (20 - 2) + 2); // Degree of y-translate
  // Adjust z-axis rotation according to y rotation and y translate
  const angle = xDir === 'left' && yDir === 'down' || xDir === 'right' && yDir === 'up' ? -(yTransform * 2) : yTransform * 2;

  const yFirst = yDir === 'up' ? `-${yTransform}vw` : `${yTransform}vw`; // Set 1st y translate according to yDir
  const ySecond = yDir === 'up' ? `${yTransform}vw` : `-${yTransform}vw`;
  const rotateDir = xDir === 'left' ? -360 : 360; // Replace left and right with number values

  console.log(yFirst, ySecond)

  const pathTl = gsap.timeline({ repeat: -1 });
  pathTl.set(logo, { transformOrigin: `center center ${zOffset}`, rotation: angle })
    .to(logo, { duration: 8, ease: "none", rotationY: rotateDir })
    //.to(logo, { duration: 4, ease: "none", yoyo: true, repeat: 1, scale: 0.8 }, 0)
    .to(logo, { duration: 2, yoyo: true, repeat: 1, y: yFirst }, 0)
    .to(logo, { duration: 2, yoyo: true, repeat: 1, y: ySecond }, 4)
  return pathTl
}

window.addEventListener('resize', resetZOffset);

function resetZOffset() {
  const zOffsetNew = "-" + Math.floor(window.innerWidth / 3) + "vw";
  //console.log(`New calculation: ${zOffsetNew}`)
}



window.animate = () => {
  let logoMaster = gsap.timeline();
  logoMaster.add(logoPath(htmlLogo))
    .add(logoPath(cssLogo), 3)
    .add(logoPath(jsLogo), 5)
    .add(logoPath(psLogo), 4)
    .add(logoPath(aiLogo), 3)
    .add(logoPath(xdLogo), 2)
    .add(logoPath(affinityLogo), 5)
    .add(logoPath(reactLogo), 3)
    .add(logoPath(sassLogo), 4)
    .add(logoPath(figmaLogo), 2)
  logoMaster.timeScale(0.5);
}

// Animate project image and text:

// document.addEventListener('DOMContentLoaded', () => {
//   const fadeInObjs = gsap.utils.toArray('.fade_in');
//   fadeInObjs.forEach((obj) => {
//     const grandParentElem = (obj.parentNode).parentNode; // Get the parent of the parent of the elem to animate
//     const fadeInDir = obj.className.includes('text') ? '-200' : '200';
//     const fadeOutDir = obj.className.includes('text') ? '200' : '-200';

//     gsap.set('.project', { perspective: '50vw' });
//     gsap.set(obj, { transformOrigin: 'center center -100vw', opacity: 0 });

//     const fadeAnim = gsap.timeline();
//     fadeAnim.fromTo(obj, { rotationX: fadeInDir, scale: 0.4 }, { ease: 'power1.out', duration: 1, rotationX: 0, scale: 1 }),
//       fadeAnim.fromTo(obj, {}, { duration: 0.5, opacity: 1 }, 0.5),
//       fadeAnim.fromTo(obj, { rotationX: 0, scale: 1 }, { ease: 'power1.in', duration: 1, rotationX: fadeOutDir, scale: 0.4 }),
//       fadeAnim.fromTo(obj, {}, { duration: 0.5, opacity: 0 }, 1.2);

//     ScrollTrigger.create({
//       trigger: grandParentElem,
//       start: 'top bottom',
//       //markers: true,
//       scrub: true,
//       animation: fadeAnim,
//       toggleActions: 'restart complete reverse none'
//     });
//   });

//   const bgColObj = gsap.utils.toArray('.project');
//   bgColObj.forEach((pr) => {
//     console.log(pr);
//     const prCol = pr.dataset.color;
//     console.log(prCol);
//     const cssColVar = `$bg_${prCol}`;
//     console.log(cssColVar)
//     // const prNameClass = `.${pr.className.slice(-3)}`;
//     // console.log(prNameClass)
//     // const prNum = pr.className.slice(-1);
//     // console.log(prNum)
//     // const prBgCol = `$bg_col_${prNum}`;
//     // console.log(prBgCol)

//     const bgColAnim = gsap.timeline();
//     bgColAnim.fromTo(pr, { backgroundColor: '##000521' }, { duration: 1, ease: "power2.in", backgroundColor: prCol }),
//       bgColAnim.fromTo(pr, { backgroundColor: prCol }, { duration: 1, ease: "expo.out", backgroundColor: '#000521' });

//     ScrollTrigger.create({
//       trigger: pr,
//       start: 'top bottom',
//       end: 'bottom top',
//       markers: true,
//       scrub: true,
//       animation: bgColAnim,
//       toggleActions: 'restart complete reverse none'
//     });
//   });
// });

// window.animateProject = () => {
//   let prAnim = gsap.timeline({ ease: "power1.out" });
//   prAnim.from('.anim_left', { stagger: 0.1, duration: 1, rotation: 360, opacity: 0, x: '20vw', scale: 0.4 })
//   prAnim.from('.anim_right', { stagger: 0.1, duration: 1, rotation: 360, opacity: 0, x: '-20vw', scale: 0.4 }, 0);
// }


// const prAnim = gsap.from('.anim_left', { duration: 2, rotation: 360, opacity: 0, y: '20vw', scale: 0.4 });

// ScrollTrigger.create({
//   trigger: '.pr1',
//   animation: prAnim,
//   toggleActions: "restart none none none",
//   //toggleClass: { targets: [".left", ".right"], className: "hide" }
// });

// const prNum = prj.className.slice(-1);
//     const prElem = `pr${prNum}`;


//         gsap.set(box1, { rotation: 20 });
// const tl2 = gsap.timeline({ repeat: 1, onComplete: firstAnimation });
// tl2.to(box1, { duration: 8, ease: "none", rotationY: 360 })
//     .to(box1, { duration: 2, yoyo: true, repeat: 1, y: '10vw' }, 0)
//     .to(box1, { duration: 2, yoyo: true, repeat: 1, y: '-10vw' }, 4)




// document.addEventListener('pointermove', (event) => {
//     console.log('Pointer moved');
//     console.log(event);
// });
