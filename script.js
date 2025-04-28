import { createAnimatable, utils, waapi, animate } from './anime.esm.js';

const $demo = document.querySelector('.container');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circle = createAnimatable('.circle', {
  x: 0,
  y: 0,
  backgroundColor: 0,
  ease: 'outExpo',
});

const rgb = [164, 255, 79];

// lowkey dont know why i pasted all this shit
circle.x(0, 500, 'out(2)');
circle.y(0, 500, 'out(3)');
circle.backgroundColor(rgb, 250);

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  rgb[0] = utils.mapRange(x, -hw, hw, 0, 164);
  rgb[2] = utils.mapRange(x, -hw, hw, 79, 255);
  circle.x((x/6)-10).y(y/6).backgroundColor(rgb); // Update values
}

window.addEventListener('mousemove', onMouseMove);
document.addEventListener('scroll', refreshBounds);

document.getElementById('projects-detail').addEventListener('click', () => {
    waapi.animate('#projects-detail', {
        x: bounds.width/4,
        y: bounds.height/48,
      duration: 1500,
      loop: false,
    });
    waapi.animate('#projects-container', {
        width: 1100,
        height: 420,
        scale: 1,
      duration: 1500,
      loop: false,
    })
    setTimeout(function(){hideBox('projects-detail')}, 1000);
    document.getElementById('projects-container').style.visibility = 'visible';
    document.getElementById('projects-container').style.backdropFilter = 'blur(15px)';
    setTimeout(function(){document.getElementsByClassName('project')[0].animate([
      { transform:'translateY(25%)',opacity: 0},
      { transform:'translateY(0)' ,opacity:1}
    ]
    , {duration: 1000, fill: 'forwards', easing: 'ease-in-out'})}, 1200);
    setTimeout(function(){document.getElementsByClassName('project')[1].animate([
      { transform:'translateY(25%)',opacity: 0},
      { transform:'translateY(0)' ,opacity:1}
    ]
    , {duration: 1000, fill: 'forwards', easing: 'ease-in-out'})}, 1400);
    setTimeout(function(){document.getElementsByClassName('project')[2].animate([
      { transform:'translateY(25%)',opacity: 0},
      { transform:'translateY(0)' ,opacity:1}
    ]
    , {duration: 1000, fill: 'forwards', easing: 'ease-in-out'})}, 1600);
    setTimeout(function(){document.getElementsByClassName('project')[3].animate([
      { transform:'translateY(25%)',opacity: 0},
      { transform:'translateY(0)' ,opacity:1}
    ]
    , {duration: 1000, fill: 'forwards', easing: 'ease-in-out'})}, 1800);
    setTimeout(function(){document.getElementsByClassName('project')[4].animate([
      { transform:'translateY(25%)',opacity: 0},
      { transform:'translateY(0)' ,opacity:1}
    ]
    , {duration: 1000, fill: 'forwards', easing: 'ease-in-out'})}, 2000);
});

document.getElementById('close-projects').addEventListener('click', () => {
  setTimeout(function(){
    waapi.animate('#projects-container', {
      width: 100,
      height: 100,
      scale: .45,
      loop: false,
    duration: 1500,
  });
  waapi.animate('#projects-detail', {
    x: 0,
    y: 0,
  duration: 1500,
  loop: false,
});}, 1700);

    setTimeout(function(){showBox('projects-detail')}, 800);
    setTimeout(function(){hideBox('projects-container')}, 2000);
    setTimeout(function(){document.getElementsByClassName('project')[0].animate([
      { transform:'translateY(0)',opacity: 1},
      { transform:'translateY(25%)' ,opacity:0}
    ]
    , {duration: 800, fill: 'forwards', easing: 'ease-in-out'})}, 200);
    setTimeout(function(){document.getElementsByClassName('project')[1].animate([
      { transform:'translateY(0)',opacity: 1},
      { transform:'translateY(25%)' ,opacity:0}
    ]
    , {duration: 800, fill: 'forwards', easing: 'ease-in-out'})}, 400);
    setTimeout(function(){document.getElementsByClassName('project')[2].animate([
      { transform:'translateY(0)',opacity: 1},
      { transform:'translateY(25%)' ,opacity:0}
    ]
    , {duration: 800, fill: 'forwards', easing: 'ease-in-out'})}, 600);
    setTimeout(function(){document.getElementsByClassName('project')[3].animate([
      { transform:'translateY(0)',opacity: 1},
      { transform:'translateY(25%)' ,opacity:0}
    ]
    , {duration: 800, fill: 'forwards', easing: 'ease-in-out'})}, 800);
    setTimeout(function(){document.getElementsByClassName('project')[4].animate([
      { transform:'translateY(0)',opacity: 1},
      { transform:'translateY(25%)' ,opacity:0}
    ]
    , {duration: 800, fill: 'forwards', easing: 'ease-in-out'})}, 1000);
});

document.getElementById('about-detail').addEventListener('click', () => {
    waapi.animate('#about-detail', {
        x: -(bounds.width/4),
        y: (bounds.height/48),
      duration: 1500,
      loop: false,
    });
    waapi.animate('#about-container', {
        width: 1100,
        height: 420,
        scale: 1,
      duration: 1500,
      loop: false,
    });
    setTimeout(function(){hideBox('about-detail')}, 1000);
    document.getElementById('about-container').style.visibility = 'visible';
    document.getElementById('about-container').style.backdropFilter = 'blur(15px)';
    setTimeout(function(){document.getElementById('about-text').animate([
      { transform:'translateY(20%)',opacity: 0.1},
      { transform:'translateY(0)' ,opacity:1}
    ]
    , {duration: 1000, fill: 'forwards', easing: 'ease-in-out'})}, 1200);
}
);
document.getElementById('close-about').addEventListener('click', () => {
  setTimeout(function(){
    waapi.animate('#about-container', {
      width: 100,
      height: 100,
      scale: .45,
      loop: false,
    duration: 1500,
  });
  waapi.animate('#about-detail', {
      x: 0,
      y: 0,
    duration: 1500,
    loop: false,
  });
  }, 500);
    setTimeout(function(){showBox('about-detail')}, 1000);
    setTimeout(function(){hideBox('about-container')}, 1300);
    setTimeout(function(){document.getElementById('about-text').animate([
      { transform:'translateY(0)',opacity: 1},
      { transform:'translateY(20%)' ,opacity: 0}
    ]
    , {duration: 400, fill: 'forwards', easing: 'ease-in-out'})}, 100);
});

document.getElementById('skills-detail').addEventListener('click', () => {
  waapi.animate('#skills-detail', {
      x: (bounds.width/4),
      y: -(bounds.height/48),
    duration: 1500,
    loop: false,
  });
  waapi.animate('#skills-container', {
      width: 1100,
      height: 420,
      scale: 1,
    duration: 1500,
    loop: false,
  })
  setTimeout(function(){hideBox('skills-detail')}, 1000);
  document.getElementById('skills-container').style.visibility = 'visible';
  document.getElementById('skills-container').style.backdropFilter = 'blur(15px)';
  setTimeout(function(){document.getElementById('skills-text').animate([
    { transform:'translateY(20%)',opacity: 0.1},
    { transform:'translateY(0)' ,opacity:1}
  ]
  , {duration: 1000, fill: 'forwards'})}, 1200);
}
);
document.getElementById('close-skills').addEventListener('click', () => {
  setTimeout(function(){
    waapi.animate('#skills-container', {
      width: 100,
      height: 100,
      scale: .45,
      loop: false,
    duration: 1500,
  });
  waapi.animate('#skills-detail', {
      x: 0,
      y: 0,
    duration: 1500,
    loop: false,
  });
  }, 500);
  setTimeout(function(){showBox('skills-detail')}, 1000);
  setTimeout(function(){hideBox('skills-container')}, 1300);
  setTimeout(function(){document.getElementById('skills-text').animate([
    { transform:'translateY(0)',opacity: 1},
    { transform:'translateY(20%)' ,opacity: 0}
  ]
  , {duration: 400, fill: 'forwards'})}, 100);
});

function showBox(specifiedId){
  document.getElementById(specifiedId).style.visibility = 'visible';
}
function hideBox(specifiedId){
  document.getElementById(specifiedId).style.visibility = 'hidden';
}