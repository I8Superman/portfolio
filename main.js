import './sass/style.scss'

"run strict"

console.log('Js runninz');

// const field = document.querySelector('#field');
// console.log(field);
// const box1 = document.querySelector('.box1');

// gsap.set(field, { perspective: 100 });


// const zOffset = "-" + Math.floor(window.innerWidth / 3) + "vw";
// console.log(zOffset)

// gsap.set(box1, { transformOrigin: `center center ${zOffset}` }); // Set z value relative to screen width: window width (px) / 3 > value in



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
  console.log(tool);
  const zOffsetModifier = (Math.random() * (3.5 - 2.5) + 2.5).toFixed(2); // Variable rotation radius
  appValues[logo.dataset.name].zMod = zOffsetModifier; // Update appValues object for later use
  const zOffset = "-" + Math.floor(window.innerWidth / zOffsetModifier) + "vw"; // Adjust radius according to screen width
  console.log(zOffsetModifier, zOffset);
  const xDir = Math.random() < 0.5 ? 'left' : 'right'; // Clockwise or anti clockwise y-axis rotation
  const yDir = Math.random() < 0.5 ? 'up' : 'down'; // y translate up/down or down/up
  console.log(xDir, yDir)
  const yTransform = Math.floor(Math.random() * (20 - 2) + 2); // Degree of y-translate
  // Adjust z-axis rotation according to y rotation and y translate
  const angle = xDir === 'left' && yDir === 'down' || xDir === 'right' && yDir === 'up' ? -(yTransform * 2) : yTransform * 2;
  console.log(angle)
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
  console.log(`New calculation: ${zOffsetNew}`)
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



//         gsap.set(box1, { rotation: 20 });
// const tl2 = gsap.timeline({ repeat: 1, onComplete: firstAnimation });
// tl2.to(box1, { duration: 8, ease: "none", rotationY: 360 })
//     .to(box1, { duration: 2, yoyo: true, repeat: 1, y: '10vw' }, 0)
//     .to(box1, { duration: 2, yoyo: true, repeat: 1, y: '-10vw' }, 4)




// document.addEventListener('pointermove', (event) => {
//     console.log('Pointer moved');
//     console.log(event);
// });
