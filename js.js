// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});




//========================================PAGE 1=========================================//

var p1TL = gsap.timeline()

p1TL.from("#nav",{
  y:-200,
  opacity:0,
  duration:0.75
})

p1TL.from("#nav-left h2, #nav-right h3, #nav-right h5",{
  x:-50,
  opacity:0,
  stagger:0.25,
},"same")

p1TL.from("#nav-left h3, #nav-left h5",{
  x:-50,
  opacity:0,
  stagger:0.25,
},"same")

p1TL.from("#center",{
  y:100,
  opacity:0,
  duration:0.50
})

p1TL.from("#overlay #over1, #overlay #over2",{
  y:100,
  opacity:0,
  stagger:0.30
})


//===========================PAGE 2=======================================================//

var p2TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    start:"top 80%",
    end:"top 70%",
    scrub:2
  }
})

p2TL.from("#page2",{
  y:100,
  opacity:0
})

//===========================PAGE 3=======================================================//

var p3TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    start:"top 80%",
    end:"top 60%",
    scrub:2
  }
})

p3TL.from("#page3",{
  y:20,
  opacity:0,
})

p3TL.from("#alphabet h3,#alphabet h5",{
  x:-20,
  opacity:0,
  stagger:0.80
})

//===========================PAGE 3-4=======================================================//

var p34TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page34",
    start:"top 80%",
    end:"top 20%",
    scrub:2
  }
})

p34TL.from("#page34-left img",{
  x:-100,
  opacity:0,
})

p34TL.from("#page34-right img",{
  x:100,
  opacity:0,
})

p34TL.from("#page34-right-bottom h3",{
  y:100,
  opacity:0,
})

//===========================PAGE 4=======================================================//


var p4TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page4",
    start:"top 80%",
    end:"top 20%",
    scrub:1
  }
})

p4TL.from("#page4-left-top h2",{
  x:50,
  opacity:0
})

p4TL.from("#page4-left-center img, #page4-left-bottom h3",{
  opacity:0,
  stagger:0.50
})

p4TL.from("#page4-right img",{
  x:100,
  opacity:0
})



//===========================PAGE 4=======================================================//

var p5TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5",
    start:"top 80%",
    end:"top 20%",
    scrub:2
  }
})

p5TL.from("#page5 img",{
  y:100,
  opacity:0,
})

//===========================PAGE 6=======================================================//

var p6TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page6",
    start:"top 80%",
    end:"top 20%",
    scrub:2
  }
})

p6TL.from("#page6 h3",{
  y:50,
  opacity:0,
  stagger:2
})

p6TL.from("#page6 .elem",{
  y:50,
  opacity:0,
  stagger:2
})

//===========================PAGE 7=======================================================//

var p7TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page7",
    start:"top 80%",
    end:"top 20%",
    scrub:2
  }
})

p7TL.from("#page7-right h2",{
  x:100,
  opacity:0,
},"anime")

p7TL.from("#page7-left img",{
  x:-100,
  opacity:0,
})

p7TL.from("#page7-left h2",{
  x:100,
  opacity:0,
},"anime")

p7TL.from("#page7-right-center h4, #page7-right-center p ",{
  x:100,
  opacity:0,
  stagger:1
})

p7TL.from("#page7-right-bottom img",{
  x:100,
  opacity:0,
  stagger:1
})

//===========================PAGE 8=======================================================//

var p8TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page8",
    start:"top 80%",
    end:"top 20%",
    scrub:2
  }
})

p8TL.from("#page8 img",{
  y:100,
  opacity:0,
})


//===========================PAGE 9=======================================================//

var p9TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page9",
    start:"top 80%",
    end:"top 20%",
    scrub:2
  }
})

p9TL.from("#page9-left img",{
  x:-100,
  opacity:0,
})

p9TL.from("#page9-right-upper img",{
  x:100,
  opacity:0,
})

p9TL.from("#page9-right-lower h2,#page9-right-lower h3",{
  x:100,
  opacity:0,
  stagger:1
})

//===========================PAGE scroll2TL=======================================================//

var scroll2TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#scroll2",
    start:"top 80%",
    end:"top 60%",
    scrub:2
  }
})

scroll2TL.from("#scroll2",{
  y:30,
  opacity:0
})


//===========================PAGE 10=======================================================//

var p10TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page10",
    start:"top 80%",
    end:"top 20%",
    scrub:2
  }
})

p10TL.from("#page10-top h2",{
  x:100,
  opacity:0
})

p10TL.from("#page10 .elements",{
  x:100,
  opacity:0,
  stagger:1
})

//===========================PAGE 11=======================================================//

var p11TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page11",
    start:"top 80%",
    end:"top 20%",
    scrub:2
  }
})

p11TL.from("#page11",{
  y:100,
  opacity:1
})