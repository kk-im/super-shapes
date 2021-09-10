// Duplicate the crosses ten times
const duplicateHtml = (element, quantity) => {
  const newContent = new Array(quantity).fill(element.innerHTML).join('')
  element.innerHTML = newContent
}

const crosses = document.querySelector('#crosses')
duplicateHtml(crosses, 10)

anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i, l) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})



anime({
  // regular css selector
  targets: '#tunnel circle',
  // Scale it up by 20%
  scale: 1.2,
  // this alternates so its returns to beginning from the end
  direction: 'alternate',
  // it loops over and over
  loop: true,
  duration: 250,
  // Easing allows us to add a bit more character to our
  // animations, rather than them just being linear
  easing: 'easeInOutSine',
  // We can apply a delay as a static value as well as a function
  // When we use it as a function, it loops through every single item
  delay: (el, index) => index * 50
});

// Here we set up the conveyor effect
anime({
  targets: '.conveyor',
  translateX: '-50%',
  duration: 1500,
  loop: true,
  // remove the easing effect to keep it consistent
  easing: 'linear',
  autoplay: true
})

const zigZagPath = document.querySelector('#zigzag path')
// sestDashOffset figures out how long our path is
const zigZagOffset = anime.setDashoffset(zigZagPath);
// we then
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset);
anime({
  targets: zigZagPath,
  strokeDashoffset: [zigZagOffset, 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  autoplay: true
})

const wavePath = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wavePath);

wavePath.setAttribute('stroke-dashoffset', waveOffset);

anime({
  targets: wavePath,
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// Duplicate the dots 40 times
duplicateHtml(document.querySelector('#dots'), 40)
const allDots = document.querySelectorAll('#dots .dot')
// animates each dot
// and running anime on each individual one
allDots.forEach(dots => {
  anime({
    targets: dots,
    // gives us a random rotation
    rotate: (el, i) => anime.random(90, 360),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  })
})

// Create 20 dots
duplicateHtml(document.querySelector("#circles"), 20)
anime({
    targets: '#circles .dot',
    // WHen we use an array it runs through each property in order
    scale: [0, 1.2],
    delay: (el, i) => i * 100,
    duration: 250,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  })

  anime({
    targets: '#flashes .flash',
    backgroundColor: (el, i) => ['#fffcf2', '#ccc5b9', '#403d39', '#eb5e28'][i],
    // apply a random delay to each one
    delay: (el, i) => anime.random(50, 100),
    duration: 500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  })

anime({
  targets: '#squares rect',
  // force the translate position to center the square
  translateX: ['-50%', '-50%'],
  // we're not actually animating them, its a bit of a hack
  translateY: ['-50%', '-50%'],
  // animate rotation from 45 to o to -45
  rotate: [45, 0, -45],
  // delay each one incrementally by 100ms
  delay: (el, i) => 100 * i,
  duration: 750,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
  })
