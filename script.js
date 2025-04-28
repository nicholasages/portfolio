import { createAnimatable, utils, waapi, animate } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

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

// Sets new durations and easings
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
  circle.x((x/7)-10).y(y/7).backgroundColor(rgb); // Update values
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
        width: 1200,
        height: 420,
        scale: 1,
      duration: 1500,
      loop: false,
    })
    setTimeout(function(){hideBox('projects-detail')}, 1000);
    document.getElementById('projects-container').style.visibility = 'visible';
    document.getElementById('projects-container').style.backdropFilter = 'blur(10px)';
});

document.getElementById('close-projects').addEventListener('click', () => {
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
    });
    setTimeout(function(){showBox('projects-detail')}, 500);
    setTimeout(function(){hideBox('projects-container')}, 1000);
});

document.getElementById('about-detail').addEventListener('click', () => {
    waapi.animate('#about-detail', {
        x: -(bounds.width/4),
        y: (bounds.height/48),
      duration: 1500,
      loop: false,
    });
    waapi.animate('#about-container', {
        width: 1200,
        height: 420,
        scale: 1,
      duration: 1500,
      loop: false,
    })
    setTimeout(function(){hideBox('about-detail')}, 1000);
    document.getElementById('about-container').style.visibility = 'visible';
    document.getElementById('about-container').style.backdropFilter = 'blur(10px)';
}
);
document.getElementById('close-about').addEventListener('click', () => {
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
    setTimeout(function(){showBox('about-detail')}, 500);
    setTimeout(function(){hideBox('about-container')}, 1000);
});

document.getElementById('skills-detail').addEventListener('click', () => {
  waapi.animate('#skills-detail', {
      x: (bounds.width/4),
      y: -(bounds.height/48),
    duration: 1500,
    loop: false,
  });
  waapi.animate('#skills-container', {
      width: 1200,
      height: 420,
      scale: 1,
    duration: 1500,
    loop: false,
  })
  setTimeout(function(){hideBox('skills-detail')}, 1000);
  document.getElementById('skills-container').style.visibility = 'visible';
  document.getElementById('skills-container').style.backdropFilter = 'blur(10px)';
}
);
document.getElementById('close-skills').addEventListener('click', () => {
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
  setTimeout(function(){showBox('skills-detail')}, 500);
  setTimeout(function(){hideBox('skills-container')}, 1000);
});

function showBox(specifiedId){
  document.getElementById(specifiedId).style.visibility = 'visible';
}
function hideBox(specifiedId){
  document.getElementById(specifiedId).style.visibility = 'hidden';
}